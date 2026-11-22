/* Speakeasy: accounts. An account is a name plus a PIN or password of 6 or more characters.
   With an apiKey in js/cloud-config.js, accounts live in Firebase (Authentication for the
   name and PIN, Firestore for the progress), called over REST so no SDK is loaded.
   Without one, accounts live in this browser only. Exposes window.Accounts. */
(function () {
  'use strict';
  var CFG = window.SPEAKEASY_FIREBASE || {};
  var CLOUD = !!(CFG.apiKey && CFG.projectId);
  var MODE = CLOUD ? 'cloud' : 'local';
  var SESSION = 'speakeasy.session', REG = 'speakeasy.accounts', MIN = 6, MAXNAME = 32;

  function fail(code, detail) { var e = new Error(code); e.code = code; e.detail = detail || ''; return e; }
  function get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function put(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function cleanName(n) { return String(n || '').normalize('NFC').trim().replace(/\s+/g, ' '); }
  function normName(n) { return cleanName(n).toLowerCase(); }
  function hex(bytes) { return Array.prototype.map.call(bytes, function (b) { return ('0' + b.toString(16)).slice(-2); }).join(''); }
  function sha256(text) {
    if (!(window.crypto && crypto.subtle && window.TextEncoder)) return Promise.reject(fail('unsupported'));
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (b) { return hex(new Uint8Array(b)); });
  }
  function checkInput(name, pin) {
    var n = cleanName(name);
    if (!n) return fail('noname');
    if (n.length > MAXNAME) return fail('longname');
    if (String(pin || '').length < MIN) return fail('short');
    return null;
  }
  function pub(s) { return s ? { mode: s.mode, id: s.id, name: s.name } : null; }
  function begin(s) { if (!put(SESSION, s)) throw fail('storage'); return pub(s); }

  /* ---------- this browser only ---------- */
  var tries = 0, lockUntil = 0;
  function verifyLocal(name, pin) {
    var key = normName(name), rec = (get(REG) || {})[key];
    if (!rec) return Promise.resolve(null);
    return sha256(rec.salt + ':' + pin).then(function (h) { return h === rec.hash ? { key: key, rec: rec } : null; });
  }
  var local = {
    signUp: function (name, pin) {
      var key = normName(name), reg = get(REG) || {};
      if (reg[key]) return Promise.reject(fail('exists'));
      if (!(window.crypto && crypto.subtle)) return Promise.reject(fail('unsupported'));
      var salt = hex(crypto.getRandomValues(new Uint8Array(16)));
      return sha256(salt + ':' + pin).then(function (h) {
        reg[key] = { name: cleanName(name), salt: salt, hash: h, created: Date.now() };
        if (!put(REG, reg)) throw fail('storage');
        return begin({ mode: 'local', id: key, name: cleanName(name) });
      });
    },
    signIn: function (name, pin) {
      if (Date.now() < lockUntil) return Promise.reject(fail('many'));
      return verifyLocal(name, pin).then(function (ok) {
        if (!ok) { if (++tries >= 5) { tries = 0; lockUntil = Date.now() + 30000; } throw fail('wrong'); }
        tries = 0;
        return begin({ mode: 'local', id: ok.key, name: ok.rec.name });
      });
    }
  };

  /* ---------- Firebase over REST ---------- */
  var AUTH = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  var TOKEN = 'https://securetoken.googleapis.com/v1/token?key=';
  var DOCS = 'https://firestore.googleapis.com/v1/projects/' + encodeURIComponent(CFG.projectId || '') + '/databases/(default)/documents/users/';

  function call(url, opts) {
    return fetch(url, opts).then(function (r) {
      return r.text().then(function (t) { var j; try { j = t ? JSON.parse(t) : {}; } catch (e) { j = {}; } return { ok: r.ok, status: r.status, body: j }; });
    }, function () { throw fail('network'); });
  }
  function errText(body) { var e = body && body.error; return (e && (e.message || e)) + ''; }
  function authError(body) {
    var m = errText(body);
    if (/EMAIL_EXISTS/.test(m)) return fail('exists');
    if (/INVALID_LOGIN_CREDENTIALS|INVALID_PASSWORD|EMAIL_NOT_FOUND|USER_DISABLED/.test(m)) return fail('wrong');
    if (/WEAK_PASSWORD/.test(m)) return fail('short');
    if (/TOO_MANY_ATTEMPTS/.test(m)) return fail('many');
    if (/OPERATION_NOT_ALLOWED|ADMIN_ONLY_OPERATION|CONFIGURATION_NOT_FOUND/.test(m)) return fail('authoff', m);
    if (/API key|API_KEY/i.test(m)) return fail('badkey', m);
    return fail('server', m);
  }
  /* the name becomes a private address on a reserved domain: Firebase sends it no mail */
  function emailFor(name) { return sha256('speakeasy:' + normName(name)).then(function (h) { return 'u' + h.slice(0, 40) + '@speakeasy.example.com'; }); }
  function authCall(kind, name, pin) {
    return emailFor(name).then(function (email) {
      return call(AUTH + kind + '?key=' + encodeURIComponent(CFG.apiKey), {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: String(pin), returnSecureToken: true })
      });
    }).then(function (r) {
      if (!r.ok) throw authError(r.body);
      return begin({ mode: 'cloud', id: r.body.localId, name: cleanName(name), rt: r.body.refreshToken, it: r.body.idToken, exp: Date.now() + (+r.body.expiresIn || 3600) * 1000 });
    });
  }
  function idToken() {
    var s = get(SESSION);
    if (!s || s.mode !== 'cloud') return Promise.reject(fail('nosession'));
    if (s.it && Date.now() < s.exp - 60000) return Promise.resolve({ s: s, t: s.it });
    return call(TOKEN + encodeURIComponent(CFG.apiKey), {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(s.rt)
    }).then(function (r) {
      if (!r.ok) { var m = errText(r.body); throw fail(/TOKEN_EXPIRED|USER_NOT_FOUND|INVALID_REFRESH_TOKEN|USER_DISABLED|INVALID_GRANT_TYPE|MISSING_REFRESH_TOKEN/.test(m) ? 'expired' : 'server', m); }
      s.it = r.body.id_token; s.rt = r.body.refresh_token || s.rt; s.exp = Date.now() + (+r.body.expires_in || 3600) * 1000;
      put(SESSION, s);
      return { s: s, t: s.it };
    });
  }
  function dbError(r) {
    var m = errText(r.body);
    if (r.status === 401) return fail('expired', m);
    if (r.status === 403) return fail('rules', m);
    if (r.status === 404 || /does not exist|Datastore Mode/i.test(m)) return fail('nodb', m);
    return fail('server', m);
  }
  var cloud = {
    signUp: function (name, pin) { return authCall('signUp', name, pin); },
    signIn: function (name, pin) { return authCall('signInWithPassword', name, pin); },
    pull: function () {
      return idToken().then(function (a) {
        return call(DOCS + encodeURIComponent(a.s.id), { headers: { Authorization: 'Bearer ' + a.t } });
      }).then(function (r) {
        if (r.status === 404 && /^Document/.test(errText(r.body))) return null;
        if (!r.ok) throw dbError(r);
        var nm = (r.body.fields || {}).name, cur = get(SESSION);
        if (nm && nm.stringValue && cur && cur.mode === 'cloud') { cur.name = nm.stringValue; put(SESSION, cur); }
        var f = (r.body.fields || {}).data;
        try { return f && f.stringValue ? JSON.parse(f.stringValue) : null; } catch (e) { return null; }
      });
    },
    push: function (data, opts) {
      return idToken().then(function (a) {
        var body = JSON.stringify({ fields: {
          name: { stringValue: a.s.name },
          data: { stringValue: JSON.stringify(data) },
          updated: { integerValue: String(Date.now()) }
        } });
        return call(DOCS + encodeURIComponent(a.s.id), {
          method: 'PATCH', headers: { Authorization: 'Bearer ' + a.t, 'Content-Type': 'application/json' },
          body: body, keepalive: !!(opts && opts.keepalive) && body.length < 60000
        });
      }).then(function (r) { if (!r.ok) throw dbError(r); return true; });
    }
  };

  var B = CLOUD ? cloud : local;
  window.Accounts = {
    cloud: CLOUD,
    min: MIN,
    maxName: MAXNAME,
    session: function () { var s = get(SESSION); return s && s.mode === MODE && s.id ? pub(s) : null; },
    signUp: function (name, pin) { var bad = checkInput(name, pin); return bad ? Promise.reject(bad) : B.signUp(name, pin); },
    signIn: function (name, pin) { var bad = checkInput(name, pin); return bad ? Promise.reject(bad) : B.signIn(name, pin); },
    /* cloud copy of the progress, or null when there is none yet (and always null in local mode) */
    pull: function () { return CLOUD ? cloud.pull() : Promise.resolve(null); },
    push: function (data, opts) { return CLOUD ? cloud.push(data, opts) : Promise.resolve(true); },
    /* a same-name account made on this browser before Firebase was connected, if the PIN matches */
    localMatch: function (name, pin) { return verifyLocal(name, pin).then(function (ok) { return ok ? ok.key : null; }, function () { return null; }); },
    signOut: function () { try { localStorage.removeItem(SESSION); } catch (e) {} }
  };
})();
