/* Fluent: ติว TOEIC ส่วนที่ 3: Part 5 เติมคำในประโยค และสรุปไวยากรณ์ที่ออกบ่อย
   ช่องว่างเขียนเป็น ------- แบบข้อสอบจริง, tag บอกประเภทข้อ */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.tags = { form: 'ชนิดคำ', tense: 'tense', prep: 'บุพบท', conj: 'คำเชื่อม', pron: 'สรรพนาม', vocab: 'คำศัพท์', comp: 'เปรียบเทียบ', rel: 'relative', verb: 'รูปกริยา', agree: 'ประธานกับกริยา' };

  T.grammar = [
    { h: 'ดูท้ายคำ บอกชนิดคำ', rows: [['-tion, -ment, -ness, -ity, -ance, -er/-or', 'คำนาม: decision, payment, availability, attendance'], ['-ive, -ful, -able, -ous, -al, -ent', 'คุณศัพท์: effective, helpful, reliable, various, annual'], ['-ly', 'กริยาวิเศษณ์: quickly, recently, approximately'], ['-ize, -ify, -en', 'กริยา: organize, clarify, strengthen']] },
    { h: 'ช่องว่างตรงนี้ ต้องเป็นคำแบบไหน', rows: [['the / a / his / their + ___', 'คำนาม (หรือคุณศัพท์ + คำนาม)'], ['___ + คำนาม', 'คุณศัพท์: a successful launch'], ['is / was / became + ___', 'คุณศัพท์: The plan is flexible'], ['กริยา + ___ หรือ ___ + กริยา', 'กริยาวิเศษณ์: carefully review, was quickly approved'], ['has / have + ___', 'V3: has finished, have been notified']] },
    { h: 'คำเชื่อมที่สับสนบ่อย', rows: [['although, because, while, unless + ประโยค', 'Although it rained, we went.'], ['despite, in spite of, because of, due to + คำนาม', 'Despite the rain, we went.'], ['however, therefore, moreover', 'ขึ้นต้นประโยคใหม่ ตามด้วยจุลภาค'], ['either A or B / neither A nor B / both A and B / not only A but also B', 'คู่คำที่ต้องมาด้วยกัน']] },
    { h: 'คำบอกเวลากับ tense', rows: [['since, for, already, yet, so far, recently', 'present perfect: has worked'], ['yesterday, last year, ago, in 2020', 'past simple: worked'], ['by the time, by next month', 'future perfect: will have finished'], ['currently, at the moment, now', 'present continuous: is working'], ['next week, tomorrow, soon', 'future: will work / is going to work']] },
    { h: 'กริยาที่ตามด้วย to หรือ -ing', rows: [['decide, plan, agree, hope, need, want, expect, offer', '+ to V: agreed to sign'], ['consider, avoid, finish, suggest, recommend, mind, enjoy', '+ V-ing: suggested postponing'], ['look forward to, be used to, be committed to', 'to ตรงนี้เป็นบุพบท ตามด้วย V-ing']] }
  ];

  T.p5 = [
    { q: 'All employees must submit their travel expense reports ------- Friday.', opts: ['by', 'until', 'during', 'within'], ans: 0, tag: 'prep', why: 'by + เวลา = ภายในเวลานั้น (เส้นตาย) ส่วน until = ต่อเนื่องจนถึง ใช้กับการกระทำที่ทำยาว ๆ' },
    { q: 'The new software has made the billing process much more -------.', opts: ['efficiency', 'efficient', 'efficiently', 'efficiencies'], ans: 1, tag: 'form', why: 'more + คุณศัพท์ หลัง make something ___ ต้องเป็นคุณศัพท์ efficient' },
    { q: 'Ms. Lee ------- for the company for more than fifteen years.', opts: ['works', 'is working', 'has worked', 'will work'], ans: 2, tag: 'tense', why: 'for more than fifteen years บอกช่วงเวลาจากอดีตถึงปัจจุบัน ใช้ present perfect has worked' },
    { q: '------- the heavy traffic, most of the participants arrived on time.', opts: ['Although', 'Despite', 'Because', 'However'], ans: 1, tag: 'conj', why: 'หลังช่องว่างเป็นคำนาม the heavy traffic ไม่ใช่ประโยค จึงใช้ Despite (Although ต้องตามด้วยประโยค)' },
    { q: 'Please read the safety instructions ------- before using the machine.', opts: ['careful', 'care', 'carefully', 'cared'], ans: 2, tag: 'form', why: 'ขยายกริยา read ต้องเป็นกริยาวิเศษณ์ carefully' },
    { q: 'The sales team will present ------- findings at the meeting next week.', opts: ['they', 'them', 'their', 'theirs'], ans: 2, tag: 'pron', why: 'หน้าคำนาม findings ต้องใช้คำแสดงความเป็นเจ้าของ their' },
    { q: 'The board of directors ------- the proposal at yesterday\'s meeting.', opts: ['approves', 'approved', 'has approved', 'will approve'], ans: 1, tag: 'tense', why: 'yesterday\'s meeting เป็นอดีตที่ระบุเวลา ใช้ past simple approved' },
    { q: 'Customers who wish to return an item must present the original -------.', opts: ['receipt', 'recipe', 'reception', 'receiver'], ans: 0, tag: 'vocab', why: 'คืนสินค้าต้องแสดงใบเสร็จ receipt ส่วน recipe = สูตรอาหาร' },
    { q: 'The museum is open every day ------- Mondays.', opts: ['except', 'besides', 'without', 'unless'], ans: 0, tag: 'prep', why: 'except = ยกเว้น ตามด้วยคำนามได้ ส่วน unless ต้องตามด้วยประโยค' },
    { q: 'This year\'s conference was ------- than last year\'s.', opts: ['success', 'more successful', 'most successful', 'successfully'], ans: 1, tag: 'comp', why: 'มี than ต้องใช้ขั้นกว่า more successful' },
    { q: 'The manager suggested ------- the launch until the product had been fully tested.', opts: ['postpone', 'to postpone', 'postponing', 'postponed'], ans: 2, tag: 'verb', why: 'suggest ตามด้วย V-ing: suggested postponing' },
    { q: 'Each of the applicants ------- required to bring a copy of their résumé.', opts: ['are', 'is', 'were', 'be'], ans: 1, tag: 'agree', why: 'Each of + คำนามพหูพจน์ ประธานจริงคือ Each ซึ่งเป็นเอกพจน์ ใช้ is' },
    { q: 'The company is looking for an assistant ------- can speak both English and Japanese.', opts: ['who', 'which', 'whom', 'whose'], ans: 0, tag: 'rel', why: 'ขยายคน (an assistant) และทำหน้าที่ประธานของ can speak ใช้ who' },
    { q: 'Our store offers a wide ------- of office furniture at reasonable prices.', opts: ['selection', 'select', 'selective', 'selectively'], ans: 0, tag: 'form', why: 'a wide ___ of ต้องเป็นคำนาม selection' },
    { q: 'The shipment was delayed ------- a shortage of materials at the factory.', opts: ['because', 'due to', 'since', 'so that'], ans: 1, tag: 'conj', why: 'หลังช่องว่างเป็นคำนาม a shortage ใช้ due to (because ต้องตามด้วยประโยค ถ้าจะใช้กับคำนามต้องเป็น because of)' },
    { q: 'By the end of next month, we ------- the renovation of the lobby.', opts: ['complete', 'completed', 'will have completed', 'have completed'], ans: 2, tag: 'tense', why: 'By the end of next month บอกว่าจะเสร็จก่อนจุดเวลาในอนาคต ใช้ future perfect will have completed' },
    { q: 'Mr. Tan asked his assistant to ------- the meeting room for the afternoon.', opts: ['reserve', 'preserve', 'deserve', 'observe'], ans: 0, tag: 'vocab', why: 'reserve = จอง ห้องประชุม' },
    { q: 'Neither the manager ------- her assistant was available to answer the call.', opts: ['or', 'and', 'nor', 'but'], ans: 2, tag: 'conj', why: 'คู่คำ neither ... nor' },
    { q: 'The price of the tickets includes lunch ------- a guided tour of the factory.', opts: ['as well as', 'as long as', 'as soon as', 'as far as'], ans: 0, tag: 'conj', why: 'as well as = และยัง ... ด้วย ใช้เชื่อมคำนามสองตัว' },
    { q: 'The report must be ------- reviewed before it is sent to the client.', opts: ['thorough', 'thoroughly', 'thoroughness', 'more thorough'], ans: 1, tag: 'form', why: 'อยู่ระหว่าง be กับ V3 ขยายกริยา reviewed ใช้กริยาวิเศษณ์ thoroughly' },
    { q: 'Ms. Garcia will be ------- for training all new employees in the sales department.', opts: ['responsible', 'responsibility', 'responsibly', 'responded'], ans: 0, tag: 'form', why: 'be responsible for = รับผิดชอบ หลัง be ใช้คุณศัพท์' },
    { q: 'Visitors are asked to sign in at the front desk ------- entering the building.', opts: ['before', 'until', 'during', 'since'], ans: 0, tag: 'prep', why: 'ลงชื่อก่อนเข้าอาคาร before + V-ing' },
    { q: 'If the weather ------- good tomorrow, the company picnic will be held at the park.', opts: ['is', 'will be', 'was', 'would be'], ans: 0, tag: 'tense', why: 'If ประโยคเงื่อนไขแบบที่ 1 ในส่วน If ใช้ present simple แม้พูดถึงอนาคต' },
    { q: 'The ------- of the new branch office has been scheduled for March 3.', opts: ['open', 'opened', 'opening', 'opens'], ans: 2, tag: 'form', why: 'หลัง The ต้องเป็นคำนาม opening = การเปิด' },
    { q: 'Please let me know ------- you will be able to attend the workshop.', opts: ['whether', 'either', 'unless', 'despite'], ans: 0, tag: 'conj', why: 'let me know whether ... = บอกให้รู้ว่าจะ ... หรือไม่' },
    { q: 'The new printer is ------- faster than the old one.', opts: ['very', 'much', 'many', 'more'], ans: 1, tag: 'comp', why: 'ขยายขั้นกว่า faster ใช้ much (very ใช้กับขั้นกว่าไม่ได้)' },
    { q: 'All of the applications ------- carefully by the hiring committee last week.', opts: ['reviewed', 'were reviewed', 'have reviewed', 'are reviewing'], ans: 1, tag: 'verb', why: 'ใบสมัครถูกตรวจ เป็นประโยค passive และ last week เป็นอดีต ใช้ were reviewed' },
    { q: 'The CEO thanked the staff for ------- hard work during the busy season.', opts: ['they', 'their', 'them', 'themselves'], ans: 1, tag: 'pron', why: 'หน้า hard work (คำนาม) ใช้ their' },
    { q: 'Ms. Wong decided ------- the job offer from the overseas branch.', opts: ['accepting', 'to accept', 'accept', 'accepted'], ans: 1, tag: 'verb', why: 'decide ตามด้วย to V: decided to accept' },
    { q: 'The hotel is ------- located near the airport and the convention center.', opts: ['convenient', 'convenience', 'conveniently', 'conveniences'], ans: 2, tag: 'form', why: 'ขยาย located (V3) ใช้กริยาวิเศษณ์ conveniently' },
    { q: 'We are ------- to announce that our online store is now open.', opts: ['pleased', 'pleasing', 'pleasure', 'please'], ans: 0, tag: 'form', why: 'be pleased to = ยินดีที่จะ ใช้ V3 เพราะเป็นความรู้สึกของผู้พูด' },
    { q: 'The meeting was cancelled ------- the manager was ill.', opts: ['because of', 'because', 'despite', 'due to'], ans: 1, tag: 'conj', why: 'หลังช่องว่างเป็นประโยค the manager was ill ใช้ because' },
    { q: 'The renovation project is expected to be completed ------- two months.', opts: ['within', 'among', 'between', 'along'], ans: 0, tag: 'prep', why: 'within + ระยะเวลา = ภายในเวลา' },
    { q: 'The company plans to ------- its operations to Vietnam next year.', opts: ['expand', 'expire', 'expend', 'expose'], ans: 0, tag: 'vocab', why: 'expand operations = ขยายกิจการ' },
    { q: 'Mr. Kim, ------- has worked in the finance department for ten years, will be promoted.', opts: ['who', 'which', 'that', 'whose'], ans: 0, tag: 'rel', why: 'มีจุลภาคคั่นและขยายคน ใช้ who (that ใช้หลังจุลภาคไม่ได้)' },
    { q: 'The number of online orders ------- significantly over the past year.', opts: ['have increased', 'has increased', 'increasing', 'were increased'], ans: 1, tag: 'agree', why: 'The number of ... เป็นเอกพจน์ และ over the past year ใช้ present perfect has increased' },
    { q: 'The instructions were written so ------- that everyone understood them.', opts: ['clear', 'clearly', 'clearer', 'clearness'], ans: 1, tag: 'form', why: 'ขยายกริยา were written ใช้กริยาวิเศษณ์ clearly' },
    { q: 'Please contact the IT department ------- you have any problems with your computer.', opts: ['if', 'unless', 'whether', 'although'], ans: 0, tag: 'conj', why: 'if = ถ้า มีปัญหาให้ติดต่อ' },
    { q: 'The new policy will take ------- on January 1.', opts: ['effect', 'affect', 'effective', 'effectively'], ans: 0, tag: 'vocab', why: 'take effect = มีผลบังคับใช้ ใช้คำนาม effect' },
    { q: 'Ms. Patel is the ------- qualified candidate we have interviewed so far.', opts: ['more', 'most', 'much', 'very'], ans: 1, tag: 'comp', why: 'the + ขั้นสุด most qualified' },
    { q: 'The client asked us to send ------- a revised estimate by Thursday.', opts: ['he', 'his', 'him', 'himself'], ans: 2, tag: 'pron', why: 'กรรมของ send ใช้ him' },
    { q: 'The seminar ------- by more than three hundred people last weekend.', opts: ['attended', 'was attended', 'has attended', 'attends'], ans: 1, tag: 'verb', why: 'มี by people บอกผู้กระทำ เป็น passive และ last weekend เป็นอดีต was attended' },
    { q: 'Employees are encouraged to ------- in the annual charity run.', opts: ['participate', 'participant', 'participation', 'participating'], ans: 0, tag: 'form', why: 'หลัง to ใช้กริยาช่องหนึ่ง participate' },
    { q: 'Our technicians are available ------- the clock to assist customers.', opts: ['around', 'across', 'over', 'through'], ans: 0, tag: 'prep', why: 'around the clock = ตลอด 24 ชั่วโมง' },
    { q: 'The marketing campaign was very successful; -------, sales rose by 20 percent.', opts: ['however', 'as a result', 'otherwise', 'instead'], ans: 1, tag: 'conj', why: 'ยอดขายเพิ่มเป็นผลของแคมเปญ ใช้ as a result' },
    { q: 'Ms. Brown is currently ------- a report on customer satisfaction.', opts: ['prepare', 'prepared', 'preparing', 'preparation'], ans: 2, tag: 'tense', why: 'currently + is ___ ใช้ present continuous is preparing' },
    { q: 'Applicants must have at least three years of ------- in a similar position.', opts: ['experience', 'experienced', 'experiment', 'expert'], ans: 0, tag: 'vocab', why: 'years of experience = ประสบการณ์กี่ปี' },
    { q: 'The two companies have agreed to work ------- on the new project.', opts: ['together', 'each other', 'another', 'one'], ans: 0, tag: 'vocab', why: 'work together = ทำงานร่วมกัน' },
    { q: 'The package should arrive ------- three to five business days.', opts: ['in', 'on', 'at', 'by'], ans: 0, tag: 'prep', why: 'in + ระยะเวลา = อีก ... ข้างหน้า arrive in three to five days' },
    { q: 'Only employees with a valid ID card are ------- to enter the laboratory.', opts: ['permitted', 'permission', 'permit', 'permitting'], ans: 0, tag: 'verb', why: 'be permitted to = ได้รับอนุญาตให้ เป็น passive' },
    { q: 'The quarterly report shows that profits were ------- higher than expected.', opts: ['slight', 'slightly', 'slighter', 'slightest'], ans: 1, tag: 'form', why: 'ขยายคุณศัพท์ higher ใช้กริยาวิเศษณ์ slightly' },
    { q: 'Mr. Ito will be out of the office ------- Monday to Wednesday.', opts: ['from', 'since', 'for', 'between'], ans: 0, tag: 'prep', why: 'from ... to ... = ตั้งแต่ ... ถึง ...' },
    { q: 'The restaurant, ------- opened last month, is already very popular.', opts: ['who', 'which', 'what', 'where'], ans: 1, tag: 'rel', why: 'ขยายสิ่งของ (The restaurant) หลังจุลภาค ใช้ which' },
    { q: 'Ms. Chen will ------- the training session in place of Mr. Davis.', opts: ['conduct', 'conductor', 'conduction', 'conducting'], ans: 0, tag: 'form', why: 'หลัง will ใช้กริยาช่องหนึ่ง conduct = จัด ดำเนินการ' },
    { q: 'Not only does the hotel have a pool, ------- it also has a fitness center.', opts: ['and', 'but', 'or', 'so'], ans: 1, tag: 'conj', why: 'คู่คำ not only ... but (also)' },
    { q: 'We look forward to ------- you at the opening ceremony.', opts: ['see', 'seeing', 'seen', 'be seen'], ans: 1, tag: 'verb', why: 'look forward to ตรง to เป็นบุพบท ตามด้วย V-ing: seeing' },
    { q: 'The factory has reduced its energy use ------- installing solar panels.', opts: ['by', 'with', 'for', 'from'], ans: 0, tag: 'prep', why: 'by + V-ing = ด้วยการ ... (บอกวิธี)' },
    { q: 'All the staff members ------- the new manager very helpful.', opts: ['find', 'finds', 'finding', 'to find'], ans: 0, tag: 'agree', why: 'ประธาน All the staff members เป็นพหูพจน์ ใช้ find' },
    { q: 'The contract will be signed ------- both parties agree to the terms.', opts: ['once', 'during', 'despite', 'because of'], ans: 0, tag: 'conj', why: 'once + ประโยค = เมื่อ ... แล้ว' },
    { q: 'The director asked that the budget be submitted for ------- by next week.', opts: ['approve', 'approval', 'approved', 'approving'], ans: 1, tag: 'form', why: 'หลังบุพบท for ต้องเป็นคำนาม approval' }
  ];
})();
