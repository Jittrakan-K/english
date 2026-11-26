/* Fluent: เนื้อหาเพิ่มเติม (โหลดหลัง data.js แล้วรวมเข้าหลักสูตรอัตโนมัติ)
   fix:     ข้อผิดที่คนไทยพบบ่อย [ประโยคผิด, ประโยคถูก, เหตุผล]
   lessons: บทใหม่ต่อท้ายแต่ละขั้น (รูปแบบเดียวกับ data.js และใส่ fix ในบทได้เลย)
   dialogs: บทสนทนาจำลองสำหรับห้องฝึกพูด speaker "you" คือบทของผู้เรียน */
window.MORE = {
fix: {
  s0l1: [
    ["Can you say again?", "Can you say it again?", "say ต้องมีกรรม ใส่ it ด้วย"],
    ["I not understand.", "I don't understand.", "ปฏิเสธกริยาทั่วไปต้องใช้ don't"],
    ["Please speak slow.", "Please speak slowly.", "ขยายกริยาใช้คำที่ลงท้าย -ly: slowly"]
  ],
  s0l2: [
    ["I'm fine, thank.", "I'm fine, thank you.", "ต้องพูด thank you หรือ thanks ไม่ใช้ thank เดี่ยว ๆ"],
    ["Good night! How are you?", "Good evening! How are you?", "Good night ใช้ตอนลาเท่านั้น ทักทายตอนค่ำใช้ Good evening", "ทักทายตอนเพิ่งเจอกันช่วงค่ำ ประโยคไหนถูก"],
    ["Nice to meet you again.", "Nice to see you again.", "เจอกันครั้งที่สองขึ้นไปใช้ see ไม่ใช้ meet", "เจอคนที่เคยรู้จักกันแล้ว ประโยคไหนเป็นธรรมชาติกว่า"]
  ],
  s0l3: [
    ["I am twenty year old.", "I am twenty years old.", "มากกว่าหนึ่งปีต้องเป็น years"],
    ["I have two cat.", "I have two cats.", "คำนามนับได้ที่มีมากกว่าหนึ่งต้องเติม s"],
    ["How many old are you?", "How old are you?", "ถามอายุใช้ How old ไม่มี many"]
  ],
  s0l4: [
    ["She beautiful.", "She is beautiful.", "ภาษาอังกฤษต้องมี be เสมอ แม้ภาษาไทยไม่มีคำว่า \"เป็น\""],
    ["They is teachers.", "They are teachers.", "they ใช้คู่กับ are"],
    ["I am student.", "I am a student.", "อาชีพหรือสถานะที่เป็นเอกพจน์ต้องมี a หรือ an"]
  ],
  s0l5: [
    ["This is a apple.", "This is an apple.", "apple ขึ้นต้นด้วยเสียงสระ จึงใช้ an"],
    ["I have a car red.", "I have a red car.", "สีวางไว้หน้าคำนาม ตรงข้ามกับภาษาไทย"],
    ["What color it is?", "What color is it?", "คำถามต้องสลับ is ไว้หน้า it"]
  ],
  s0l6: [
    ["She have a sister.", "She has a sister.", "she / he / it ใช้ has"],
    ["This is mother of me.", "This is my mother.", "แสดงความเป็นเจ้าของใช้ my วางหน้าคำนาม"],
    ["I have two younger brother.", "I have two younger brothers.", "มากกว่าหนึ่งคนต้องเติม s"]
  ],
  s1l1: [
    ["She go to work by bus.", "She goes to work by bus.", "ประธาน she ในปัจจุบันต้องเติม -es: goes"],
    ["He don't eat breakfast.", "He doesn't eat breakfast.", "he / she / it ใช้ doesn't"],
    ["I always am late.", "I am always late.", "always วางหลัง am / is / are"]
  ],
  s1l2: [
    ["See you in Monday.", "See you on Monday.", "วันในสัปดาห์ใช้ on"],
    ["The shop opens on nine o'clock.", "The shop opens at nine o'clock.", "เวลาที่เป็นจุดใช้ at"],
    ["I study in Monday morning.", "I study on Monday morning.", "วันบวกช่วงเวลา ยังใช้ on"]
  ],
  s1l3: [
    ["Check bill, please.", "Can I have the bill, please?", "\"เช็กบิล\" เป็นภาษาไทยแบบไทย ภาษาอังกฤษขอ the bill (อังกฤษ) หรือ the check (อเมริกัน) และพูดสั้น ๆ ว่า Check, please. ได้"],
    ["Not spicy too much, please.", "Not too spicy, please.", "too วางหน้าคำคุณศัพท์: too spicy"],
    ["Can I have some waters, please?", "Can I have some water, please?", "water นับไม่ได้ ไม่เติม s ถ้าจะนับให้พูดว่า a glass of water / a bottle of water"]
  ],
  s1l4: [
    ["How much this shirt?", "How much is this shirt?", "ต้องมี is ในคำถามราคา"],
    ["Can I try on it?", "Can I try it on?", "สรรพนาม it ต้องแทรกกลาง try ... on"],
    ["It's very expensive, so I can't buy.", "It's too expensive, so I can't buy it.", "too = มากเกินจนทำไม่ได้ และ buy ต้องมีกรรม"]
  ],
  s1l5: [
    ["My town have a big market.", "There is a big market in my town.", "my town เป็นเอกพจน์ ต้องใช้ has ไม่ใช่ have และถ้าพูดว่า \"มี\" สถานที่ ใช้ There is / There are จะเป็นธรรมชาติที่สุด"],
    ["There are a bank near here.", "There is a bank near here.", "a bank เป็นเอกพจน์ ใช้ There is"],
    ["The café is opposite of the park.", "The café is opposite the park.", "opposite ไม่ต้องตามด้วย of"]
  ],
  s1l6: [
    ["I like swim.", "I like swimming.", "like + กริยา -ing"],
    ["She can speaks English.", "She can speak English.", "หลัง can ใช้กริยารูปเดิม"],
    ["I can to play guitar.", "I can play the guitar.", "หลัง can ไม่มี to และเครื่องดนตรีใช้ the"]
  ],
  s2l1: [
    ["Did you went to the beach?", "Did you go to the beach?", "หลัง did กริยากลับเป็นรูปเดิม"],
    ["I go to Chiang Mai last year.", "I went to Chiang Mai last year.", "อดีตต้องเปลี่ยนกริยา go เป็น went"],
    ["She buyed a new phone.", "She bought a new phone.", "buy เป็นกริยาไม่ปกติ: bought"]
  ],
  s2l2: [
    ["I'd like to book a room two nights.", "I'd like to book a room for two nights.", "บอกระยะเวลาใช้ for"],
    ["It uses two hours to get there.", "It takes two hours to get there.", "ใช้เวลาเท่าไหร่ใช้ take"],
    ["We went there by foot.", "We went there on foot.", "เดินเท้าใช้ on foot"]
  ],
  s2l3: [
    ["Excuse me, where is station?", "Excuse me, where is the station?", "สถานที่ที่รู้กันว่าแห่งไหนใช้ the"],
    ["Turn left on the traffic lights.", "Turn left at the traffic lights.", "จุดบนเส้นทางใช้ at"],
    ["I lost.", "I'm lost.", "หลงทาง = be lost ส่วน I lost แปลว่า ฉันแพ้ หรือทำของหาย"]
  ],
  s2l4: [
    ["I cooking dinner now.", "I'm cooking dinner now.", "กำลังทำต้องมี am / is / are"],
    ["I'm wanting a coffee.", "I want a coffee.", "want ไม่ใช้รูป -ing"],
    ["Look! It rains.", "Look! It's raining.", "สิ่งที่กำลังเกิดตรงหน้าใช้ -ing"]
  ],
  s2l5: [
    ["Bangkok is more big than Chiang Mai.", "Bangkok is bigger than Chiang Mai.", "คำสั้นเติม -er ไม่ใช้ more"],
    ["It's the most good restaurant.", "It's the best restaurant.", "good เปลี่ยนเป็น the best"],
    ["My English is more better now.", "My English is better now.", "better เป็นขั้นกว่าอยู่แล้ว ไม่ต้องมี more"]
  ],
  s2l6: [
    ["I sick.", "I feel sick.", "ประโยคต้องมีกริยา ใช้ feel หรือ am"],
    ["I have headache.", "I have a headache.", "อาการป่วยแบบนี้ต้องมี a"],
    ["You should to rest.", "You should rest.", "หลัง should ไม่มี to"]
  ],
  s3l1: [
    ["I'm going to calling you.", "I'm going to call you.", "going to + กริยารูปเดิม"],
    ["I call you tonight, I promise.", "I'll call you tonight, I promise.", "คำสัญญาใช้ will"],
    ["Maybe I will to stay home.", "Maybe I'll stay home.", "หลัง will ไม่มี to"]
  ],
  s3l2: [
    ["Have you ever went to Japan?", "Have you ever been to Japan?", "present perfect ใช้กริยาช่อง 3 และเคยไปใช้ been"],
    ["I have seen that movie yesterday.", "I saw that movie yesterday.", "มีเวลาเจาะจงในอดีต (yesterday) ต้องใช้ past simple"],
    ["She has lived here since five years.", "She has lived here for five years.", "ช่วงเวลาใช้ for ส่วน since ใช้กับจุดเริ่มต้น"]
  ],
  s3l3: [
    ["I work at nurse.", "I work as a nurse.", "บอกอาชีพใช้ work as a"],
    ["What is your work?", "What do you do?", "ถามอาชีพแบบที่เจ้าของภาษาพูดจริงคือ What do you do?", "ถามอาชีพแบบที่เจ้าของภาษาพูดกันจริง ประโยคไหนเป็นธรรมชาติกว่า"],
    ["I'm responsible to customer service.", "I'm responsible for customer service.", "responsible for"]
  ],
  s3l4: [
    ["I think it's not a good idea.", "I don't think it's a good idea.", "ภาษาอังกฤษนิยมวางปฏิเสธที่ think", "ไม่เห็นด้วยแบบสุภาพและเป็นธรรมชาติ ประโยคไหนเหมาะกว่า"],
    ["I'm agree with you.", "I agree with you.", "agree เป็นกริยาอยู่แล้ว ไม่ต้องมี am"],
    ["In my opinion, I think it's useful.", "In my opinion, it's useful.", "In my opinion กับ I think ความหมายซ้ำกัน ใช้อย่างเดียวพอ"]
  ],
  s3l5: [
    ["Hello, I am Nok.", "Hello, this is Nok.", "แนะนำตัวทางโทรศัพท์ใช้ This is", "ตอนโทรศัพท์ บอกว่าตัวเองเป็นใคร ประโยคไหนถูก"],
    ["Are you available in Thursday?", "Are you available on Thursday?", "วันใช้ on"],
    ["Can I leave message?", "Can I leave a message?", "message นับได้ ต้องมี a"]
  ],
  s3l6: [
    ["Turn off it, please.", "Turn it off, please.", "สรรพนามต้องแทรกกลาง phrasal verb"],
    ["We ran out milk.", "We ran out of milk.", "run out of ต้องมี of"],
    ["Can you look after for my cat?", "Can you look after my cat?", "look after ไม่ต้องมี for"]
  ],
  s4l1: [
    ["If it will rain, we'll stay home.", "If it rains, we'll stay home.", "ประโยค if ไม่ใช้ will"],
    ["If I have more time, I would travel.", "If I had more time, I would travel.", "สมมติสิ่งที่ไม่จริงตอนนี้ใช้ if + past"],
    ["Take an umbrella in case it will rain.", "Take an umbrella in case it rains.", "in case ไม่ตามด้วย will"]
  ],
  s4l2: [
    ["This temple was build long ago.", "This temple was built long ago.", "passive ใช้กริยาช่อง 3: built"],
    ["English is speak all over the world.", "English is spoken all over the world.", "be + กริยาช่อง 3: spoken"],
    ["My bike stolen yesterday.", "My bike was stolen yesterday.", "passive ต้องมี be: was stolen"]
  ],
  s4l3: [
    ["He said me to wait.", "He told me to wait.", "คำสั่งที่มีคนตามหลังใช้ tell"],
    ["She asked me where was the station.", "She asked me where the station was.", "คำถามที่รายงานต่อไม่สลับที่ประธานกับกริยา"],
    ["My boss suggested me to rest.", "My boss suggested that I rest.", "suggest ไม่ตามด้วย คน + to"]
  ],
  s4l4: [
    ["Could you clarify what do you mean?", "Could you clarify what you mean?", "คำถามซ้อนไม่ต้องมี do"],
    ["Let's discuss about the budget.", "Let's discuss the budget.", "discuss ไม่ต้องมี about"],
    ["I want to suggest you a new plan.", "I'd like to suggest a new plan.", "suggest ไม่ตามด้วยคนโดยตรง"]
  ],
  s4l5: [
    ["Despite it was raining, we went out.", "Although it was raining, we went out.", "despite ตามด้วยคำนาม ถ้าเป็นประโยคใช้ although"],
    ["Although it was late, but we kept working.", "Although it was late, we kept working.", "although กับ but ไม่ใช้คู่กัน (ภาษาไทยใช้ \"แม้...แต่\" ได้)"],
    ["It's cheap, however the quality is poor.", "It's cheap. However, the quality is poor.", "however เริ่มประโยคใหม่แล้วตามด้วยจุลภาค"]
  ],
  s4l6: [
    ["The new law will effect many people.", "The new law will affect many people.", "กริยาคือ affect ส่วน effect เป็นคำนาม"],
    ["Prices raised again this year.", "Prices rose again this year.", "เพิ่มขึ้นเองใช้ rise (rose) ส่วน raise ต้องมีกรรม"],
    ["According to the report said, prices will rise.", "According to the report, prices will rise.", "According to ไม่ต้องมี said ตามหลัง"]
  ],
  s5l1: [
    ["The exam was piece of cake.", "The exam was a piece of cake.", "สำนวนนี้ต้องมี a"],
    ["I'm under the weathers today.", "I'm under the weather today.", "สำนวนตายตัว ห้ามเปลี่ยนคำ"],
    ["Let's call it the day.", "Let's call it a day.", "สำนวนใช้ a day"]
  ],
  s5l2: [
    ["Would you mind to close the window?", "Would you mind closing the window?", "mind + กริยา -ing"],
    ["I was wondering can you help me.", "I was wondering if you could help me.", "I was wondering if ... ต้องมี if และเรียงแบบประโยคบอกเล่า ใช้ could จะสุภาพที่สุด"],
    ["I'm afraid I can't to make it.", "I'm afraid I can't make it.", "หลัง can't ไม่มี to"]
  ],
  s5l3: [
    ["As you can see this chart, sales have doubled.", "As you can see from this chart, sales have doubled.", "เห็นจากกราฟใช้ from"],
    ["Now I will talk about next point.", "Moving on to the next point.", "วลีนำทางที่เป็นธรรมชาติกว่า"],
    ["In conclusion, so we need to act now.", "In conclusion, we need to act now.", "In conclusion กับ so ไม่ใช้ซ้อนกัน"]
  ],
  s5l4: [
    ["Can you discount for me?", "Could you give me a discount?", "discount ใช้เป็นคำนาม: give a discount"],
    ["Let's meet at half way.", "Let's meet halfway.", "สำนวนคือ meet halfway"],
    ["If you order more, we could giving a better price.", "If you order more, we could give a better price.", "หลัง could ใช้กริยารูปเดิม"]
  ],
  s5l5: [
    ["To be honestly, I didn't like it.", "To be honest, I didn't like it.", "วลีตายตัวคือ To be honest"],
    ["In other word, we need more time.", "In other words, we need more time.", "ต้องเป็น words"],
    ["That say, it's worth it.", "That said, it's worth it.", "วลีคือ That said"]
  ],
  s5l6: [
    ["What I need it is a holiday.", "What I need is a holiday.", "ไม่ต้องใส่ it ซ้ำ"],
    ["Not only it is cheap, but it's also fast.", "Not only is it cheap, but it's also fast.", "หลัง Not only ต้องสลับกริยาไว้หน้าประธาน"],
    ["It was Nok who find the solution.", "It was Nok who found the solution.", "เรื่องในอดีตใช้ found"]
  ],
  s6l1: [
    ["I gonna go.", "I'm gonna go.", "gonna แทน going to เท่านั้น ยังต้องมี am"],
    ["Dear Sir, I wanna apply for the job.", "Dear Sir, I would like to apply for the job.", "ภาษาเขียนทางการห้ามใช้ wanna", "เขียนจดหมายสมัครงาน ประโยคไหนเหมาะกว่า"],
    ["I gotta to go.", "I gotta go.", "gotta มี to อยู่ในตัวแล้ว"]
  ],
  s6l2: [
    ["Please do not hesitate to contacting us.", "Please do not hesitate to contact us.", "hesitate to + กริยารูปเดิม"],
    ["We regret to inform that the event is cancelled.", "We regret to inform you that the event has been cancelled.", "inform ต้องมีคนตามหลัง"],
    ["I'd appreciate if you could reply.", "I'd appreciate it if you could reply.", "โครงสร้างคือ appreciate it if"]
  ],
  s6l3: [
    ["Are you pulling my legs?", "Are you pulling my leg?", "สำนวนใช้ leg เอกพจน์"],
    ["I'm just kid.", "I'm just kidding.", "ล้อเล่นคือ kidding"],
    ["He has a very dry humor sense.", "He has a very dry sense of humor.", "ลำดับคำคือ sense of humor"]
  ],
  s6l4: [
    ["All of the sudden, the lights went out.", "All of a sudden, the lights went out.", "สำนวนตายตัวคือ All of a sudden"],
    ["Believe or not, I enjoyed it.", "Believe it or not, I enjoyed it.", "ต้องมี it"],
    ["I was walk home when it started to rain.", "I was walking home when it started to rain.", "ปูฉากด้วย was + -ing"]
  ],
  s6l5: [
    ["What evidences do you have?", "What evidence do you have?", "evidence นับไม่ได้ ไม่เติม s"],
    ["It depends of how you look at it.", "It depends on how you look at it.", "depend on"],
    ["I am partly agree with you, but...", "I partly agree with you, but...", "agree เป็นกริยาอยู่แล้ว ไม่ต้องมี am และ partly วางหน้า agree"]
  ],
  s6l6: [
    ["It's on the top of my tongue.", "It's on the tip of my tongue.", "สำนวนคือ tip (ปลายลิ้น)"],
    ["In a nut shell, it worked.", "In a nutshell, it worked.", "nutshell เขียนติดกัน"],
    ["What I try to say is, I need time.", "What I'm trying to say is, I need time.", "สิ่งที่กำลังพยายามสื่อตอนนี้ใช้ am trying"]
  ]
},

lessons: {
  s0: [
  {
    id: "s0l7", title: "ตั้งคำถาม", en: "Asking questions", head: "?",
    goal: "ถามด้วย what, where, who, when, why, how ได้ถูกลำดับคำ",
    notes: [
      "คำถามกับ be: <b>Wh- + am/is/are + ประธาน</b>: Where <b>is</b> the station?",
      "คำถามกับกริยาอื่น: <b>Wh- + do/does + ประธาน + กริยา</b>: Where <b>do</b> you live?",
      "<b>How many</b> + สิ่งที่นับได้ (How many cats?) / <b>How much</b> + สิ่งที่นับไม่ได้หรือราคา (How much water? How much is it?)",
      "ตอบ Why ด้วย <b>Because</b> ..."
    ],
    words: [["what","อะไร"],["where","ที่ไหน"],["who","ใคร"],["when","เมื่อไหร่"],["why","ทำไม"],["how","อย่างไร"],["which","อันไหน"],["how many","กี่ (นับได้)"],["how much","เท่าไหร่ (นับไม่ได้ / ราคา)"],["because","เพราะว่า"]],
    sents: [
      ["Where do you live?", "คุณอาศัยอยู่ที่ไหน"],
      ["What is this?", "นี่คืออะไร"],
      ["Who is that man?", "ผู้ชายคนนั้นคือใคร"],
      ["When is your birthday?", "วันเกิดของคุณคือเมื่อไหร่"],
      ["Why are you late? Because the traffic was bad.", "ทำไมมาสาย เพราะรถติด"]
    ],
    fix: [
      ["Where you live?", "Where do you live?", "คำถามกับกริยาทั่วไปต้องมี do"],
      ["What is name your?", "What is your name?", "your วางหน้า name"],
      ["How many money do you have?", "How much money do you have?", "money นับไม่ได้ ใช้ How much"]
    ]
  },
  {
    id: "s0l8", title: "หนึ่งอันหรือหลายอัน", en: "One or many", head: "s",
    goal: "ใช้รูปพหูพจน์ และ some / any / many / much ได้ถูก",
    notes: [
      "หลายอันเติม <b>-s</b> หรือ <b>-es</b>: book → books, box → boxes",
      "รูปพิเศษต้องจำ: man → <b>men</b>, woman → <b>women</b>, child → <b>children</b>, person → <b>people</b>",
      "คำที่นับไม่ได้ไม่เติม s: water, rice, money, information",
      "<b>some</b> ในประโยคบอกเล่า / <b>any</b> ในคำถามและปฏิเสธ / <b>many</b> + นับได้ / <b>much</b> + นับไม่ได้"
    ],
    words: [["some","บ้าง / จำนวนหนึ่ง"],["any","บ้าง / เลย (คำถาม ปฏิเสธ)"],["many","มาก (นับได้)"],["much","มาก (นับไม่ได้)"],["a lot of","เยอะ"],["people","ผู้คน"],["child","เด็กหนึ่งคน"],["children","เด็ก ๆ"],["man","ผู้ชาย"],["men","ผู้ชายหลายคน"]],
    sents: [
      ["I have some friends in Bangkok.", "ฉันมีเพื่อนอยู่ที่กรุงเทพอยู่บ้าง"],
      ["Do you have any questions?", "มีคำถามไหม"],
      ["There are many people here.", "ที่นี่มีคนเยอะ"],
      ["I don't drink much coffee.", "ฉันไม่ค่อยดื่มกาแฟ"],
      ["She has two children.", "เธอมีลูกสองคน"]
    ],
    fix: [
      ["I have many friend.", "I have many friends.", "หลัง many คำนามต้องเป็นพหูพจน์"],
      ["There are three peoples.", "There are three people.", "people เป็นพหูพจน์อยู่แล้ว"],
      ["I don't have some money.", "I don't have any money.", "ประโยคปฏิเสธใช้ any"]
    ]
  }
  ],
  s1: [
  {
    id: "s1l7", title: "อากาศและฤดู", en: "Weather", head: "o",
    goal: "พูดถึงสภาพอากาศ และชวนคุยเรื่องอากาศได้",
    notes: [
      "พูดถึงอากาศใช้ <b>It's</b> ...: It's hot. It's raining.",
      "ถามอากาศ: <b>What's the weather like</b> today?",
      "คำนาม + y เป็นคำคุณศัพท์: sun → sunny, rain → rainy, cloud → cloudy, wind → windy",
      "อากาศเมืองไทยคือ hot and humid (ร้อนชื้น)"
    ],
    words: [["hot","ร้อน"],["cold","หนาว / เย็น"],["warm","อุ่น"],["sunny","แดดจ้า"],["rainy","มีฝน / ฝนตกบ่อย"],["cloudy","มีเมฆมาก"],["windy","ลมแรง"],["humid","ชื้น"],["season","ฤดู"],["umbrella","ร่ม"]],
    sents: [
      ["It's really hot today.", "วันนี้ร้อนจริง ๆ"],
      ["It's going to rain this afternoon.", "บ่ายนี้ฝนจะตก"],
      ["Thailand has three seasons.", "ประเทศไทยมีสามฤดู"],
      ["Don't forget your umbrella.", "อย่าลืมร่มนะ"],
      ["What's the weather like in your city?", "อากาศที่เมืองคุณเป็นยังไง"]
    ],
    fix: [
      ["Today weather is very hot.", "The weather is very hot today.", "weather ต้องมี the นำหน้า หรือพูดสั้น ๆ ว่า It's very hot today. ก็ได้"],
      ["How is the weather like?", "What is the weather like?", "สำนวนคือ What ... like"],
      ["It's rain now.", "It's raining now.", "ฝนกำลังตกใช้ raining"]
    ]
  },
  {
    id: "s1l8", title: "ขอความช่วยเหลือ", en: "Can I? Could you?", head: "c",
    goal: "ขออนุญาต ขอให้คนอื่นช่วย และตอบรับหรือปฏิเสธได้อย่างสุภาพ",
    notes: [
      "<b>Can I</b> ...? = ขออนุญาตทำเอง: Can I sit here?",
      "<b>Could you</b> ...? = ขอให้อีกฝ่ายทำ (สุภาพกว่า Can you)",
      "<b>borrow</b> = ยืมจากคนอื่น / <b>lend</b> = ให้คนอื่นยืม",
      "ตอบรับ: Sure. / Of course. / No problem. ปฏิเสธ: Sorry, I can't right now."
    ],
    words: [["help","ช่วย"],["can I","ขอ...ได้ไหม (ทำเอง)"],["could you","ช่วย...ได้ไหม (ให้คนอื่นทำ)"],["borrow","ยืม"],["lend","ให้ยืม"],["repeat","พูดซ้ำ"],["of course","ได้แน่นอน"],["sure","ได้สิ"],["no problem","ไม่มีปัญหา"],["right now","ตอนนี้เลย"]],
    sents: [
      ["Could you help me, please?", "ช่วยฉันหน่อยได้ไหม"],
      ["Can I borrow your pen?", "ขอยืมปากกาหน่อยได้ไหม"],
      ["Could you repeat that, please?", "ช่วยพูดอีกทีได้ไหม"],
      ["Of course, no problem.", "แน่นอน ไม่มีปัญหา"],
      ["Sorry, I can't right now.", "ขอโทษ ตอนนี้ไม่ได้จริง ๆ"]
    ],
    fix: [
      ["Can you borrow me your pen?", "Can you lend me your pen?", "ให้คนอื่นยืมใช้ lend"],
      ["Can I lend your book?", "Can I borrow your book?", "ยืมจากคนอื่นใช้ borrow"],
      ["Could you repeat again?", "Could you repeat that?", "repeat แปลว่าทำซ้ำอยู่แล้ว ไม่ต้องมี again"]
    ]
  }
  ],
  s2: [
  {
    id: "s2l7", title: "ตอนนั้นกำลังทำอะไร", en: "Was doing", head: "b",
    goal: "ใช้ past continuous เล่าสิ่งที่กำลังเกิดในอดีต และเหตุการณ์ที่มาขัดจังหวะ",
    notes: [
      "<b>was / were + -ing</b> = กำลังทำอยู่ ณ ตอนนั้นในอดีต",
      "เหตุการณ์ยาวใช้ past continuous ส่วนเหตุการณ์สั้นที่แทรกเข้ามาใช้ past simple: I <b>was watching</b> TV when you <b>called</b>.",
      "<b>while</b> + เหตุการณ์ยาว / <b>when</b> + เหตุการณ์สั้น",
      "I, he, she, it ใช้ was / you, we, they ใช้ were"
    ],
    words: [["was","เป็น อยู่ (อดีต เอกพจน์)"],["were","เป็น อยู่ (อดีต พหูพจน์)"],["while","ขณะที่"],["when","ตอนที่"],["suddenly","ทันใดนั้น"],["happen","เกิดขึ้น"],["ring","(โทรศัพท์) ดัง"],["fall asleep","เผลอหลับ"],["at that time","ตอนนั้น"],["last night","เมื่อคืน"]],
    sents: [
      ["I was watching TV when you called.", "ฉันกำลังดูทีวีตอนที่คุณโทรมา"],
      ["What were you doing at eight last night?", "เมื่อคืนตอนสองทุ่มคุณกำลังทำอะไร"],
      ["While I was cooking, the lights went out.", "ขณะที่ฉันทำอาหาร ไฟก็ดับ"],
      ["They were playing football in the rain.", "พวกเขากำลังเล่นฟุตบอลกลางฝน"],
      ["I fell asleep while I was reading.", "ฉันเผลอหลับขณะอ่านหนังสือ"]
    ],
    fix: [
      ["I was watch TV when you called.", "I was watching TV when you called.", "was + กริยา -ing"],
      ["They was playing football.", "They were playing football.", "they ใช้ were"],
      ["While I was cooking, the phone ring.", "While I was cooking, the phone rang.", "เหตุการณ์สั้นที่แทรกเข้ามาในอดีตใช้ past simple: rang"]
    ]
  },
  {
    id: "s2l8", title: "ชวนเพื่อนไปเที่ยว", en: "Let's go out", head: "y",
    goal: "ชวน เสนอแนะ ตอบรับ และปฏิเสธคำชวนอย่างนุ่มนวลได้",
    notes: [
      "ชวน: <b>Would you like to</b> + กริยา? (สุภาพ)",
      "เสนอ: <b>Let's</b> + กริยา / <b>Why don't we</b> + กริยา? / <b>How about</b> + กริยา -ing?",
      "ตอบรับ: I'd love to! / Sounds good. / Sure, why not?",
      "ปฏิเสธนุ่มนวล: I'd love to, but I'm busy. Maybe another time?"
    ],
    words: [["let's","มา...กันเถอะ"],["why don't we","ทำไมเราไม่...ล่ะ"],["how about","...ดีไหม"],["would you like to","อยากจะ...ไหม"],["I'd love to","อยากมาก / ยินดีเลย"],["sounds good","ฟังดูดี"],["another time","คราวหน้า"],["join","ร่วม / มาด้วย"],["free","ว่าง"],["see you then","เจอกันตอนนั้นนะ"]],
    sents: [
      ["Would you like to have dinner with us?", "อยากไปกินข้าวเย็นกับพวกเราไหม"],
      ["I'd love to, thanks!", "อยากไปมาก ขอบคุณนะ"],
      ["How about going to the cinema?", "ไปดูหนังกันดีไหม"],
      ["Why don't we meet at seven?", "เจอกันตอนหนึ่งทุ่มดีไหม"],
      ["Sounds good. See you then.", "ฟังดูดี เจอกันนะ"]
    ],
    fix: [
      ["How about go to the beach?", "How about going to the beach?", "How about + กริยา -ing"],
      ["Would you like come with us?", "Would you like to come with us?", "would like ต้องตามด้วย to"],
      ["Let's to go.", "Let's go.", "หลัง Let's ใช้กริยารูปเดิม ไม่มี to"]
    ]
  }
  ],
  s3: [
  {
    id: "s3l7", title: "ต้องทำ ควรทำ ห้ามทำ", en: "Must, have to, should", head: "m",
    goal: "แยก must / have to / don't have to / mustn't / should ได้ไม่สับสน",
    notes: [
      "<b>must</b> และ <b>have to</b> = ต้อง",
      "<b>mustn't</b> = <b>ห้าม</b> / <b>don't have to</b> = <b>ไม่จำเป็นต้อง</b> สองคำนี้ความหมายต่างกันมาก",
      "<b>should</b> = ควร (คำแนะนำ)",
      "he / she / it ใช้ <b>has to</b>: She has to work."
    ],
    words: [["must","ต้อง"],["have to","ต้อง"],["don't have to","ไม่จำเป็นต้อง"],["mustn't","ห้าม"],["should","ควร"],["shouldn't","ไม่ควร"],["need to","จำเป็นต้อง"],["allowed","ได้รับอนุญาต"],["rule","กฎ"],["advice","คำแนะนำ"]],
    sents: [
      ["I have to work tomorrow.", "พรุ่งนี้ฉันต้องทำงาน"],
      ["You mustn't smoke here.", "ห้ามสูบบุหรี่ที่นี่"],
      ["You don't have to come if you're busy.", "ถ้ายุ่งก็ไม่ต้องมาก็ได้"],
      ["You should see a doctor.", "คุณควรไปหาหมอ"],
      ["Do I need to bring anything?", "ฉันต้องเอาอะไรไปไหม"]
    ],
    fix: [
      ["She have to work tomorrow.", "She has to work tomorrow.", "she ใช้ has to"],
      ["You don't must come if you're busy.", "You don't have to come if you're busy.", "ไม่จำเป็นต้องทำ ใช้ don't have to ไม่มีรูป don't must"],
      ["You should to see a doctor.", "You should see a doctor.", "หลัง should ไม่มี to"]
    ]
  },
  {
    id: "s3l8", title: "ชวนคุยเล่น", en: "Small talk", head: "t",
    goal: "เปิดบทสนทนา คุยเล่นต่อเนื่อง และปิดบทสนทนาอย่างเป็นธรรมชาติ",
    notes: [
      "small talk ใช้หัวข้อปลอดภัย: อากาศ วันหยุด งาน อาหาร",
      "ตอบแล้ว <b>ถามกลับ</b> เสมอ: What about you? / How about you?",
      "เลี่ยงเรื่องอายุ เงินเดือน น้ำหนัก รูปร่าง คนไทยถามกันบ่อยแต่ชาวต่างชาติถือเป็นเรื่องส่วนตัว",
      "ปิดบทสนทนา: Nice chatting with you. / Let's catch up soon."
    ],
    words: [["how's it going","เป็นไงบ้าง"],["not much","ก็เรื่อย ๆ"],["lately","ช่วงนี้"],["pretty good","ก็ดีนะ"],["same here","เหมือนกันเลย"],["keep busy","ยุ่ง ๆ อยู่"],["catch up","คุยอัปเดตกัน"],["take care","ดูแลตัวเองนะ"],["nice chatting","ดีใจที่ได้คุย"],["what about you","แล้วคุณล่ะ"]],
    sents: [
      ["Hey, how's it going?", "เฮ้ เป็นไงบ้าง"],
      ["Pretty good. What have you been up to lately?", "ก็ดีนะ ช่วงนี้ทำอะไรอยู่บ้าง"],
      ["Not much, just keeping busy with work.", "ก็เรื่อย ๆ ยุ่งกับงานอยู่"],
      ["We should catch up sometime.", "ไว้มาคุยอัปเดตกันนะ"],
      ["Nice chatting with you. Take care!", "ดีใจที่ได้คุย ดูแลตัวเองนะ"]
    ],
    fix: [
      ["How much is your salary?", "How's work going?", "เงินเดือนเป็นเรื่องส่วนตัว ถามเรื่องงานแบบกว้าง ๆ แทน", "คุยเล่นกับคนรู้จัก ถามเรื่องงานแบบไหนสุภาพ"],
      ["You look fat. Did you gain weight?", "You look well! How have you been?", "ไม่วิจารณ์รูปร่าง ชมแบบกว้าง ๆ แทน", "ทักเพื่อนที่ไม่ได้เจอนาน ประโยคไหนสุภาพ"],
      ["I'm fine. And you are?", "I'm fine. What about you?", "ถามกลับใช้ What about you? หรือ And you?"]
    ]
  }
  ],
  s4: [
  {
    id: "s4l7", title: "ประโยคขยาย", en: "Who, which, that", head: "r",
    goal: "ใช้ who / which / that / where / whose ขยายคำนามให้พูดได้ยาวและชัด",
    notes: [
      "<b>who</b> ขยายคน / <b>which</b> ขยายสิ่งของ / <b>that</b> ใช้ได้ทั้งสองแบบ",
      "<b>where</b> ขยายสถานที่ / <b>whose</b> = ของใคร",
      "ห้ามใส่สรรพนามซ้ำ: The book that I read <s>it</s>",
      "ถ้าเป็นกรรม ตัด who / that ทิ้งได้: The man (who) I met was kind."
    ],
    words: [["who","ผู้ซึ่ง (คน)"],["which","ซึ่ง (สิ่งของ)"],["that","ที่ (คนหรือของ)"],["where","ที่ซึ่ง (สถานที่)"],["whose","ซึ่ง...ของเขา"],["next door","บ้านข้าง ๆ"],["chef","เชฟ / พ่อครัว"],["pilot","นักบิน"],["change","เปลี่ยน"],["broken","เสีย / พัง"]],
    sents: [
      ["The man who lives next door is a chef.", "ผู้ชายที่อยู่บ้านข้าง ๆ เป็นเชฟ"],
      ["This is the book that changed my life.", "นี่คือหนังสือที่เปลี่ยนชีวิตฉัน"],
      ["That's the café where we first met.", "นั่นคือคาเฟ่ที่เราเจอกันครั้งแรก"],
      ["I have a friend whose father is a pilot.", "ฉันมีเพื่อนที่พ่อเป็นนักบิน"],
      ["The phone which I bought last week is broken.", "โทรศัพท์ที่ฉันซื้อเมื่อสัปดาห์ก่อนเสียแล้ว"]
    ],
    fix: [
      ["The man which lives next door is a chef.", "The man who lives next door is a chef.", "ขยายคนใช้ who"],
      ["This is the book that I read it last year.", "This is the book that I read last year.", "ห้ามใส่ it ซ้ำ"],
      ["That's the café which we first met.", "That's the café where we first met.", "สถานที่ที่เกิดเหตุการณ์ใช้ where"]
    ]
  },
  {
    id: "s4l8", title: "ร้องเรียนอย่างสุภาพ", en: "Making a complaint", head: "k",
    goal: "แจ้งปัญหา ขอคืนเงินหรือเปลี่ยนสินค้า และยืนยันสิทธิ์อย่างสุภาพได้",
    notes: [
      "เปิดสุภาพ: I'd like to make a complaint. / I'm afraid there's a problem with ...",
      "อธิบายชัด: อะไรเสีย ซื้อเมื่อไหร่ เกิดอะไรขึ้น",
      "บอกสิ่งที่ต้องการ: a refund (คืนเงิน) / a replacement (เปลี่ยนใหม่)",
      "ยืนยันโดยไม่หยาบ: I'm afraid that isn't acceptable. / Could I speak to the manager?"
    ],
    words: [["complaint","คำร้องเรียน"],["refund","คืนเงิน"],["replacement","ของเปลี่ยนใหม่"],["not working","ใช้ไม่ได้"],["damaged","เสียหาย"],["manager","ผู้จัดการ"],["apologize","ขอโทษ"],["acceptable","ยอมรับได้"],["in stock","มีของ"],["receipt","ใบเสร็จ"]],
    sents: [
      ["I'd like to make a complaint.", "ฉันอยากร้องเรียน"],
      ["The phone I bought yesterday isn't working.", "โทรศัพท์ที่ซื้อเมื่อวานใช้ไม่ได้"],
      ["Could I get a refund or a replacement?", "ขอคืนเงินหรือเปลี่ยนเครื่องใหม่ได้ไหม"],
      ["I'm afraid this isn't acceptable.", "ขออภัย แต่แบบนี้รับไม่ได้"],
      ["Could I speak to the manager, please?", "ขอคุยกับผู้จัดการได้ไหม"]
    ],
    fix: [
      ["I want to complain you.", "I'd like to make a complaint.", "complain ไม่ตามด้วยคนโดยตรง"],
      ["My phone is not work.", "My phone isn't working.", "ใช้ไม่ได้ใช้ isn't working"],
      ["Give me money back now.", "Could I get a refund, please?", "ขอคืนเงินอย่างสุภาพได้ผลกว่า", "ขอเงินคืนจากร้านอย่างสุภาพ ประโยคไหนเหมาะกว่า"]
    ]
  }
  ],
  s5: [
  {
    id: "s5l7", title: "เสียดายและเดาเรื่องในอดีต", en: "Should have, must have", head: "h",
    goal: "พูดถึงความเสียดายและคาดเดาเรื่องที่เกิดไปแล้วด้วย modal + have + V3",
    notes: [
      "<b>should have</b> + V3 = น่าจะทำ (แต่ไม่ได้ทำ): I should have left earlier.",
      "<b>could have</b> + V3 = ทำได้นะ (แต่ไม่ได้ทำ)",
      "<b>must have</b> + V3 = คงจะแน่ ๆ / <b>can't have</b> + V3 = ไม่น่าเป็นไปได้",
      "เวลาพูดย่อเป็น should've ฟังคล้าย should of แต่เขียนต้องเป็น have"
    ],
    words: [["should have","น่าจะได้..."],["shouldn't have","ไม่น่า...เลย"],["could have","...ได้นะ (แต่ไม่ได้ทำ)"],["might have","อาจจะ...ไปแล้ว"],["must have","คงจะ...แน่ ๆ"],["can't have","ไม่น่าจะ...ได้"],["would have","คงจะ...ไปแล้ว"],["regret","เสียใจ / เสียดาย"],["earlier","เร็วกว่านี้"],["forgotten","ลืมไปแล้ว (forget)"]],
    sents: [
      ["I should have left earlier.", "ฉันน่าจะออกมาเร็วกว่านี้"],
      ["You could have told me!", "บอกกันก็ได้นี่"],
      ["She must have forgotten.", "เธอคงลืมแน่ ๆ"],
      ["He can't have finished already.", "เขาไม่น่าจะเสร็จแล้ว"],
      ["I would have come if you had asked.", "ถ้าคุณชวน ฉันคงไปแล้ว"]
    ],
    fix: [
      ["I should have leave earlier.", "I should have left earlier.", "หลัง have ใช้กริยาช่อง 3"],
      ["She must forget yesterday.", "She must have forgotten yesterday.", "คาดเดาเรื่องในอดีตใช้ must have + V3"],
      ["I should of called you.", "I should have called you.", "เขียนเป็น have เสมอ of มาจากเสียงย่อ should've"]
    ]
  },
  {
    id: "s5l8", title: "คำที่มาคู่กัน", en: "Collocations", head: "x",
    goal: "ใช้คำที่เจ้าของภาษาพูดเป็นคู่ให้ภาษาฟังเป็นธรรมชาติ",
    notes: [
      "เจ้าของภาษาพูดคำเป็นคู่ ถ้าจับคู่ผิด แม้คนฟังเข้าใจแต่จะฟังแปลก",
      "<b>make</b> = สร้างผลลัพธ์ (make a decision, make a mistake) / <b>do</b> = ทำกิจกรรมหรืองาน (do homework, do a favor)",
      "ฝนตกหนักคือ <b>heavy</b> rain ไม่ใช่ strong rain / กาแฟเข้มคือ <b>strong</b> coffee",
      "จดศัพท์เป็นคู่ ไม่ใช่ทีละคำ"
    ],
    words: [["make a decision","ตัดสินใจ"],["make a mistake","ทำผิดพลาด"],["do homework","ทำการบ้าน"],["do a favor","ช่วยเหลือ"],["take a photo","ถ่ายรูป"],["have a look","ลองดู"],["heavy rain","ฝนตกหนัก"],["strong coffee","กาแฟเข้ม"],["pay attention","ตั้งใจ / สนใจ"],["catch a cold","เป็นหวัด"]],
    sents: [
      ["I need to make a decision today.", "วันนี้ฉันต้องตัดสินใจ"],
      ["Can you do me a favor?", "ช่วยอะไรฉันหน่อยได้ไหม"],
      ["Let's take a photo here.", "ถ่ายรูปตรงนี้กันเถอะ"],
      ["There was heavy rain last night.", "เมื่อคืนฝนตกหนัก"],
      ["Please pay attention to this point.", "กรุณาให้ความสนใจประเด็นนี้"]
    ],
    fix: [
      ["I did a mistake.", "I made a mistake.", "mistake คู่กับ make"],
      ["There was strong rain.", "There was heavy rain.", "ฝนตกหนักใช้ heavy"],
      ["Let's make a photo.", "Let's take a photo.", "ถ่ายรูปใช้ take"]
    ]
  }
  ],
  s6: [
  {
    id: "s6l7", title: "ถ้าย้อนเวลาได้", en: "Wishes and regrets", head: "w",
    goal: "ใช้ wish, if only, would rather และเงื่อนไขผสมพูดถึงความปรารถนาและความเสียดาย",
    notes: [
      "<b>wish + past</b> = อยากให้ตอนนี้เป็นอีกแบบ: I wish I <b>had</b> more time.",
      "<b>wish / if only + had V3</b> = เสียดายเรื่องที่ผ่านไปแล้ว: If only I <b>had known</b>!",
      "<b>would rather</b> + กริยารูปเดิม = อยากจะ...มากกว่า",
      "เงื่อนไขผสม: If I <b>had studied</b> medicine (อดีต), I <b>would be</b> a doctor now (ปัจจุบัน)"
    ],
    words: [["I wish","ฉันอยากให้ (แต่จริง ๆ ไม่ใช่)"],["if only","ถ้าเพียงแต่"],["would rather","อยากจะ...มากกว่า"],["it's about time","ถึงเวลาแล้วที่"],["had known","ได้รู้ (ก่อนหน้านั้น)"],["in hindsight","พอมองย้อนกลับไป"],["looking back","มองย้อนกลับไป"],["otherwise","ไม่อย่างนั้น"],["now that","ในเมื่อตอนนี้"],["make up for","ชดเชย"]],
    sents: [
      ["I wish I had more free time.", "ฉันอยากมีเวลาว่างมากกว่านี้"],
      ["If only I had known earlier!", "ถ้าเพียงแต่ฉันรู้เร็วกว่านี้"],
      ["I'd rather stay in tonight.", "คืนนี้ฉันขอไม่ออกไปไหนดีกว่า"],
      ["It's about time we went home.", "ถึงเวลากลับบ้านแล้ว"],
      ["If I had studied medicine, I would be a doctor now.", "ถ้าตอนนั้นฉันเรียนแพทย์ ตอนนี้ฉันคงเป็นหมอแล้ว"]
    ],
    fix: [
      ["I wish I have more time.", "I wish I had more time.", "wish เรื่องปัจจุบันใช้ past"],
      ["If only I knew it yesterday.", "If only I had known it yesterday.", "เสียดายอดีตใช้ had + V3"],
      ["I'd rather to stay home.", "I'd rather stay home.", "would rather ไม่มี to"]
    ]
  },
  {
    id: "s6l8", title: "โน้มน้าวใจ", en: "Persuasion", head: "p",
    goal: "เสนอความคิดให้คนคล้อยตาม ด้วยภาพ คำถาม และเหตุผลที่กระชับ",
    notes: [
      "เริ่มจากสิ่งที่คนฟังสนใจ ไม่ใช่สิ่งที่เราอยากพูด",
      "ชวนให้นึกภาพ: <b>Imagine</b> ... / <b>Picture this</b>: ...",
      "ถามให้คิด: <b>What if</b> we ...? / What do we really have to lose?",
      "จบด้วยการให้เขาตัดสินใจเอง: <b>Ultimately</b>, it's your call."
    ],
    words: [["imagine","ลองนึกภาพ"],["picture this","ลองนึกภาพดู"],["think about it","ลองคิดดูนะ"],["it's worth","คุ้มที่จะ"],["what if","จะเป็นยังไงถ้า"],["the real question is","คำถามจริง ๆ คือ"],["let's be honest","มาพูดกันตรง ๆ"],["ultimately","ท้ายที่สุด"],["convinced","มั่นใจ / เชื่อแน่"],["it's your call","คุณตัดสินใจเลย"]],
    sents: [
      ["Imagine how much time we could save.", "ลองนึกดูว่าเราจะประหยัดเวลาได้แค่ไหน"],
      ["Think about it: what do we really have to lose?", "ลองคิดดูสิ เรามีอะไรต้องเสียจริง ๆ เหรอ"],
      ["It's worth trying at least once.", "มันคุ้มที่จะลองอย่างน้อยสักครั้ง"],
      ["What if we tried a different approach?", "ถ้าเราลองวิธีอื่นดูล่ะ"],
      ["Ultimately, it's your call.", "ท้ายที่สุดแล้วคุณตัดสินใจเองเลย"]
    ],
    fix: [
      ["It's worth to try.", "It's worth trying.", "worth + กริยา -ing"],
      ["Imagine how much time we can saving.", "Imagine how much time we could save.", "หลัง can / could ใช้กริยารูปเดิม"],
      ["I'm convincing that it works.", "I'm convinced that it works.", "เชื่อมั่นใช้ convinced"]
    ]
  }
  ]
},

dialogs: {
  s0: [
    { title: "เจอเพื่อนใหม่", th: "แนะนำตัวกับคนที่เพิ่งเจอ", lines: [
      ["Mia", "Hi! I'm Mia. What's your name?", "สวัสดี ฉันชื่อมีอา คุณชื่ออะไร"],
      ["you", "Hi, Mia. My name is Nok.", "สวัสดีมีอา ฉันชื่อนก"],
      ["Mia", "Nice to meet you, Nok. Where are you from?", "ยินดีที่ได้รู้จักนะนก มาจากไหน"],
      ["you", "Nice to meet you too. I'm from Thailand.", "ยินดีที่ได้รู้จักเช่นกัน ฉันมาจากประเทศไทย"],
      ["Mia", "Cool! Are you a student?", "เจ๋ง เป็นนักเรียนหรือเปล่า"],
      ["you", "No, I'm not. I'm a nurse.", "ไม่ใช่ ฉันเป็นพยาบาล"]
    ]},
    { title: "ขอเบอร์โทร", th: "บอกเบอร์โทรและสะกดชื่อ", lines: [
      ["Ben", "Can I have your phone number?", "ขอเบอร์โทรได้ไหม"],
      ["you", "Sure. It's zero eight one, two three four, five six seven eight.", "ได้สิ ศูนย์แปดหนึ่ง สองสามสี่ ห้าหกเจ็ดแปด"],
      ["Ben", "Sorry, can you say it again, please?", "ขอโทษนะ พูดอีกทีได้ไหม"],
      ["you", "Of course. Zero eight one, two three four, five six seven eight.", "ได้เลย ศูนย์แปดหนึ่ง สองสามสี่ ห้าหกเจ็ดแปด"],
      ["Ben", "Thanks! How do you spell your name?", "ขอบคุณ ชื่อคุณสะกดยังไง"],
      ["you", "N, O, K. Nok.", "เอ็น โอ เค นก"]
    ]}
  ],
  s1: [
    { title: "สั่งกาแฟ", th: "สั่งเครื่องดื่มและจ่ายเงินที่ร้านกาแฟ", lines: [
      ["Barista", "Hi there! What can I get you?", "สวัสดีครับ รับอะไรดี"],
      ["you", "Can I have an iced latte, please?", "ขอลาเต้เย็นแก้วหนึ่ง"],
      ["Barista", "Sure. What size would you like?", "ได้ครับ เอาขนาดไหน"],
      ["you", "Medium, please. Not too sweet.", "ขนาดกลาง ไม่หวานมากนะ"],
      ["Barista", "No problem. That's ninety-five baht.", "ได้ครับ เก้าสิบห้าบาท"],
      ["you", "Can I pay by card?", "จ่ายด้วยบัตรได้ไหม"]
    ]},
    { title: "ซื้อเสื้อ", th: "หาไซซ์และขอลองเสื้อ", lines: [
      ["Staff", "Hello! Can I help you?", "สวัสดีค่ะ ให้ช่วยอะไรไหมคะ"],
      ["you", "Yes, please. I'm looking for a shirt.", "ค่ะ กำลังหาเสื้อเชิ้ตอยู่"],
      ["Staff", "What size are you?", "ใส่ไซซ์อะไรคะ"],
      ["you", "Medium. Can I try this one on?", "ไซซ์กลาง ขอลองตัวนี้ได้ไหม"],
      ["Staff", "Of course. The fitting room is over there.", "ได้เลยค่ะ ห้องลองอยู่ทางนั้น"],
      ["you", "Thanks. How much is it?", "ขอบคุณ ตัวนี้ราคาเท่าไหร่"]
    ]}
  ],
  s2: [
    { title: "เช็กอินโรงแรม", th: "เช็กอินและถามเวลาเช็กเอาต์", lines: [
      ["Receptionist", "Good evening. Do you have a reservation?", "สวัสดีตอนเย็นครับ จองไว้หรือเปล่าครับ"],
      ["you", "Yes, I booked a room for two nights. My name is Nok.", "ใช่ ฉันจองห้องไว้สองคืน ชื่อนก"],
      ["Receptionist", "Thank you. Could I see your passport, please?", "ขอบคุณครับ ขอดูพาสปอร์ตหน่อยครับ"],
      ["you", "Here you are.", "นี่ค่ะ"],
      ["Receptionist", "Your room is on the fifth floor. Breakfast is from seven to ten.", "ห้องอยู่ชั้นห้า อาหารเช้าเจ็ดโมงถึงสิบโมง"],
      ["you", "Great. What time is check-out?", "เยี่ยม เช็กเอาต์กี่โมง"],
      ["Receptionist", "Check-out is at noon. Enjoy your stay!", "เช็กเอาต์เที่ยงครับ ขอให้พักผ่อนให้สบาย"]
    ]},
    { title: "ที่คลินิก", th: "เล่าอาการให้หมอฟัง", lines: [
      ["Doctor", "So, what seems to be the problem?", "เป็นอะไรมาครับ"],
      ["you", "I have a sore throat and a fever.", "ฉันเจ็บคอและมีไข้"],
      ["Doctor", "When did it start?", "เริ่มเป็นตั้งแต่เมื่อไหร่"],
      ["you", "It started yesterday morning.", "เริ่มเมื่อเช้าวานนี้"],
      ["Doctor", "OK. Take this medicine three times a day and get some rest.", "โอเค กินยานี้วันละสามครั้งและพักผ่อนนะครับ"],
      ["you", "Thank you, doctor. Should I come back if it gets worse?", "ขอบคุณค่ะหมอ ถ้าอาการแย่ลงควรกลับมาไหม"],
      ["Doctor", "Yes, come back in three days if you don't feel better.", "ใช่ครับ ถ้าสามวันแล้วยังไม่ดีขึ้นให้กลับมา"]
    ]}
  ],
  s3: [
    { title: "สัมภาษณ์งาน", th: "ตอบคำถามสัมภาษณ์งานยอดฮิต", lines: [
      ["Interviewer", "Tell me a little about yourself.", "เล่าเกี่ยวกับตัวคุณสักหน่อย"],
      ["you", "I've worked in customer service for five years.", "ฉันทำงานบริการลูกค้ามาห้าปีแล้ว"],
      ["Interviewer", "Why do you want this job?", "ทำไมถึงอยากได้งานนี้"],
      ["you", "I'm looking for a new challenge, and I love working with people.", "ฉันอยากหาความท้าทายใหม่ และชอบทำงานกับผู้คน"],
      ["Interviewer", "What's your biggest strength?", "จุดแข็งที่สุดของคุณคืออะไร"],
      ["you", "I'm a good listener, and I stay calm under pressure.", "ฉันเป็นผู้ฟังที่ดี และใจเย็นเวลากดดัน"]
    ]},
    { title: "เลื่อนนัด", th: "ขอเลื่อนประชุมกับเพื่อนร่วมงาน", lines: [
      ["Tom", "Hi Nok, are we still meeting on Thursday?", "หวัดดีนก เรายังนัดวันพฤหัสอยู่ใช่ไหม"],
      ["you", "Actually, something came up. Can we reschedule?", "จริง ๆ มีธุระด่วนเข้ามา ขอเลื่อนได้ไหม"],
      ["Tom", "Sure. When are you available?", "ได้สิ สะดวกวันไหน"],
      ["you", "Does Friday morning suit you?", "เช้าวันศุกร์สะดวกไหม"],
      ["Tom", "Friday at ten works for me.", "ศุกร์สิบโมงโอเคเลย"],
      ["you", "Perfect. I'll send you an invite.", "เยี่ยม เดี๋ยวส่งนัดไปให้นะ"]
    ]}
  ],
  s4: [
    { title: "ประชุมทีม", th: "ขอความชัดเจนและเสนอแนวทางในที่ประชุม", lines: [
      ["Manager", "Let's get started. First, the project timeline.", "เริ่มกันเลย เรื่องแรกคือไทม์ไลน์โปรเจกต์"],
      ["you", "Sorry to interrupt, but could you clarify the deadline?", "ขอโทษที่ขัดจังหวะ ช่วยบอกกำหนดส่งให้ชัดอีกทีได้ไหม"],
      ["Manager", "The deadline is the end of the month.", "กำหนดส่งคือสิ้นเดือน"],
      ["you", "In that case, I'd like to suggest a different approach.", "ถ้าอย่างนั้น ฉันขอเสนอวิธีอื่น"],
      ["Manager", "Go ahead. What do you have in mind?", "ว่ามาเลย คิดไว้ว่ายังไง"],
      ["you", "If we split the work into two teams, we'll finish faster.", "ถ้าแบ่งงานเป็นสองทีม เราจะเสร็จเร็วขึ้น"]
    ]},
    { title: "ร้องเรียนสินค้า", th: "ขอเปลี่ยนหรือคืนเงินสินค้าที่เสีย", lines: [
      ["Staff", "Good afternoon. How can I help you?", "สวัสดีตอนบ่ายค่ะ ให้ช่วยอะไรคะ"],
      ["you", "I'd like to make a complaint. This laptop stopped working after two days.", "ฉันอยากร้องเรียน แล็ปท็อปเครื่องนี้ใช้ได้แค่สองวันก็เสีย"],
      ["Staff", "I'm sorry to hear that. Do you have the receipt?", "ขอโทษด้วยค่ะ มีใบเสร็จไหมคะ"],
      ["you", "Yes, here it is. Could I get a replacement?", "มีค่ะ นี่ค่ะ ขอเปลี่ยนเครื่องใหม่ได้ไหม"],
      ["Staff", "Unfortunately, we don't have that model in stock.", "ขออภัยค่ะ รุ่นนั้นหมดสต็อก"],
      ["you", "In that case, I'd like a full refund, please.", "ถ้าอย่างนั้น ขอคืนเงินเต็มจำนวนค่ะ"]
    ]}
  ],
  s5: [
    { title: "ต่อรองราคา", th: "ต่อรองกับผู้ขายสินค้าจำนวนมาก", lines: [
      ["Supplier", "Our price is two hundred dollars per unit.", "ราคาของเราคือหน่วยละสองร้อยดอลลาร์"],
      ["you", "I was wondering if you could be a little more flexible.", "ไม่ทราบว่าพอจะยืดหยุ่นได้อีกนิดไหม"],
      ["Supplier", "What did you have in mind?", "คุณคิดไว้ประมาณไหน"],
      ["you", "If we order a thousand units, could you offer a ten percent discount?", "ถ้าเราสั่งพันหน่วย ลดให้สิบเปอร์เซ็นต์ได้ไหม"],
      ["Supplier", "We could do seven percent.", "เราลดได้เจ็ดเปอร์เซ็นต์"],
      ["you", "Let's meet halfway. Eight and a half percent, and we have a deal.", "เจอกันครึ่งทางเถอะ แปดจุดห้าเปอร์เซ็นต์ แล้วเราก็ตกลงกันได้เลย"]
    ]},
    { title: "ปฏิเสธคำชวน", th: "ปฏิเสธเพื่อนอย่างสุภาพโดยไม่เสียน้ำใจ", lines: [
      ["Jess", "We're having a party on Saturday. Would you like to come?", "วันเสาร์เราจัดปาร์ตี้ อยากมาไหม"],
      ["you", "That sounds lovely, but I'm afraid I can't make it.", "ฟังดูน่าสนุกมาก แต่เสียดายจัง ไปไม่ได้"],
      ["Jess", "Oh no! Are you busy?", "แย่จัง ยุ่งเหรอ"],
      ["you", "To be honest, I've got a big deadline on Monday.", "พูดตามตรง วันจันทร์มีงานใหญ่ต้องส่ง"],
      ["Jess", "That's a shame. Maybe next time?", "น่าเสียดาย ไว้คราวหน้านะ"],
      ["you", "Definitely. Thanks for thinking of me.", "แน่นอน ขอบคุณที่นึกถึงนะ"]
    ]}
  ],
  s6: [
    { title: "แซวกันในออฟฟิศ", th: "คุยเล่นแบบประชดและมุกหน้าตาย", lines: [
      ["Sam", "Oh great, another Monday. Just what I needed.", "เยี่ยมเลย วันจันทร์อีกแล้ว ที่อยากได้พอดี"],
      ["you", "Tell me about it. I could really use another coffee.", "ใช่เลย อยากได้กาแฟอีกสักแก้วจริง ๆ"],
      ["Sam", "You look exhausted. Did you even sleep?", "ดูเพลียมาก ได้นอนบ้างหรือเปล่า"],
      ["you", "Barely. To cut a long story short, my neighbor's dog had a party.", "แทบไม่ได้นอน สรุปสั้น ๆ คือหมาข้างบ้านจัดปาร์ตี้"],
      ["Sam", "Ha! Are you pulling my leg?", "ฮา นี่หลอกกันเล่นหรือเปล่า"],
      ["you", "I wish I were. I'm gonna need a nap by noon.", "อยากให้เป็นแค่มุกจัง เที่ยงนี้คงต้องงีบแล้ว"]
    ]},
    { title: "ถกเรื่องทำงานที่บ้าน", th: "ยอมรับข้อดีของอีกฝ่ายแล้วโต้แย้งด้วยเหตุผล", lines: [
      ["Alex", "Honestly, working from home is just better.", "พูดตรง ๆ นะ ทำงานที่บ้านดีกว่าเยอะ"],
      ["you", "Granted, it saves time, but I'd argue it hurts teamwork.", "จริงอยู่ว่าประหยัดเวลา แต่ฉันว่ามันทำให้ทีมเวิร์กแย่ลง"],
      ["Alex", "What evidence do you have for that?", "มีหลักฐานอะไรสนับสนุน"],
      ["you", "Off the top of my head, new staff take longer to learn the ropes.", "เท่าที่นึกออกตอนนี้ พนักงานใหม่ใช้เวลานานกว่าจะจับงานได้"],
      ["Alex", "That's a valid point. So what's the answer?", "มีเหตุผล แล้วทางออกคืออะไร"],
      ["you", "In a nutshell, a mix of both. It depends on the team.", "โดยสรุปคือผสมทั้งสองแบบ ขึ้นอยู่กับทีม"]
    ]}
  ]
}
};
