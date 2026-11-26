/* Fluent: หลักสูตรภาษาอังกฤษจากศูนย์ถึงพูดคล่อง
   โครงสร้าง: 7 ขั้น (CEFR Pre-A1 ถึง C2) ขั้นละ 6 บท
   words: [อังกฤษ, ไทย]  sents: [อังกฤษ, ไทย]  pairs: คู่เสียงที่คนไทยมักสับสน
   แก้ไขหรือเพิ่มบทเรียนได้ในไฟล์นี้ไฟล์เดียว */
window.COURSE = [
{
  id: "s0", cefr: "Pre-A1", name: "เริ่มจากศูนย์", en: "First words",
  cando: "ทักทาย บอกชื่อ บอกอายุ นับเลข และแนะนำครอบครัวสั้น ๆ ได้",
  talk: [
    ["What is your name?", "My name is ..."],
    ["How are you today?", "I'm fine, thank you. / I'm good."],
    ["How old are you?", "I am ... years old."],
    ["Can you spell your name?", "Sure. N, O, K."],
    ["Tell me about your family.", "I have ... My mother is ..."],
    ["What color is your bag?", "It is ..."]
  ],
  lessons: [
  {
    id: "s0l1", title: "ตัวอักษรและเสียง", en: "Letters and sounds", head: "A", extra: "alphabet",
    goal: "อ่านชื่อตัวอักษร A ถึง Z ได้ สะกดชื่อตัวเองได้ และแยกเสียงที่คนไทยมักสับสน",
    notes: [
      "ภาษาอังกฤษมี 26 ตัวอักษร แต่ละตัวมีทั้ง <b>ชื่อ</b> และ <b>เสียง</b> เช่น G ชื่อว่า \"จี\" แต่ในคำว่า go ออกเสียง \"ก\"",
      "สระมี 5 ตัว: A E I O U ตัวอื่นเป็นพยัญชนะ",
      "ตัวที่คนไทยมักอ่านผิด: <b>E</b> อ่านว่า \"อี\" (ไม่ใช่ \"เอ\"), <b>I</b> อ่านว่า \"ไอ\", <b>R</b> อ่านว่า \"อาร์\", <b>W</b> อ่านว่า \"ดับเบิลยู\"",
      "ระวังเสียงที่คล้ายกัน: rice (ข้าว) กับ lice (เหา) ต่างกันแค่เสียงขึ้นต้น R กับ L ส่วน ship (เรือ) กับ sheep (แกะ) ต่างกันที่สระสั้นกับสระยาว ลองฟังคู่เสียงในแบบฝึกหัดให้ดี"
    ],
    words: [["A","เอ"],["E","อี"],["I","ไอ"],["G","จี"],["J","เจ"],["R","อาร์"],["V","วี"],["W","ดับเบิลยู"],["Y","วาย"],["Z","ซี (อเมริกัน) / เซ็ด (อังกฤษ)"]],
    sents: [
      ["How do you spell it?", "สะกดยังไง"],
      ["My name is Nok. N, O, K.", "ฉันชื่อนก เอ็น โอ เค"],
      ["Can you say it again, please?", "ช่วยพูดอีกครั้งได้ไหม"],
      ["Sorry, I don't understand.", "ขอโทษ ฉันไม่เข้าใจ"],
      ["Please speak slowly.", "ช่วยพูดช้า ๆ หน่อย"]
    ],
    pairs: [["rice","lice"],["light","right"],["ship","sheep"],["fan","van"],["three","tree"],["wine","vine"]]
  },
  {
    id: "s0l2", title: "ทักทาย", en: "Hello", head: "H",
    goal: "ทักทาย ถามสารทุกข์สุกดิบ และบอกลาได้ทุกช่วงเวลา",
    notes: [
      "<b>Hello</b> สุภาพ ใช้ได้กับทุกคน <b>Hi</b> กันเองกว่า ใช้กับเพื่อน",
      "<b>Good night</b> ใช้ตอน <b>ลา</b> ก่อนนอนหรือแยกย้ายตอนกลางคืน ไม่ได้ใช้ทักทาย ถ้าเจอกันตอนค่ำให้พูด Good evening",
      "ถามว่า How are you? ตอบได้หลายแบบ: I'm fine, thank you. / I'm good. / Not bad. แล้วถามกลับ And you?",
      "<b>Nice to meet you</b> ใช้เฉพาะตอนเจอกันครั้งแรก"
    ],
    words: [["hello","สวัสดี"],["hi","หวัดดี (กันเอง)"],["good morning","สวัสดีตอนเช้า"],["good afternoon","สวัสดีตอนบ่าย"],["good evening","สวัสดีตอนเย็น"],["goodbye","ลาก่อน"],["thank you","ขอบคุณ"],["sorry","ขอโทษ"],["please","กรุณา / ได้โปรด"],["see you later","แล้วเจอกันนะ"]],
    sents: [
      ["Hello, my name is Nok.", "สวัสดี ฉันชื่อนก"],
      ["Good morning! How are you?", "อรุณสวัสดิ์ สบายดีไหม"],
      ["I'm fine, thank you. And you?", "สบายดี ขอบคุณ แล้วคุณล่ะ"],
      ["Nice to meet you.", "ยินดีที่ได้รู้จัก"],
      ["See you later!", "แล้วเจอกันนะ"]
    ]
  },
  {
    id: "s0l3", title: "ตัวเลข", en: "Numbers", head: "1",
    goal: "นับเลข 0 ถึง 100 บอกอายุ และบอกเบอร์โทรศัพท์ได้",
    notes: [
      "13 ถึง 19 ลงท้ายด้วย <b>-teen</b> และเน้นเสียงท้าย: fif<b>TEEN</b> ส่วน 20, 30, 40 ลงท้ายด้วย <b>-ty</b> และเน้นเสียงหน้า: <b>FIF</b>ty",
      "เลข 0 เรียกว่า zero แต่ในเบอร์โทรศัพท์คนมักพูดว่า \"oh\"",
      "บอกอายุ: I am twenty years old. หรือสั้น ๆ ว่า I'm twenty.",
      "ตัวเลขผสม: 21 = twenty-one, 99 = ninety-nine"
    ],
    words: [["zero","ศูนย์"],["one","หนึ่ง"],["two","สอง"],["three","สาม"],["five","ห้า"],["eight","แปด"],["ten","สิบ"],["twelve","สิบสอง"],["fifteen","สิบห้า"],["fifty","ห้าสิบ"],["hundred","ร้อย"]],
    sents: [
      ["How old are you?", "คุณอายุเท่าไหร่"],
      ["I am twenty years old.", "ฉันอายุยี่สิบปี"],
      ["My phone number is zero eight one.", "เบอร์โทรของฉันคือศูนย์แปดหนึ่ง"],
      ["It's fifty baht.", "ราคาห้าสิบบาท"],
      ["I have two cats.", "ฉันมีแมวสองตัว"]
    ],
    pairs: [["fifteen","fifty"],["thirteen","thirty"],["fourteen","forty"]]
  },
  {
    id: "s0l4", title: "ฉันคือใคร", en: "I am, you are", head: "I",
    goal: "ใช้ am / is / are แนะนำตัวเองและพูดถึงคนอื่นได้",
    notes: [
      "<b>I am</b> / <b>he, she, it is</b> / <b>you, we, they are</b>",
      "ย่อได้เวลาพูด: I'm, you're, he's, she's, it's, we're, they're",
      "ภาษาไทยพูดว่า \"เธอสวย\" ได้โดยไม่มีคำว่า \"เป็น\" แต่ภาษาอังกฤษต้องมี be เสมอ: She <b>is</b> beautiful.",
      "ทำเป็นคำถามให้สลับที่: You are a student. → <b>Are you</b> a student?"
    ],
    words: [["I","ฉัน / ผม"],["you","คุณ"],["he","เขา (ผู้ชาย)"],["she","เธอ (ผู้หญิง)"],["we","เรา"],["they","พวกเขา"],["student","นักเรียน"],["teacher","ครู"],["friend","เพื่อน"],["doctor","หมอ"]],
    sents: [
      ["I am a student.", "ฉันเป็นนักเรียน"],
      ["She is my friend.", "เธอเป็นเพื่อนของฉัน"],
      ["We are Thai.", "เราเป็นคนไทย"],
      ["They are teachers.", "พวกเขาเป็นครู"],
      ["Are you a doctor? Yes, I am.", "คุณเป็นหมอหรือเปล่า ใช่ ฉันเป็นหมอ"]
    ]
  },
  {
    id: "s0l5", title: "สีและสิ่งของ", en: "This is my bag", head: "C",
    goal: "ใช้ this / that / a / an และบอกสีของสิ่งของได้",
    notes: [
      "<b>this</b> = อันนี้ (ใกล้) <b>that</b> = อันนั้น (ไกล)",
      "<b>a</b> ใช้หน้าคำที่ขึ้นต้นด้วยเสียงพยัญชนะ: a pen, a book <b>an</b> ใช้หน้าเสียงสระ: an apple, an hour (h ไม่ออกเสียง)",
      "สีวางไว้ <b>หน้า</b> คำนาม: a red car ภาษาไทยพูดกลับกันว่า \"รถสีแดง\"",
      "ถามสี: What color is it?"
    ],
    words: [["red","สีแดง"],["blue","สีน้ำเงิน / สีฟ้า"],["green","สีเขียว"],["yellow","สีเหลือง"],["black","สีดำ"],["white","สีขาว"],["book","หนังสือ"],["bag","กระเป๋า"],["pen","ปากกา"],["phone","โทรศัพท์"]],
    sents: [
      ["This is my bag.", "นี่คือกระเป๋าของฉัน"],
      ["That is a red pen.", "นั่นคือปากกาสีแดง"],
      ["What color is it?", "มันสีอะไร"],
      ["It is blue.", "มันสีน้ำเงิน"],
      ["Is this your phone?", "นี่โทรศัพท์ของคุณหรือเปล่า"]
    ]
  },
  {
    id: "s0l6", title: "ครอบครัว", en: "My family", head: "F",
    goal: "ใช้ have / has และ my / your เล่าเรื่องครอบครัวได้",
    notes: [
      "<b>I, you, we, they have</b> / <b>he, she, it has</b>",
      "ภาษาอังกฤษไม่แยกพี่กับน้อง: sister = พี่สาวหรือน้องสาว ถ้าอยากชัดใช้ older sister / younger sister",
      "คำแสดงความเป็นเจ้าของ: my, your, his, her, our, their",
      "คำถาม: Do you have any brothers or sisters?"
    ],
    words: [["mother","แม่"],["father","พ่อ"],["sister","พี่สาว / น้องสาว"],["brother","พี่ชาย / น้องชาย"],["son","ลูกชาย"],["daughter","ลูกสาว"],["husband","สามี"],["wife","ภรรยา"],["family","ครอบครัว"],["children","ลูก ๆ / เด็ก ๆ"]],
    sents: [
      ["I have two brothers.", "ฉันมีพี่น้องผู้ชายสองคน"],
      ["She has an older sister.", "เธอมีพี่สาว"],
      ["This is my mother.", "นี่คือแม่ของฉัน"],
      ["Do you have any children?", "คุณมีลูกไหม"],
      ["My family is small.", "ครอบครัวของฉันเป็นครอบครัวเล็ก ๆ"]
    ]
  }
  ]
},
{
  id: "s1", cefr: "A1", name: "ประโยคแรกในชีวิตจริง", en: "Everyday life",
  cando: "เล่ากิจวัตร บอกเวลา สั่งอาหาร ซื้อของ และพูดว่าชอบอะไรได้",
  talk: [
    ["What time do you usually get up?", "I usually get up at ..."],
    ["What do you like doing on weekends?", "I like ... -ing"],
    ["What is your favorite food?", "My favorite food is ..."],
    ["Is there a market near your home?", "Yes, there is ... / No, there isn't ..."],
    ["What can you do well?", "I can ..."],
    ["Describe your morning routine.", "First I ... Then I ..."]
  ],
  lessons: [
  {
    id: "s1l1", title: "กิจวัตรประจำวัน", en: "My day", head: "D",
    goal: "ใช้ present simple เล่าสิ่งที่ทำเป็นประจำได้",
    notes: [
      "ใช้ present simple กับสิ่งที่ทำเป็นนิสัยหรือประจำ",
      "ประธาน he / she / it ต้องเติม <b>-s</b> หรือ <b>-es</b> ที่กริยา: she <b>works</b>, he <b>goes</b>, it <b>watches</b>",
      "คำถามและปฏิเสธใช้ do / does: <b>Does</b> she work? She <b>doesn't</b> work. (กริยากลับเป็นรูปเดิม)",
      "always, usually, sometimes, never วาง <b>หน้า</b> กริยาแท้ แต่วาง <b>หลัง</b> am / is / are"
    ],
    words: [["get up","ตื่นนอน"],["take a shower","อาบน้ำ"],["have breakfast","กินมื้อเช้า"],["go to work","ไปทำงาน"],["go to bed","เข้านอน"],["every day","ทุกวัน"],["always","เสมอ"],["usually","มักจะ"],["sometimes","บางครั้ง"],["never","ไม่เคยเลย"]],
    sents: [
      ["I get up at six every day.", "ฉันตื่นหกโมงทุกวัน"],
      ["She goes to work by bus.", "เธอนั่งรถเมล์ไปทำงาน"],
      ["He never has breakfast.", "เขาไม่เคยกินข้าวเช้าเลย"],
      ["Do you work on Saturday?", "คุณทำงานวันเสาร์ไหม"],
      ["I usually go to bed at eleven.", "ฉันมักเข้านอนตอนห้าทุ่ม"]
    ]
  },
  {
    id: "s1l2", title: "เวลาและวัน", en: "Time and days", head: "T",
    goal: "ถามและบอกเวลา วัน และใช้ in / on / at ได้ถูก",
    notes: [
      "<b>at</b> + เวลา (at 7 o'clock) <b>on</b> + วัน (on Monday) <b>in</b> + ช่วงของวัน เดือน ปี (in the morning, in May)",
      "7:30 = half past seven หรือ seven thirty",
      "7:45 = quarter to eight หรือ seven forty-five",
      "ถามเวลา: What time is it? ตอบ: It's ..."
    ],
    words: [["Monday","วันจันทร์"],["Friday","วันศุกร์"],["Sunday","วันอาทิตย์"],["weekend","สุดสัปดาห์"],["today","วันนี้"],["tomorrow","พรุ่งนี้"],["yesterday","เมื่อวาน"],["o'clock","นาฬิกา (ตรง)"],["half past","ครึ่ง (เลยมาสามสิบนาที)"],["quarter","สิบห้านาที"]],
    sents: [
      ["What time is it?", "กี่โมงแล้ว"],
      ["It's half past seven.", "ตอนนี้เจ็ดโมงครึ่ง"],
      ["The shop opens at nine o'clock.", "ร้านเปิดเก้าโมง"],
      ["See you on Monday.", "เจอกันวันจันทร์"],
      ["I'm free this weekend.", "สุดสัปดาห์นี้ฉันว่าง"]
    ]
  },
  {
    id: "s1l3", title: "สั่งอาหาร", en: "At a restaurant", head: "R",
    goal: "สั่งอาหาร ขอสิ่งที่ต้องการ และเช็กบิลอย่างสุภาพได้",
    notes: [
      "<b>I'd like ...</b> (= I would like) สุภาพกว่า I want",
      "ขอของ: <b>Can I have</b> the menu, please?",
      "ไม่เอาบางอย่าง: <b>without</b> onions หรือ <b>no</b> onions, please",
      "เช็กบิล: the bill (อังกฤษ) / the check (อเมริกัน)"
    ],
    words: [["menu","เมนู"],["water","น้ำเปล่า"],["rice","ข้าว"],["chicken","ไก่"],["spicy","เผ็ด"],["delicious","อร่อย"],["bill","บิล / ใบเสร็จค่าอาหาร"],["order","สั่ง (อาหาร)"],["without","ไม่ใส่ / ไม่เอา"],["coffee","กาแฟ"]],
    sents: [
      ["Can I have the menu, please?", "ขอเมนูหน่อยครับ"],
      ["I'd like fried rice with chicken.", "ขอข้าวผัดไก่"],
      ["Not too spicy, please.", "ไม่เผ็ดมากนะ"],
      ["Can I get the bill, please?", "เช็กบิลด้วยครับ"],
      ["This is delicious!", "อันนี้อร่อยมาก"]
    ]
  },
  {
    id: "s1l4", title: "ซื้อของ", en: "Shopping", head: "S",
    goal: "ถามราคา ลองเสื้อ ขอไซซ์ และจ่ายเงินได้",
    notes: [
      "ถามราคา: How much <b>is</b> this? (ชิ้นเดียว) / How much <b>are</b> these? (หลายชิ้น)",
      "<b>too</b> + คำคุณศัพท์ = มากเกินไป: too expensive, too big",
      "ลองใส่: Can I <b>try it on</b>?",
      "จ่ายเงิน: pay <b>in</b> cash / pay <b>by</b> card"
    ],
    words: [["how much","ราคาเท่าไหร่"],["cheap","ถูก"],["expensive","แพง"],["size","ขนาด / ไซซ์"],["try on","ลองใส่"],["discount","ส่วนลด"],["cash","เงินสด"],["card","บัตร"],["receipt","ใบเสร็จ"],["shirt","เสื้อเชิ้ต"]],
    sents: [
      ["How much is this shirt?", "เสื้อตัวนี้ราคาเท่าไหร่"],
      ["It's too expensive.", "มันแพงเกินไป"],
      ["Can I try it on?", "ขอลองใส่ได้ไหม"],
      ["Do you have a smaller size?", "มีไซซ์เล็กกว่านี้ไหม"],
      ["Can I pay by card?", "จ่ายด้วยบัตรได้ไหม"]
    ]
  },
  {
    id: "s1l5", title: "สถานที่ในเมือง", en: "Around town", head: "B",
    goal: "ใช้ there is / there are และบอกตำแหน่งสถานที่ได้",
    notes: [
      "\"มี\" สถานที่หรือสิ่งของ ใช้ <b>There is</b> (หนึ่งอย่าง) / <b>There are</b> (หลายอย่าง)",
      "คนไทยมักพูดว่า My town has a bank ซึ่งพอได้ แต่ธรรมชาติกว่าคือ <b>There is</b> a bank in my town.",
      "บอกตำแหน่ง: near (ใกล้), next to (ติดกับ), opposite (ตรงข้าม), between (ระหว่าง)",
      "คำถาม: <b>Is there</b> a bank near here?"
    ],
    words: [["bank","ธนาคาร"],["hospital","โรงพยาบาล"],["market","ตลาด"],["station","สถานี"],["park","สวนสาธารณะ"],["near","ใกล้"],["next to","ติดกับ"],["opposite","ตรงข้าม"],["between","ระหว่าง"],["there is","มี (หนึ่ง)"]],
    sents: [
      ["Is there a bank near here?", "แถวนี้มีธนาคารไหม"],
      ["There are two markets in my town.", "เมืองของฉันมีตลาดสองแห่ง"],
      ["The station is next to the hospital.", "สถานีอยู่ติดกับโรงพยาบาล"],
      ["The café is opposite the park.", "คาเฟ่อยู่ตรงข้ามสวน"],
      ["There isn't a cinema here.", "ที่นี่ไม่มีโรงหนัง"]
    ]
  },
  {
    id: "s1l6", title: "ชอบอะไร ทำอะไรได้", en: "Likes and abilities", head: "L",
    goal: "พูดถึงสิ่งที่ชอบ ไม่ชอบ และความสามารถด้วย can ได้",
    notes: [
      "like / love / enjoy / hate + กริยา <b>-ing</b>: I like <b>swimming</b>.",
      "ปฏิเสธ: I <b>don't</b> like ... / She <b>doesn't</b> like ...",
      "<b>can</b> + กริยารูปเดิม: She can swim. (ไม่ใช่ can swims หรือ can to swim)",
      "ฟังให้ดี: can ในประโยคบอกเล่าออกเสียงเบา \"เคิน\" ส่วน can't ออกเสียงเต็ม \"แคนท์\""
    ],
    words: [["like","ชอบ"],["love","รักมาก / ชอบมาก"],["hate","เกลียด"],["enjoy","สนุกกับ"],["swimming","การว่ายน้ำ"],["cooking","การทำอาหาร"],["music","ดนตรี"],["movie","ภาพยนตร์"],["can","สามารถ / ทำได้"],["guitar","กีตาร์"]],
    sents: [
      ["I like listening to music.", "ฉันชอบฟังเพลง"],
      ["She loves cooking Thai food.", "เธอชอบทำอาหารไทยมาก"],
      ["I don't like horror movies.", "ฉันไม่ชอบหนังสยองขวัญ"],
      ["Can you swim? Yes, I can.", "คุณว่ายน้ำเป็นไหม เป็น"],
      ["He can play the guitar.", "เขาเล่นกีตาร์เป็น"]
    ],
    pairs: [["can","can't"],["live","leave"],["walk","work"]]
  }
  ]
},
{
  id: "s2", cefr: "A2", name: "เล่าเรื่องได้", en: "Telling stories",
  cando: "เล่าเรื่องที่ผ่านมา ถามทาง เปรียบเทียบสิ่งต่าง ๆ และบอกอาการป่วยได้",
  talk: [
    ["What did you do last weekend?", "Last weekend I ..."],
    ["Tell me about your last trip.", "I went to ... It was ..."],
    ["What are you doing right now?", "Right now I'm ..."],
    ["Which is better, the city or the countryside?", "I think ... is better because ..."],
    ["How do I get to your house from the station?", "Go straight, then turn ..."],
    ["What do you do when you have a cold?", "I usually ... I should ..."]
  ],
  lessons: [
  {
    id: "s2l1", title: "เมื่อวานทำอะไร", en: "Yesterday", head: "Y",
    goal: "ใช้ past simple เล่าเรื่องที่เกิดขึ้นแล้วได้",
    notes: [
      "ภาษาไทยใช้คำว่า \"แล้ว\" หรือ \"เมื่อวาน\" บอกอดีต แต่ภาษาอังกฤษต้อง <b>เปลี่ยนรูปกริยา</b>",
      "กริยาปกติเติม <b>-ed</b>: work → worked, visit → visited",
      "กริยาไม่ปกติต้องจำ: go → <b>went</b>, eat → <b>ate</b>, see → <b>saw</b>, buy → <b>bought</b>, have → <b>had</b>",
      "คำถามและปฏิเสธใช้ <b>did</b> แล้วกริยากลับเป็นรูปเดิม: Did you <b>go</b>? (ไม่ใช่ Did you went?)"
    ],
    words: [["went","ไป (รูปอดีตของ go)"],["ate","กิน (รูปอดีตของ eat)"],["saw","เห็น (รูปอดีตของ see)"],["bought","ซื้อ (รูปอดีตของ buy)"],["had","มี / กิน (รูปอดีตของ have)"],["visited","ไปเยี่ยม / ไปเที่ยว (รูปอดีตของ visit)"],["watched","ดู (รูปอดีตของ watch)"],["last night","เมื่อคืน"],["last weekend","สุดสัปดาห์ที่แล้ว"],["ago","ก่อน / ที่แล้ว (two days ago = สองวันก่อน)"]],
    sents: [
      ["I went to the beach last weekend.", "สุดสัปดาห์ที่แล้วฉันไปทะเล"],
      ["We ate seafood and watched the sunset.", "เรากินอาหารทะเลและดูพระอาทิตย์ตก"],
      ["Did you have a good time?", "สนุกไหม"],
      ["I didn't go to work yesterday.", "เมื่อวานฉันไม่ได้ไปทำงาน"],
      ["She bought a new phone two days ago.", "เธอซื้อโทรศัพท์ใหม่เมื่อสองวันก่อน"]
    ]
  },
  {
    id: "s2l2", title: "เดินทาง", en: "Travel", head: "P",
    goal: "จองที่พัก เช็กอิน และพูดเรื่องการเดินทางได้",
    notes: [
      "<b>book</b> เป็นกริยาแปลว่า จอง: I'd like to book a room.",
      "บอกระยะเวลา: <b>It takes</b> two hours to get there.",
      "ยานพาหนะ: <b>by</b> train, <b>by</b> plane แต่เดินเท้าใช้ <b>on foot</b>",
      "trip = การเดินทางไปเที่ยว / travel มักใช้เป็นกริยา"
    ],
    words: [["airport","สนามบิน"],["ticket","ตั๋ว"],["flight","เที่ยวบิน"],["passport","หนังสือเดินทาง"],["hotel","โรงแรม"],["book","จอง"],["check in","เช็กอิน"],["luggage","กระเป๋าเดินทาง / สัมภาระ"],["delayed","ล่าช้า"],["trip","ทริป / การเดินทาง"]],
    sents: [
      ["I'd like to book a room for two nights.", "ฉันอยากจองห้องสองคืน"],
      ["Where do I check in?", "เช็กอินที่ไหน"],
      ["My flight is delayed.", "เที่ยวบินของฉันล่าช้า"],
      ["How long does it take to get there?", "ไปที่นั่นใช้เวลานานเท่าไหร่"],
      ["We had a great trip.", "ทริปของเราสนุกมาก"]
    ]
  },
  {
    id: "s2l3", title: "ถามทาง", en: "Directions", head: "M",
    goal: "ถามทางและบอกทางให้คนอื่นได้",
    notes: [
      "ขึ้นต้นด้วย <b>Excuse me</b> เวลาขอความช่วยเหลือจากคนแปลกหน้า",
      "ถามทาง: How do I get to ...? / Where is ...?",
      "บอกทางใช้กริยารูปเดิมขึ้นต้นประโยค (คำสั่ง): <b>Go</b> straight. <b>Turn</b> left.",
      "บอกระยะ: It's about five minutes on foot."
    ],
    words: [["turn left","เลี้ยวซ้าย"],["turn right","เลี้ยวขวา"],["go straight","ตรงไป"],["corner","หัวมุม"],["traffic lights","ไฟจราจร"],["crossroads","สี่แยก"],["far","ไกล"],["map","แผนที่"],["lost","หลงทาง"],["excuse me","ขอโทษนะคะ/ครับ (เรียก)"]],
    sents: [
      ["Excuse me, how do I get to the station?", "ขอโทษครับ ไปสถานียังไง"],
      ["Go straight and turn left at the traffic lights.", "ตรงไปแล้วเลี้ยวซ้ายที่ไฟแดง"],
      ["It's on the corner.", "มันอยู่ตรงหัวมุม"],
      ["Is it far from here?", "ไกลจากที่นี่ไหม"],
      ["I think I'm lost.", "ฉันว่าฉันหลงทางแล้ว"]
    ]
  },
  {
    id: "s2l4", title: "กำลังทำอยู่", en: "Right now", head: "N",
    goal: "ใช้ present continuous พูดถึงสิ่งที่กำลังเกิดขึ้นได้",
    notes: [
      "<b>am / is / are + กริยา -ing</b> = กำลังทำอยู่ตอนนี้",
      "เทียบกัน: I <b>work</b> in a bank. (ประจำ) / I'm <b>working</b> from home today. (ตอนนี้)",
      "กริยาบางตัวไม่นิยมใช้ -ing: know, like, want, need, understand: I <b>want</b> coffee. (ไม่ใช่ I'm wanting)",
      "คำที่มักมาด้วย: now, right now, at the moment"
    ],
    words: [["right now","ตอนนี้เลย"],["at the moment","ขณะนี้"],["wait","รอ"],["cook","ทำอาหาร"],["study","เรียน / อ่านหนังสือ"],["talk","คุย"],["rain","ฝนตก"],["wear","สวมใส่"],["look for","หา"],["busy","ยุ่ง"]],
    sents: [
      ["I'm cooking dinner right now.", "ตอนนี้ฉันกำลังทำมื้อเย็น"],
      ["It's raining outside.", "ข้างนอกฝนกำลังตก"],
      ["What are you doing?", "คุณกำลังทำอะไรอยู่"],
      ["She's talking on the phone.", "เธอกำลังคุยโทรศัพท์"],
      ["I'm looking for my keys.", "ฉันกำลังหากุญแจ"]
    ]
  },
  {
    id: "s2l5", title: "เปรียบเทียบ", en: "Better, the best", head: "X",
    goal: "เปรียบเทียบสองสิ่งและบอกสิ่งที่ดีที่สุดได้",
    notes: [
      "คำสั้นเติม <b>-er / -est</b>: big → bigger → the biggest",
      "คำยาวใช้ <b>more / the most</b>: expensive → more expensive → the most expensive",
      "คำพิเศษ: good → <b>better</b> → <b>the best</b> / bad → <b>worse</b> → <b>the worst</b>",
      "เปรียบเทียบใช้ <b>than</b>: A is bigger <b>than</b> B. เท่ากันใช้ <b>as ... as</b>"
    ],
    words: [["bigger","ใหญ่กว่า"],["smaller","เล็กกว่า"],["cheaper","ถูกกว่า"],["more expensive","แพงกว่า"],["better","ดีกว่า"],["worse","แย่กว่า"],["the best","ดีที่สุด"],["than","กว่า"],["as fast as","เร็วเท่ากับ"],["the most","มากที่สุด"]],
    sents: [
      ["Bangkok is bigger than Chiang Mai.", "กรุงเทพใหญ่กว่าเชียงใหม่"],
      ["This phone is more expensive than that one.", "โทรศัพท์เครื่องนี้แพงกว่าเครื่องนั้น"],
      ["It's the best restaurant in town.", "มันเป็นร้านอาหารที่ดีที่สุดในเมือง"],
      ["My English is better now.", "ภาษาอังกฤษของฉันดีขึ้นแล้ว"],
      ["The train is as fast as the bus.", "รถไฟเร็วพอ ๆ กับรถบัส"]
    ]
  },
  {
    id: "s2l6", title: "ไปหาหมอ", en: "At the doctor", head: "+",
    goal: "บอกอาการป่วย ซื้อยา และทำนัดหมอได้",
    notes: [
      "บอกอาการ: I have <b>a</b> headache / <b>a</b> fever / <b>a</b> cough",
      "feel + คำคุณศัพท์: I <b>feel</b> sick. (ไม่ใช่ I sick)",
      "<b>should</b> + กริยารูปเดิม = ควร: You should rest.",
      "ความถี่ในการกินยา: once a day, twice a day, three times a day"
    ],
    words: [["headache","ปวดหัว"],["fever","ไข้"],["cough","ไอ"],["sore throat","เจ็บคอ"],["stomachache","ปวดท้อง"],["medicine","ยา"],["pharmacy","ร้านขายยา"],["appointment","นัดหมาย"],["rest","พักผ่อน"],["should","ควร"]],
    sents: [
      ["I have a headache and a fever.", "ฉันปวดหัวและมีไข้"],
      ["I don't feel well.", "ฉันรู้สึกไม่สบาย"],
      ["You should take this medicine twice a day.", "คุณควรกินยานี้วันละสองครั้ง"],
      ["I need to make an appointment.", "ฉันต้องขอนัดหมอ"],
      ["Is there a pharmacy near here?", "แถวนี้มีร้านขายยาไหม"]
    ]
  }
  ]
},
{
  id: "s3", cefr: "B1", name: "คุยได้ลื่นขึ้น", en: "Real conversations",
  cando: "วางแผน เล่าประสบการณ์ คุยเรื่องงาน แสดงความคิดเห็น และนัดหมายทางโทรศัพท์ได้",
  talk: [
    ["What are you going to do next year?", "Next year I'm going to ..."],
    ["Have you ever been abroad?", "Yes, I've been to ... / No, I've never ..."],
    ["What do you do for a living?", "I work as ... I'm responsible for ..."],
    ["Do you think social media is good for us?", "In my opinion, ... because ..."],
    ["What would you never give up?", "I would never give up ..."],
    ["Tell me about a goal you have.", "I'm planning to ... I hope ..."]
  ],
  lessons: [
  {
    id: "s3l1", title: "แผนในอนาคต", en: "Future plans", head: "W",
    goal: "เลือกใช้ going to / will / present continuous พูดถึงอนาคตได้ถูก",
    notes: [
      "<b>going to</b> = ตั้งใจไว้แล้ว: I'm going to learn Japanese.",
      "<b>will</b> = ตัดสินใจตอนพูด, คาดเดา, สัญญา: I'll call you tonight.",
      "<b>present continuous</b> = นัดไว้แน่นอนแล้ว: I'm meeting Tom at six.",
      "ไม่แน่ใจใช้ maybe / probably: I'll probably stay home."
    ],
    words: [["plan","แผน / วางแผน"],["going to","ตั้งใจจะ"],["will","จะ"],["probably","น่าจะ"],["maybe","บางที"],["next week","สัปดาห์หน้า"],["decide","ตัดสินใจ"],["hope","หวัง"],["someday","สักวันหนึ่ง"],["arrange","จัดการ / นัดหมาย"]],
    sents: [
      ["I'm going to visit my parents next week.", "สัปดาห์หน้าฉันจะไปเยี่ยมพ่อแม่"],
      ["I think it will rain later.", "ฉันคิดว่าเดี๋ยวฝนจะตก"],
      ["I'm meeting Tom at six.", "ฉันนัดเจอทอมตอนหกโมง"],
      ["I'll call you tonight.", "คืนนี้ฉันจะโทรหานะ"],
      ["Maybe I'll stay home this weekend.", "บางทีสุดสัปดาห์นี้ฉันอาจอยู่บ้าน"]
    ]
  },
  {
    id: "s3l2", title: "ประสบการณ์", en: "Have you ever", head: "E",
    goal: "ใช้ present perfect เล่าประสบการณ์และสิ่งที่ทำมาจนถึงตอนนี้ได้",
    notes: [
      "<b>have / has + กริยาช่องที่ 3</b>: I have seen, she has tried",
      "ใช้เล่าประสบการณ์โดยไม่บอกเวลาเจาะจง: Have you <b>ever</b> been to Japan?",
      "<b>for</b> + ช่วงเวลา (for five years) / <b>since</b> + จุดเริ่ม (since 2020)",
      "ถ้าบอกเวลาเจาะจงในอดีต กลับไปใช้ past simple: I went there <b>last year</b>."
    ],
    words: [["ever","เคย (ในคำถาม)"],["never","ไม่เคย"],["already","แล้ว (เรียบร้อย)"],["yet","ยัง / แล้วหรือยัง"],["just","เพิ่งจะ"],["been","เคยไป / เคยเป็น"],["tried","ลองแล้ว"],["since","ตั้งแต่"],["for","เป็นเวลา"],["experience","ประสบการณ์"]],
    sents: [
      ["Have you ever been to Japan?", "คุณเคยไปญี่ปุ่นไหม"],
      ["I've never tried durian ice cream.", "ฉันไม่เคยลองไอศกรีมทุเรียน"],
      ["I've already finished my report.", "ฉันทำรายงานเสร็จแล้ว"],
      ["She has lived here for five years.", "เธออาศัยอยู่ที่นี่มาห้าปีแล้ว"],
      ["I haven't seen that movie yet.", "ฉันยังไม่ได้ดูหนังเรื่องนั้นเลย"]
    ]
  },
  {
    id: "s3l3", title: "งานและอาชีพ", en: "Work", head: "J",
    goal: "บอกอาชีพ หน้าที่ และคุยเรื่องการทำงานได้",
    notes: [
      "ถามอาชีพแบบธรรมชาติ: What do you do? / What do you do for a living?",
      "work <b>as</b> + อาชีพ / work <b>for</b> + บริษัท / work <b>in</b> + สายงานหรือสถานที่",
      "บอกหน้าที่: I'm <b>responsible for</b> ... / I'm <b>in charge of</b> ...",
      "apply <b>for</b> a job = สมัครงาน"
    ],
    words: [["job","งาน"],["colleague","เพื่อนร่วมงาน"],["boss","หัวหน้า"],["salary","เงินเดือน"],["deadline","กำหนดส่ง"],["meeting","การประชุม"],["apply for","สมัคร"],["interview","สัมภาษณ์"],["responsible for","รับผิดชอบ"],["skill","ทักษะ"]],
    sents: [
      ["What do you do for a living?", "คุณทำงานอะไร"],
      ["I work as a nurse in a big hospital.", "ฉันทำงานเป็นพยาบาลที่โรงพยาบาลใหญ่แห่งหนึ่ง"],
      ["I'm responsible for customer service.", "ฉันรับผิดชอบงานบริการลูกค้า"],
      ["We have a meeting every Monday.", "เรามีประชุมทุกวันจันทร์"],
      ["I applied for a new job last month.", "เดือนที่แล้วฉันสมัครงานใหม่"]
    ]
  },
  {
    id: "s3l4", title: "แสดงความคิดเห็น", en: "Opinions", head: "O",
    goal: "แสดงความคิดเห็น เห็นด้วย และไม่เห็นด้วยอย่างสุภาพได้",
    notes: [
      "เปิดความเห็น: I think ... / In my opinion, ... / Personally, ...",
      "ไม่เห็นด้วยอย่างสุภาพ: I see your point, but ... / I'm not sure about that.",
      "ภาษาอังกฤษนิยม <b>I don't think</b> it's good. มากกว่า I think it's not good.",
      "<b>because</b> บอกเหตุ <b>so</b> บอกผล: I was tired, so I went home."
    ],
    words: [["in my opinion","ในความคิดของฉัน"],["agree","เห็นด้วย"],["disagree","ไม่เห็นด้วย"],["I'm not sure","ฉันไม่แน่ใจ"],["actually","ที่จริงแล้ว"],["because","เพราะว่า"],["so","ดังนั้น"],["however","อย่างไรก็ตาม"],["personally","โดยส่วนตัว"],["point","ประเด็น"]],
    sents: [
      ["In my opinion, online classes are useful.", "ในความคิดของฉัน เรียนออนไลน์มีประโยชน์"],
      ["I agree with you, but it's expensive.", "ฉันเห็นด้วย แต่มันแพง"],
      ["I'm not sure about that.", "เรื่องนั้นฉันไม่แน่ใจ"],
      ["Personally, I prefer living in the city.", "โดยส่วนตัวฉันชอบอยู่ในเมืองมากกว่า"],
      ["That's a good point.", "เป็นประเด็นที่ดี"]
    ]
  },
  {
    id: "s3l5", title: "โทรศัพท์และนัดหมาย", en: "On the phone", head: "K",
    goal: "โทรติดต่อ ฝากข้อความ และเลื่อนนัดได้",
    notes: [
      "แนะนำตัวทางโทรศัพท์: <b>This is</b> Nok (speaking). ไม่ใช้ I am Nok",
      "ขอสายอย่างสุภาพ: <b>Could I</b> speak to ..., please?",
      "ให้รอสาย: Hold on a moment, please.",
      "ถามว่าสะดวกไหม: Are you available on ...? / Does Thursday suit you?"
    ],
    words: [["call back","โทรกลับ"],["hold on","รอสักครู่"],["available","ว่าง / สะดวก"],["leave a message","ฝากข้อความ"],["reschedule","เลื่อนนัด"],["confirm","ยืนยัน"],["cancel","ยกเลิก"],["speak to","ขอสาย / คุยกับ"],["suit","สะดวก (เวลา)"],["free","ว่าง"]],
    sents: [
      ["Could I speak to Ms. Lee, please?", "ขอสายคุณลีหน่อยได้ไหมคะ"],
      ["Hold on a moment, please.", "กรุณารอสักครู่"],
      ["Can I leave a message?", "ขอฝากข้อความได้ไหม"],
      ["Are you available on Thursday?", "วันพฤหัสคุณสะดวกไหม"],
      ["Can we reschedule our meeting?", "เราเลื่อนประชุมได้ไหม"]
    ]
  },
  {
    id: "s3l6", title: "Phrasal verbs ใช้บ่อย", en: "Phrasal verbs", head: "U",
    goal: "ใช้กริยาวลีที่เจ้าของภาษาพูดทุกวันได้อย่างเป็นธรรมชาติ",
    notes: [
      "phrasal verb คือกริยา + คำเล็ก ๆ (up, off, out) ที่ทำให้ความหมายเปลี่ยน: give = ให้ แต่ <b>give up</b> = ยอมแพ้",
      "บางตัวแยกได้: turn the light off = turn off the light",
      "ถ้ากรรมเป็นสรรพนาม ต้องแทรกกลาง: turn <b>it</b> off (ไม่ใช่ turn off it)",
      "เรียนเป็นก้อนพร้อมตัวอย่าง จำง่ายกว่าแยกคำ"
    ],
    words: [["find out","ค้นพบ / หาข้อมูล"],["give up","ยอมแพ้ / เลิก"],["look after","ดูแล"],["turn on","เปิด (เครื่อง)"],["turn off","ปิด (เครื่อง)"],["pick up","ไปรับ / หยิบขึ้น"],["run out of","หมด (ของ)"],["put off","เลื่อนออกไป"],["come back","กลับมา"],["get along with","เข้ากันได้ดีกับ"]],
    sents: [
      ["I need to find out the answer.", "ฉันต้องหาคำตอบให้ได้"],
      ["Don't give up!", "อย่ายอมแพ้"],
      ["Can you look after my cat?", "ช่วยดูแลแมวให้หน่อยได้ไหม"],
      ["We ran out of milk.", "นมหมดแล้ว"],
      ["Can you pick me up at eight?", "มารับฉันตอนแปดโมงได้ไหม"]
    ]
  }
  ]
},
{
  id: "s4", cefr: "B2", name: "ถกเถียงและเล่าละเอียด", en: "Discussing ideas",
  cando: "พูดสมมติ เล่าข่าว รายงานคำพูดคนอื่น ร่วมประชุม และเชื่อมความคิดซับซ้อนได้",
  talk: [
    ["What would you do if you won a lot of money?", "If I won ..., I would ..."],
    ["What is a big problem in your city?", "One serious issue is ... As a result, ..."],
    ["What did your teacher tell you last time?", "She told me to ... She said that ..."],
    ["Is it better to work from home or in an office?", "Although ..., I think ..."],
    ["Describe something that was invented recently.", "It was invented by ... It is used to ..."],
    ["How would you run a good meeting?", "First, I'd ... Then, ..."]
  ],
  lessons: [
  {
    id: "s4l1", title: "ถ้าหาก…", en: "If", head: "?",
    goal: "ใช้ประโยคเงื่อนไขแบบเป็นไปได้และแบบสมมติได้",
    notes: [
      "เป็นไปได้จริง: <b>If + present, will + กริยา</b>: If it rains, we'll stay inside.",
      "สมมติ ไม่ค่อยจริง: <b>If + past, would + กริยา</b>: If I had more time, I would travel.",
      "ให้คำแนะนำ: <b>If I were you</b>, I would ... (ใช้ were กับทุกประธาน)",
      "<b>unless</b> = if not / <b>in case</b> = เผื่อว่า"
    ],
    words: [["if","ถ้า"],["unless","เว้นแต่ / ถ้าไม่"],["would","จะ (สมมติ)"],["could","สามารถ (สมมติ)"],["as long as","ตราบใดที่"],["in case","เผื่อว่า"],["otherwise","มิฉะนั้น"],["imagine","จินตนาการ"],["suppose","สมมติว่า"],["chance","โอกาส"]],
    sents: [
      ["If it rains, we'll stay inside.", "ถ้าฝนตก เราจะอยู่ในบ้าน"],
      ["If I had more time, I would learn Japanese.", "ถ้าฉันมีเวลามากกว่านี้ ฉันจะเรียนภาษาญี่ปุ่น"],
      ["Unless you hurry, you'll miss the bus.", "ถ้าไม่รีบ คุณจะตกรถ"],
      ["What would you do if you won the lottery?", "ถ้าถูกลอตเตอรี่ คุณจะทำอะไร"],
      ["Take an umbrella in case it rains.", "พกร่มไปเผื่อฝนตก"]
    ]
  },
  {
    id: "s4l2", title: "ประโยคกรรม", en: "Passive voice", head: "Q",
    goal: "ใช้ passive voice เมื่อสิ่งที่ถูกกระทำสำคัญกว่าผู้ทำ",
    notes: [
      "รูป: <b>be + กริยาช่องที่ 3</b>: is made, was built, has been stolen",
      "ใช้เมื่อไม่รู้ ไม่สำคัญ หรือไม่อยากบอกว่าใครทำ",
      "ภาษาไทยมักใช้ \"ถูก\" กับเรื่องร้าย แต่ passive ในภาษาอังกฤษใช้ได้กับทุกเรื่อง: English is spoken here.",
      "ถ้าจะบอกผู้ทำ ใช้ <b>by</b>: The book was written by ..."
    ],
    words: [["is made","ทำ (จาก) / ผลิตขึ้น"],["was built","สร้างขึ้น"],["is spoken","ใช้พูด / มีคนพูด"],["was invented","ประดิษฐ์ขึ้น / คิดค้นขึ้น"],["is called","เรียกว่า / มีชื่อว่า"],["was founded","ก่อตั้งขึ้น"],["are sold","วางขาย / มีขาย"],["has been stolen","ถูกขโมยไปแล้ว"],["by hand","ด้วยมือ"],["produce","ผลิต"]],
    sents: [
      ["English is spoken all over the world.", "คนทั่วโลกพูดภาษาอังกฤษ"],
      ["This temple was built over two hundred years ago.", "วัดนี้สร้างขึ้นเมื่อกว่าสองร้อยปีก่อน"],
      ["My bike has been stolen.", "จักรยานของฉันถูกขโมยไปแล้ว"],
      ["These bags are made by hand.", "กระเป๋าเหล่านี้ทำด้วยมือ"],
      ["The company was founded by two friends.", "บริษัทนี้ก่อตั้งโดยเพื่อนสองคน"]
    ]
  },
  {
    id: "s4l3", title: "รายงานคำพูด", en: "Reported speech", head: "\"",
    goal: "เล่าต่อว่าคนอื่นพูดหรือถามอะไรได้",
    notes: [
      "<b>say</b> something / <b>tell</b> someone something: He told <b>me</b> ... (tell ต้องมีคนตามหลัง)",
      "เลื่อน tense ถอยหลัง: is → was, will → would, can → could",
      "คำสั่ง: He told me <b>to wait</b>.",
      "คำถาม yes/no: She asked <b>if</b> (หรือ whether) I was ready."
    ],
    words: [["said","พูดว่า"],["told","บอก (คน)"],["asked","ถาม"],["explained","อธิบาย"],["mentioned","พูดถึง"],["promised","สัญญา"],["suggested","แนะนำ / เสนอ"],["warned","เตือน"],["admitted","ยอมรับ"],["whether","ว่า...หรือไม่"]],
    sents: [
      ["She said she was tired.", "เธอบอกว่าเธอเหนื่อย"],
      ["He told me to wait outside.", "เขาบอกให้ฉันรอข้างนอก"],
      ["They asked if I could help.", "พวกเขาถามว่าฉันช่วยได้ไหม"],
      ["My boss suggested taking a break.", "หัวหน้าแนะนำให้พักก่อน"],
      ["He promised he would call.", "เขาสัญญาว่าจะโทรมา"]
    ]
  },
  {
    id: "s4l4", title: "ประชุมงาน", en: "Meetings", head: "G",
    goal: "เปิดประชุม เสนอความเห็น ขอให้อธิบาย และสรุปประเด็นได้",
    notes: [
      "เปิดประชุม: Let's get started. / Shall we begin?",
      "ขัดจังหวะอย่างสุภาพ: Sorry to interrupt, but ...",
      "ขอให้อธิบาย: Could you clarify what you mean by ...?",
      "สรุป: So, to sum up, ... / Let's go over the action points."
    ],
    words: [["agenda","วาระการประชุม"],["proposal","ข้อเสนอ"],["budget","งบประมาณ"],["clarify","อธิบายให้ชัด"],["summarize","สรุป"],["follow up","ติดตามผล"],["interrupt","ขัดจังหวะ"],["move on","ไปต่อ (หัวข้อถัดไป)"],["approach","วิธีการ"],["action points","สิ่งที่ต้องทำต่อ"]],
    sents: [
      ["Let's get started.", "เริ่มกันเลยนะครับ"],
      ["Could you clarify what you mean?", "ช่วยอธิบายให้ชัดขึ้นได้ไหมว่าหมายถึงอะไร"],
      ["I'd like to suggest a different approach.", "ฉันขอเสนอวิธีอื่น"],
      ["Let's move on to the next point.", "ไปประเด็นถัดไปกันเลย"],
      ["I'll follow up by email.", "เดี๋ยวฉันจะส่งอีเมลติดตามนะ"]
    ]
  },
  {
    id: "s4l5", title: "เชื่อมความคิด", en: "Linking ideas", head: "&",
    goal: "ใช้คำเชื่อมแสดงความขัดแย้ง ผลลัพธ์ และการเพิ่มเติมได้",
    notes: [
      "<b>although / even though</b> + ประโยค: Although it was late, we kept working.",
      "<b>despite / in spite of</b> + คำนามหรือ -ing: Despite the rain, ...",
      "<b>however / therefore / moreover</b> ขึ้นต้นประโยคใหม่แล้วตามด้วยจุลภาค",
      "<b>whereas / while</b> ใช้เทียบสองอย่างที่ต่างกัน"
    ],
    words: [["although","แม้ว่า"],["despite","ทั้ง ๆ ที่ (+ คำนาม)"],["however","อย่างไรก็ตาม"],["therefore","ดังนั้น"],["moreover","ยิ่งไปกว่านั้น"],["whereas","ในขณะที่ (เทียบ)"],["on the other hand","ในทางกลับกัน"],["as a result","ผลที่ตามมาคือ"],["even though","ถึงแม้ว่า"],["instead","แทน (instead of = แทนที่จะ)"]],
    sents: [
      ["Although it was late, we kept working.", "แม้จะดึกแล้ว เราก็ยังทำงานต่อ"],
      ["Despite the rain, the concert continued.", "ทั้งที่ฝนตก คอนเสิร์ตก็ยังดำเนินต่อ"],
      ["It's cheap. However, the quality is poor.", "มันถูก อย่างไรก็ตาม คุณภาพไม่ดี"],
      ["I missed the train. As a result, I was late.", "ฉันตกรถไฟ ผลคือฉันมาสาย"],
      ["On the other hand, it saves a lot of time.", "ในทางกลับกัน มันประหยัดเวลาได้มาก"]
    ]
  },
  {
    id: "s4l6", title: "ข่าวและสังคม", en: "News and issues", head: "Z",
    goal: "เล่าข่าว พูดถึงปัญหาสังคม และอ้างอิงแหล่งข้อมูลได้",
    notes: [
      "อ้างแหล่งข้อมูล: <b>According to</b> the report, ...",
      "<b>affect</b> (กริยา) = ส่งผลต่อ / <b>effect</b> (คำนาม) = ผลกระทบ",
      "<b>rise</b> = เพิ่มขึ้นเอง (ไม่มีกรรม) / <b>raise</b> = ทำให้เพิ่ม (มีกรรม): Prices rose. / They raised prices.",
      "บอกแนวโน้ม: increase, decrease, go up, go down"
    ],
    words: [["according to","ตามที่ (แหล่งข่าว) ระบุ"],["increase","เพิ่มขึ้น"],["decrease","ลดลง"],["affect","ส่งผลต่อ"],["issue","ประเด็นปัญหา"],["government","รัฐบาล"],["economy","เศรษฐกิจ"],["environment","สิ่งแวดล้อม"],["survey","การสำรวจ"],["rise","สูงขึ้น"]],
    sents: [
      ["According to the report, prices will rise.", "ตามรายงาน ราคาจะสูงขึ้น"],
      ["The new law will affect many people.", "กฎหมายใหม่จะส่งผลต่อคนจำนวนมาก"],
      ["Air pollution is a serious issue in big cities.", "มลพิษทางอากาศเป็นปัญหาร้ายแรงในเมืองใหญ่"],
      ["The number of tourists increased last year.", "จำนวนนักท่องเที่ยวเพิ่มขึ้นเมื่อปีที่แล้ว"],
      ["The government has promised to take action.", "รัฐบาลสัญญาว่าจะดำเนินการ"]
    ]
  }
  ]
},
{
  id: "s5", cefr: "C1", name: "พูดอย่างมืออาชีพ", en: "Speaking with skill",
  cando: "นำเสนอ ต่อรอง พูดอ้อมอย่างสุภาพ ใช้สำนวน และเน้นสิ่งสำคัญได้อย่างมั่นใจ",
  talk: [
    ["Give a one minute presentation about your hometown.", "Today I'd like to give you an overview of ... To begin with, ..."],
    ["Politely refuse an invitation to a party.", "I'm afraid I can't make it, ..."],
    ["Negotiate a lower price for a car.", "Could you be a little more flexible on ...?"],
    ["What is something that costs an arm and a leg in your country?", "To be honest, ... costs an arm and a leg."],
    ["What do you really need in your life right now?", "What I really need is ..."],
    ["Tell me about a skill you finally got the hang of.", "It took a while, but ..."]
  ],
  lessons: [
  {
    id: "s5l1", title: "สำนวนที่ใช้จริง", en: "Idioms", head: "~",
    goal: "เข้าใจและใช้สำนวนที่เจ้าของภาษาพูดบ่อยได้ถูกจังหวะ",
    notes: [
      "สำนวนแปลตรงตัวไม่ได้ ต้องจำทั้งก้อนพร้อมสถานการณ์",
      "<b>under the weather</b> = ไม่ค่อยสบาย ไม่เกี่ยวกับสภาพอากาศ",
      "ใช้แต่พอดี ใส่สำนวนทุกประโยคจะฟังแปลก",
      "ถ้าได้ยินสำนวนที่ไม่รู้ ถามได้เลย: What does that mean?"
    ],
    words: [["a piece of cake","ง่ายมาก"],["break the ice","ทำลายความเงียบ / ละลายพฤติกรรม"],["on the same page","เข้าใจตรงกัน"],["under the weather","ไม่ค่อยสบาย"],["cost an arm and a leg","แพงหูฉี่"],["call it a day","พอแค่นี้ก่อน (เลิกงาน)"],["once in a blue moon","นาน ๆ ครั้ง"],["get the hang of","เริ่มจับทางได้"],["the ball is in your court","ถึงตาคุณตัดสินใจแล้ว"],["hit the nail on the head","พูดได้ตรงประเด็น"]],
    sents: [
      ["The exam was a piece of cake.", "ข้อสอบง่ายมาก"],
      ["Let's call it a day.", "วันนี้พอแค่นี้ก่อนเถอะ"],
      ["I'm feeling a bit under the weather.", "ฉันรู้สึกไม่ค่อยสบายนิดหน่อย"],
      ["It took a while, but I finally got the hang of it.", "ใช้เวลาสักพัก แต่ในที่สุดก็จับทางได้"],
      ["We need to make sure we're on the same page.", "เราต้องแน่ใจว่าเข้าใจตรงกัน"]
    ]
  },
  {
    id: "s5l2", title: "พูดอ้อมให้สุภาพ", en: "Softening", head: "V",
    goal: "ขอร้อง ปฏิเสธ และบอกข่าวไม่ดีอย่างสุภาพแบบมืออาชีพ",
    notes: [
      "<b>I was wondering if</b> you could ... สุภาพกว่า Can you ... มาก",
      "<b>Would you mind</b> + -ing? ถ้าจะตอบว่าได้ ให้ตอบ <b>Not at all</b> (แปลตรง ๆ ว่า ไม่รังเกียจเลย)",
      "<b>I'm afraid</b> ... = เสียใจที่ต้องบอกว่า... ไม่ได้แปลว่ากลัว",
      "ลดความแรงด้วย slightly, a bit, might, seem: This might be slightly over budget."
    ],
    words: [["I was wondering if","ไม่ทราบว่า... (ขออย่างสุภาพ)"],["would you mind","รบกวนช่วย...ได้ไหม"],["I'm afraid","เสียใจที่ต้องบอกว่า"],["it seems","ดูเหมือนว่า"],["tend to","มักจะ"],["perhaps","บางที"],["slightly","เล็กน้อย"],["might","อาจจะ"],["a bit","นิดหน่อย"],["misunderstanding","ความเข้าใจผิด"]],
    sents: [
      ["I was wondering if you could help me.", "ไม่ทราบว่าคุณพอจะช่วยฉันได้ไหม"],
      ["Would you mind closing the window?", "รบกวนช่วยปิดหน้าต่างได้ไหม"],
      ["It seems there's been a misunderstanding.", "ดูเหมือนจะเกิดความเข้าใจผิดกันขึ้นแล้วนะ"],
      ["I'm afraid I can't make it.", "ขอโทษนะ ฉันคงไปไม่ได้"],
      ["This might be slightly over budget.", "อันนี้อาจเกินงบไปเล็กน้อย"]
    ]
  },
  {
    id: "s5l3", title: "นำเสนองาน", en: "Presentations", head: "@",
    goal: "เปิด เชื่อม และปิดการนำเสนอด้วยวลีนำทางที่ชัดเจน",
    notes: [
      "ใช้ <b>signposting</b> บอกคนฟังว่ากำลังอยู่ตรงไหน: To begin with ... / Moving on ... / In conclusion ...",
      "พูดช้ากว่าปกติ และหยุดหลังประโยคสำคัญ",
      "ชี้ภาพหรือกราฟ: As you can see from this chart, ...",
      "ปิดด้วยสิ่งที่อยากให้จำ: The key takeaway is ..."
    ],
    words: [["overview","ภาพรวม"],["outline","โครงร่าง"],["to begin with","อย่างแรก"],["moving on","ต่อไป"],["as you can see","อย่างที่เห็น"],["highlight","เน้น / จุดเด่น"],["illustrate","แสดงให้เห็น"],["key","สำคัญ"],["takeaway","ข้อคิดสำคัญ"],["in conclusion","โดยสรุป"]],
    sents: [
      ["Today I'd like to give you an overview of our project.", "วันนี้ฉันอยากเล่าภาพรวมของโปรเจกต์เรา"],
      ["To begin with, let's look at the problem.", "อย่างแรก มาดูที่ปัญหากันก่อน"],
      ["As you can see from this chart, sales have doubled.", "อย่างที่เห็นจากกราฟนี้ ยอดขายเพิ่มขึ้นเป็นสองเท่า"],
      ["Moving on to the next point.", "ต่อไป มาดูประเด็นถัดไปกัน"],
      ["In conclusion, we need to act now.", "โดยสรุป เราต้องลงมือตอนนี้"]
    ]
  },
  {
    id: "s5l4", title: "ต่อรอง", en: "Negotiating", head: "%",
    goal: "เสนอ ต่อรอง หาจุดกึ่งกลาง และปฏิเสธอย่างมีชั้นเชิงได้",
    notes: [
      "เสนอแบบมีเงื่อนไข: <b>If you</b> order more, <b>we could</b> lower the price.",
      "ปฏิเสธอย่างนุ่มนวล: That might be difficult for us.",
      "หาจุดกึ่งกลาง: Let's meet halfway. / Can we find a compromise?",
      "จุดที่ยอมไม่ได้: That's our bottom line. / That's non-negotiable."
    ],
    words: [["negotiate","ต่อรอง"],["offer","ข้อเสนอ / เสนอ"],["compromise","การประนีประนอม"],["deal","ข้อตกลง"],["terms","เงื่อนไข"],["flexible","ยืดหยุ่น"],["meet halfway","เจอกันครึ่งทาง"],["bottom line","ขีดสุดที่รับได้"],["non-negotiable","ต่อรองไม่ได้"],["counteroffer","ข้อเสนอโต้กลับ"]],
    sents: [
      ["We're prepared to offer a ten percent discount.", "เราพร้อมให้ส่วนลดสิบเปอร์เซ็นต์"],
      ["Could you be a little more flexible on the price?", "ยืดหยุ่นเรื่องราคาอีกนิดได้ไหม"],
      ["Let's meet halfway.", "เจอกันครึ่งทางเถอะ"],
      ["That's our bottom line.", "นั่นคือขีดสุดที่เรารับได้"],
      ["I think we have a deal.", "ฉันว่าเราตกลงกันได้แล้ว"]
    ]
  },
  {
    id: "s5l5", title: "คำเชื่อมในบทสนทนา", en: "Discourse markers", head: "…",
    goal: "ใช้คำเชื่อมบทสนทนาให้พูดต่อเนื่อง เปลี่ยนเรื่อง และแก้คำพูดได้อย่างลื่นไหล",
    notes: [
      "คำพวกนี้ทำให้พูดฟังเป็นธรรมชาติและได้เวลาคิด",
      "<b>By the way</b> = เปลี่ยนเรื่องชั่วคราว / <b>Anyway</b> = กลับเข้าเรื่อง",
      "<b>I mean</b> ใช้ขยายหรือแก้สิ่งที่เพิ่งพูด",
      "<b>That said</b> / <b>Having said that</b> = ถึงอย่างนั้นก็ตาม"
    ],
    words: [["by the way","อ้อ จะว่าไป"],["anyway","เอาเถอะ / กลับมาที่เรื่องเดิม"],["to be honest","พูดตามตรง"],["I mean","หมายถึงว่า"],["you know","รู้ไหม / แบบว่า"],["that said","ถึงอย่างนั้น"],["in other words","พูดอีกอย่างคือ"],["speaking of which","พูดถึงเรื่องนี้แล้ว"],["as I was saying","อย่างที่พูดค้างไว้"],["having said that","แม้จะพูดอย่างนั้น"]],
    sents: [
      ["By the way, did you hear the news?", "จะว่าไป ได้ยินข่าวหรือยัง"],
      ["To be honest, I didn't enjoy it.", "พูดตามตรง ฉันไม่ค่อยชอบ"],
      ["Anyway, as I was saying, we need a plan.", "เอาเถอะ อย่างที่พูดค้างไว้ เราต้องมีแผน"],
      ["It's expensive. That said, it's worth it.", "มันแพง ถึงอย่างนั้นก็คุ้ม"],
      ["In other words, we need more time.", "พูดอีกอย่างคือ เราต้องการเวลาเพิ่ม"]
    ]
  },
  {
    id: "s5l6", title: "เน้นย้ำให้ชัด", en: "Emphasis", head: "!",
    goal: "ใช้โครงสร้างเน้นย้ำ เช่น cleft sentence และ inversion ได้",
    notes: [
      "<b>What I need is</b> ... เน้นสิ่งที่ต้องการ: What I really need is a holiday.",
      "<b>It was ... who/that</b> ... เน้นตัวบุคคลหรือสิ่งของ: It was Nok who found it.",
      "inversion (ทางการ): <b>Not only is it</b> cheap, but it's also fast.",
      "<b>do / does / did</b> หน้ากริยาเพื่อเน้น: I <b>do</b> appreciate your help."
    ],
    words: [["what I need is","สิ่งที่ฉันต้องการคือ"],["it was ... who","คือ...นั่นแหละที่"],["not only ... but also","ไม่เพียงแต่...แต่ยัง"],["the thing is","ประเด็นคือ"],["I do appreciate","ฉันซาบซึ้งจริง ๆ"],["rarely","แทบไม่เคย"],["by no means","ไม่ใช่เลยแม้แต่น้อย"],["hardly ever","แทบจะไม่เคย"],["never have I","ไม่เคยเลยที่ฉัน... (เน้นมาก)"],["above all","เหนือสิ่งอื่นใด"]],
    sents: [
      ["What I really need is a holiday.", "สิ่งที่ฉันต้องการจริง ๆ คือวันหยุด"],
      ["It was Nok who found the solution.", "นกนั่นแหละที่หาทางแก้เจอ"],
      ["Not only is it cheap, but it's also fast.", "มันไม่เพียงแต่ถูก แต่ยังเร็วด้วย"],
      ["I do appreciate your help.", "ฉันซาบซึ้งที่คุณช่วยจริง ๆ"],
      ["The thing is, we don't have enough time.", "ประเด็นคือ เรามีเวลาไม่พอ"]
    ]
  }
  ]
},
{
  id: "s6", cefr: "C2", name: "คล่องเหมือนคิดเป็นภาษาอังกฤษ", en: "Fluent",
  cando: "ฟังคนพูดเร็วออก เลือกระดับภาษาได้ตามสถานการณ์ เล่าเรื่องสนุก โต้แย้งได้ลึก และพูดต่อได้แม้ลืมคำ",
  talk: [
    ["Tell me a funny story that happened to you.", "So there I was, ... All of a sudden, ..."],
    ["Argue for the opposite of what you believe.", "Granted, ..., but I'd argue that ..."],
    ["Describe an object without saying its name.", "It's a kind of thing you use to ..."],
    ["Write a formal email out loud, then say it casually.", "We regret to inform you ... / Hey, just so you know ..."],
    ["What's something you're gonna do this week?", "I'm gonna ..."],
    ["Explain a complicated idea in a nutshell.", "In a nutshell, ... Basically, ..."]
  ],
  lessons: [
  {
    id: "s6l1", title: "เสียงพูดเร็ว", en: "Fast speech", head: "g",
    goal: "ฟังรูปย่อที่เจ้าของภาษาพูดเร็วออก และเข้าใจเสียงเชื่อมระหว่างคำ",
    notes: [
      "เจ้าของภาษาพูดเร็วจนคำติดกัน: going to → <b>gonna</b>, want to → <b>wanna</b>",
      "ใช้ในภาษาพูดเท่านั้น ไม่เขียนในงานทางการ",
      "เสียงเชื่อม: an apple ฟังเหมือน \"อะ-แนปเปิล\" / did you ฟังเหมือน \"ดิดจู\"",
      "คำเล็กอย่าง to, for, and ออกเสียงเบามาก (tə, fə, ən) ฝึกฟังให้ชินสำคัญกว่าพูดให้เหมือน"
    ],
    words: [["gonna","going to (จะ)"],["wanna","want to (อยาก)"],["gotta","have got to (ต้อง)"],["kinda","kind of (ค่อนข้าง)"],["lemme","let me (ให้ฉัน)"],["dunno","don't know (ไม่รู้)"],["gimme","give me (ขอ / ให้ฉัน)"],["whaddya","what do you (คุณ...อะไร)"],["sorta","sort of (ประมาณว่า)"],["y'all","you all (พวกคุณทุกคน)"]],
    sents: [
      ["I'm gonna grab a coffee.", "ฉันจะไปเอากาแฟหน่อย"],
      ["Do you wanna come with us?", "อยากไปด้วยกันไหม (พูดแบบกันเอง)"],
      ["Sorry, I gotta go.", "ขอโทษนะ ต้องไปแล้ว"],
      ["Lemme think about it.", "ขอคิดดูก่อน"],
      ["I dunno, it's kinda weird.", "ไม่รู้สิ มันแปลก ๆ นะ"]
    ],
    pairs: [["walk","work"],["full","fool"],["bad","bed"]]
  },
  {
    id: "s6l2", title: "ระดับภาษา", en: "Formal and casual", head: "f",
    goal: "เลือกคำและประโยคให้เหมาะกับคนฟัง ทั้งทางการและกันเอง",
    notes: [
      "คำเดียวกันมีหลายระดับ: buy (ทั่วไป) / <b>purchase</b> (ทางการ)",
      "อีเมลทางการ: We regret to inform you ... / Please do not hesitate to contact us.",
      "กันเอง: Just so you know ... / Feel free to give me a shout.",
      "คนเก่งภาษาไม่ใช่คนที่พูดหรูที่สุด แต่เลือกระดับได้ถูกกับคนฟัง"
    ],
    words: [["purchase","ซื้อ (ทางการ)"],["obtain","ได้รับ (ทางการ)"],["inquire","สอบถาม (ทางการ)"],["assist","ช่วยเหลือ (ทางการ)"],["require","ต้องการ (ทางการ)"],["commence","เริ่มต้น (ทางการ)"],["sufficient","เพียงพอ (ทางการ)"],["regret to inform","เสียใจที่ต้องแจ้ง"],["give me a shout","ทักมาได้เลย (กันเอง)"],["the party's off","งานเลี้ยงยกเลิกแล้ว (กันเอง)"]],
    sents: [
      ["We regret to inform you that the event has been cancelled.", "เราเสียใจที่ต้องแจ้งว่างานถูกยกเลิก"],
      ["Hey, the party's off.", "เฮ้ งานเลี้ยงยกเลิกนะ"],
      ["Please do not hesitate to contact us.", "หากมีข้อสงสัยติดต่อเราได้เสมอ"],
      ["Feel free to give me a shout.", "ทักมาได้ตลอดเลยนะ"],
      ["I'd appreciate it if you could reply by Friday.", "จะขอบคุณมากหากตอบกลับภายในวันศุกร์"]
    ]
  },
  {
    id: "s6l3", title: "อารมณ์ขันและประชด", en: "Humor", head: "j",
    goal: "เข้าใจมุกตลก คำประชด และหยอกล้อกันแบบเจ้าของภาษา",
    notes: [
      "คำประชด (sarcasm) พูดตรงข้ามกับที่คิด น้ำเสียงคือตัวบอก: Oh great, another meeting.",
      "อังกฤษนิยมมุกหน้าตาย (dry humor) พูดเฉย ๆ แต่ตั้งใจให้ตลก",
      "ถ้าไม่แน่ใจว่าเขาล้อเล่นไหม ถามได้: Are you serious? / Are you pulling my leg?",
      "บอกว่าล้อเล่น: I'm just kidding. / I'm only joking."
    ],
    words: [["sarcasm","การประชด"],["kidding","ล้อเล่น"],["joke","มุกตลก"],["pun","มุกเล่นคำ"],["tease","แซว"],["banter","การหยอกล้อ"],["punchline","มุกปิดท้าย"],["dry humor","มุกหน้าตาย"],["pull someone's leg","หลอกเล่น"],["ironic","ย้อนแย้ง / ประชด"]],
    sents: [
      ["Oh great, another meeting. Just what I needed.", "เยี่ยมเลย ประชุมอีกแล้ว ที่อยากได้พอดี"],
      ["Relax, I'm just kidding!", "ใจเย็น ล้อเล่นน่า"],
      ["Are you pulling my leg?", "นี่หลอกฉันเล่นหรือเปล่า"],
      ["He has a very dry sense of humor.", "เขาเป็นคนมีมุกหน้าตายมาก"],
      ["Lovely weather we're having.", "อากาศดีจังเลยนะ (พูดตอนฝนตกหนัก)"]
    ]
  },
  {
    id: "s6l4", title: "เล่าเรื่องให้น่าฟัง", en: "Storytelling", head: "s",
    goal: "เล่าเรื่องให้มีจังหวะ ลุ้น และหักมุม แบบที่คนฟังอยากฟังต่อ",
    notes: [
      "ปูฉากด้วย past continuous แล้วตามด้วยเหตุการณ์ด้วย past simple: I was walking home when it started to rain.",
      "คนพูดเล่าเรื่องตลกมักใช้ present tense ให้รู้สึกเหมือนเกิดตอนนี้: So I walk in, and guess who's there?",
      "วลีลุ้น: All of a sudden ... / Out of nowhere ...",
      "หักมุมและสรุป: It turns out ... / To cut a long story short ..."
    ],
    words: [["so there I was","ตอนนั้นฉันก็..."],["all of a sudden","ทันใดนั้น"],["it turns out","กลายเป็นว่า"],["to cut a long story short","สรุปสั้น ๆ คือ"],["guess what","ทายซิว่าอะไร"],["believe it or not","เชื่อไหมว่า"],["the funny thing is","ที่ตลกคือ"],["out of nowhere","อยู่ ๆ ก็"],["in the end","สุดท้ายแล้ว"],["I couldn't believe it","ฉันไม่อยากจะเชื่อเลย"]],
    sents: [
      ["So there I was, standing in the rain with no umbrella.", "ตอนนั้นฉันก็ยืนตากฝนโดยไม่มีร่ม"],
      ["All of a sudden, the lights went out.", "ทันใดนั้นไฟก็ดับ"],
      ["It turns out he was right all along.", "กลายเป็นว่าเขาพูดถูกมาตลอด"],
      ["To cut a long story short, we missed the flight.", "สรุปสั้น ๆ คือเราตกเครื่อง"],
      ["Believe it or not, I actually enjoyed it.", "เชื่อไหมว่าฉันชอบมันจริง ๆ"]
    ]
  },
  {
    id: "s6l5", title: "โต้แย้งเชิงลึก", en: "Debating", head: "d",
    goal: "ยอมรับข้อดีของอีกฝ่าย แล้วโต้แย้งด้วยเหตุผลอย่างมีน้ำหนักได้",
    notes: [
      "ยอมรับก่อนแย้ง: <b>Granted</b>, ..., but ... / I'll <b>concede</b> that ..., however ...",
      "ขอหลักฐาน: What evidence do you have for that?",
      "ชี้ข้อสันนิษฐาน: That assumes that ...",
      "เปลี่ยนมุมมอง: It depends on how you look at it. / The real issue here is ..."
    ],
    words: [["argue","โต้แย้ง / ให้เหตุผลว่า"],["evidence","หลักฐาน"],["assumption","ข้อสันนิษฐาน"],["valid","มีเหตุผล / ใช้ได้"],["nuance","ความละเอียดอ่อน"],["perspective","มุมมอง"],["implication","ผลที่ตามมา / นัยยะ"],["concede","ยอมรับ (ว่าอีกฝ่ายถูกบางส่วน)"],["fundamentally","โดยพื้นฐาน"],["granted","จริงอยู่ที่"]],
    sents: [
      ["That's a valid point, but I'd argue the opposite.", "เป็นประเด็นที่มีเหตุผล แต่ฉันขอแย้งในทางตรงข้าม"],
      ["What evidence do you have for that?", "คุณมีหลักฐานอะไรสนับสนุน"],
      ["I'll concede that it's not perfect.", "ฉันยอมรับว่ามันไม่สมบูรณ์แบบ"],
      ["It depends on how you look at it.", "ขึ้นอยู่กับว่าคุณมองมันอย่างไร"],
      ["The real issue here is trust.", "ปัญหาที่แท้จริงตรงนี้คือความไว้ใจ"]
    ]
  },
  {
    id: "s6l6", title: "คิดเป็นภาษาอังกฤษ", en: "Thinking in English", head: "e",
    goal: "พูดต่อได้แม้ลืมคำ ด้วยการอธิบายแทนและวลีถ่วงเวลาแบบธรรมชาติ",
    notes: [
      "ลืมคำอย่าหยุดเงียบ ให้ <b>อธิบายแทน</b>: It's a kind of tool you use to open bottles.",
      "วลีถ่วงเวลา: How can I put this? / What's the word? ช่วยให้ได้เวลาคิดโดยไม่ดูติดขัด",
      "หยุดแปลในหัวทีละคำ ให้จำเป็นก้อน (chunk) แล้วพูดทั้งก้อน",
      "ฝึกพูดกับตัวเองทุกวัน: เล่าสิ่งที่ทำอยู่เป็นภาษาอังกฤษในใจ"
    ],
    words: [["on the tip of my tongue","นึกออกแต่พูดไม่ออก"],["how can I put this","จะพูดยังไงดี"],["what's the word","คำว่าอะไรนะ"],["a kind of","ประเภทหนึ่งของ"],["sort of","ประมาณว่า"],["off the top of my head","เท่าที่นึกออกตอนนี้"],["in a nutshell","โดยสรุป"],["basically","โดยพื้นฐาน / พูดง่าย ๆ"],["let me put it another way","ขอพูดอีกแบบนะ"],["what I'm trying to say is","สิ่งที่ฉันพยายามจะบอกคือ"]],
    sents: [
      ["It's on the tip of my tongue.", "นึกออกแล้วแต่พูดไม่ออก"],
      ["How can I put this?", "จะพูดยังไงดีนะ"],
      ["It's a kind of tool you use to open bottles.", "มันเป็นเครื่องมือแบบที่ใช้เปิดขวด"],
      ["What I'm trying to say is, I need more time.", "สิ่งที่ฉันพยายามจะบอกคือ ฉันต้องการเวลาเพิ่ม"],
      ["In a nutshell, it was a success.", "โดยสรุปคือ มันสำเร็จ"]
    ]
  }
  ]
}
];

/* ตัวอย่างคำสำหรับกระดานตัวอักษร A ถึง Z */
window.ALPHABET = [
  ["A","apple"],["B","book"],["C","cat"],["D","dog"],["E","egg"],["F","fish"],["G","go"],["H","hat"],["I","ice"],["J","job"],["K","key"],["L","lamp"],["M","milk"],
  ["N","nose"],["O","orange"],["P","pen"],["Q","queen"],["R","rice"],["S","sun"],["T","tea"],["U","umbrella"],["V","van"],["W","water"],["X","box"],["Y","yes"],["Z","zoo"]
];
