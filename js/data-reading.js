/* Speakeasy: บทอ่านตามระดับ พร้อมคำถามวัดความเข้าใจ
   ans คือลำดับตัวเลือกที่ถูก (เริ่มที่ 0) why คือคำอธิบายภาษาไทย */
window.READING = [
  {
    id: 'r-a1-nok', lvl: 'A1', title: 'นกกับวันธรรมดา', en: 'Nok\'s Day',
    text: [
      'Nok is twenty-five years old. She lives in Bangkok with her sister. She is a nurse.',
      'Nok gets up at six o\'clock every day. She has rice and eggs for breakfast. Then she goes to work by bus. The hospital is not far from her home.',
      'Nok works from eight to five. After work, she sometimes goes to the market. In the evening, she cooks dinner and watches TV. She goes to bed at ten.'
    ],
    gloss: [['nurse', 'พยาบาล'], ['gets up', 'ตื่นนอน'], ['breakfast', 'อาหารเช้า'], ['far', 'ไกล'], ['sometimes', 'บางครั้ง'], ['market', 'ตลาด']],
    qs: [
      { q: 'Nok อาศัยอยู่กับใคร', opts: ['พ่อแม่', 'พี่สาวหรือน้องสาว', 'เพื่อน', 'อยู่คนเดียว'], ans: 1, why: 'She lives in Bangkok with her sister.' },
      { q: 'Nok ไปทำงานอย่างไร', opts: ['เดินไป', 'นั่งรถไฟ', 'นั่งรถเมล์', 'ขับรถ'], ans: 2, why: 'She goes to work by bus.' },
      { q: 'Nok ทำงานกี่โมงถึงกี่โมง', opts: ['หกโมงถึงบ่ายสาม', 'แปดโมงถึงห้าโมงเย็น', 'เก้าโมงถึงหกโมงเย็น', 'สิบโมงถึงสี่ทุ่ม'], ans: 1, why: 'Nok works from eight to five.' },
      { q: 'ข้อไหนจริง', opts: ['Nok ไปตลาดทุกวัน', 'โรงพยาบาลอยู่ไกลบ้าน', 'Nok เข้านอนตอนสี่ทุ่ม', 'Nok เป็นครู'], ans: 2, why: 'She goes to bed at ten. ส่วนตลาดไปแค่ sometimes (บางครั้ง)' }
    ]
  },
  {
    id: 'r-a1-shop', lvl: 'A1', title: 'ร้านกาแฟเล็ก ๆ', en: 'A Small Café',
    text: [
      'There is a small café next to my office. It opens at seven in the morning. The café has six tables and a big window.',
      'I go there every Monday and Friday. I usually have a black coffee and a banana cake. The coffee is fifty baht and the cake is forty baht.',
      'The owner is a friendly man. His name is Tom. He can speak Thai and English. I like this café because it is quiet and cheap.'
    ],
    gloss: [['next to', 'ข้าง ๆ'], ['opens', 'เปิด'], ['usually', 'มักจะ'], ['owner', 'เจ้าของ'], ['friendly', 'เป็นมิตร'], ['quiet', 'เงียบ']],
    qs: [
      { q: 'ร้านกาแฟอยู่ที่ไหน', opts: ['ข้างออฟฟิศ', 'ตรงข้ามตลาด', 'ในห้าง', 'ใกล้โรงเรียน'], ans: 0, why: 'There is a small café next to my office.' },
      { q: 'ผู้เขียนไปร้านนี้วันไหน', opts: ['ทุกวัน', 'วันจันทร์กับวันศุกร์', 'วันเสาร์กับวันอาทิตย์', 'วันพุธ'], ans: 1, why: 'I go there every Monday and Friday.' },
      { q: 'กาแฟกับเค้กรวมกันราคาเท่าไหร่', opts: ['สี่สิบบาท', 'ห้าสิบบาท', 'เก้าสิบบาท', 'หนึ่งร้อยบาท'], ans: 2, why: 'กาแฟ 50 บาท + เค้ก 40 บาท = 90 บาท' },
      { q: 'ทำไมผู้เขียนชอบร้านนี้', opts: ['เพราะกว้าง', 'เพราะเงียบและราคาถูก', 'เพราะเปิดดึก', 'เพราะมีอาหารไทย'], ans: 1, why: 'I like this café because it is quiet and cheap.' }
    ]
  },
  {
    id: 'r-a2-trip', lvl: 'A2', title: 'เที่ยวเชียงใหม่', en: 'A Weekend in Chiang Mai',
    text: [
      'Last month, I went to Chiang Mai with two friends. We took an early flight on Saturday morning, and we arrived at nine o\'clock.',
      'The weather was cooler than in Bangkok. In the afternoon, we visited an old temple on the mountain. The view was beautiful, but there were a lot of tourists.',
      'In the evening, we walked around the night market. I bought a bag for my mother and we ate khao soi. It was the best food of the trip.',
      'On Sunday, it rained all day, so we stayed in a café and played cards. We flew home in the evening, tired but happy.'
    ],
    gloss: [['flight', 'เที่ยวบิน'], ['arrived', 'มาถึง'], ['cooler', 'เย็นกว่า'], ['view', 'วิว'], ['tourists', 'นักท่องเที่ยว'], ['stayed', 'อยู่ / พัก']],
    qs: [
      { q: 'ผู้เขียนเดินทางไปเชียงใหม่อย่างไร', opts: ['นั่งรถไฟ', 'นั่งเครื่องบิน', 'นั่งรถทัวร์', 'ขับรถไปเอง'], ans: 1, why: 'We took an early flight on Saturday morning.' },
      { q: 'อากาศที่เชียงใหม่เป็นอย่างไรเมื่อเทียบกับกรุงเทพ', opts: ['ร้อนกว่า', 'เย็นกว่า', 'เหมือนกัน', 'ชื้นกว่า'], ans: 1, why: 'The weather was cooler than in Bangkok.' },
      { q: 'ผู้เขียนซื้ออะไรให้แม่', opts: ['เสื้อ', 'กระเป๋า', 'ข้าวซอย', 'ไพ่'], ans: 1, why: 'I bought a bag for my mother.' },
      { q: 'ทำไมวันอาทิตย์พวกเขาอยู่ในร้านกาแฟ', opts: ['เพราะเหนื่อย', 'เพราะฝนตกทั้งวัน', 'เพราะวัดปิด', 'เพราะรอเครื่องบิน'], ans: 1, why: 'It rained all day, so we stayed in a café. คำว่า so บอกผลของเหตุ' }
    ]
  },
  {
    id: 'r-a2-email', lvl: 'A2', title: 'อีเมลถึงเพื่อน', en: 'An Email to a Friend',
    text: [
      'Hi Mike,',
      'Thanks for your email! I\'m sorry I didn\'t reply earlier. I was very busy last week because I started a new job. I\'m working at a hotel now, at the front desk. The work is interesting, and my colleagues are really nice.',
      'Are you free next Saturday? There\'s a music festival in the park near my house. The tickets are cheap, and my favorite band is playing at eight. Why don\'t we meet at the station at six and have dinner first?',
      'Let me know! Best wishes, Ploy'
    ],
    gloss: [['reply', 'ตอบกลับ'], ['front desk', 'แผนกต้อนรับ'], ['colleagues', 'เพื่อนร่วมงาน'], ['festival', 'เทศกาล'], ['band', 'วงดนตรี'], ['let me know', 'บอกฉันด้วยนะ']],
    qs: [
      { q: 'ทำไม Ploy ตอบอีเมลช้า', opts: ['เพราะไม่สบาย', 'เพราะไปเที่ยว', 'เพราะเริ่มงานใหม่และยุ่งมาก', 'เพราะลืม'], ans: 2, why: 'I was very busy last week because I started a new job.' },
      { q: 'Ploy ทำงานที่ไหน', opts: ['ร้านอาหาร', 'โรงแรม', 'สวนสาธารณะ', 'สถานีรถไฟ'], ans: 1, why: 'I\'m working at a hotel now, at the front desk.' },
      { q: 'Ploy ชวน Mike ไปทำอะไร', opts: ['ดูหนัง', 'ไปเทศกาลดนตรี', 'ไปสัมภาษณ์งาน', 'ไปเที่ยวทะเล'], ans: 1, why: 'There\'s a music festival in the park.' },
      { q: 'Ploy อยากเจอ Mike กี่โมง', opts: ['หกโมงเย็น', 'หนึ่งทุ่ม', 'สองทุ่ม', 'เที่ยง'], ans: 0, why: 'Why don\'t we meet at the station at six ... ส่วนวงดนตรีเล่นตอนสองทุ่ม (eight)' }
    ]
  },
  {
    id: 'r-b1-remote', lvl: 'B1', title: 'ทำงานจากบ้าน', en: 'Working from Home',
    text: [
      'Since 2020, millions of people have started working from home. For many, it has been a positive change. They don\'t have to spend hours in traffic, and they can organize their day more freely.',
      'However, working from home is not perfect. Some people feel lonely because they rarely see their colleagues. Others find it hard to stop working in the evening, because their office is also their living room.',
      'Experts suggest a few simple habits. Start and finish at the same time every day. Take short breaks and go outside if possible. And if you can, keep your desk in a different room from your bed.',
      'Many companies now offer a mix: two or three days in the office and the rest at home. For most workers, this seems to be the best of both worlds.'
    ],
    gloss: [['positive', 'ในแง่ดี'], ['organize', 'จัดการ / จัดระเบียบ'], ['rarely', 'แทบจะไม่'], ['experts', 'ผู้เชี่ยวชาญ'], ['habits', 'นิสัย / กิจวัตร'], ['the best of both worlds', 'ได้ประโยชน์ทั้งสองทาง']],
    qs: [
      { q: 'ข้อดีของการทำงานจากบ้านที่บทอ่านพูดถึงคืออะไร', opts: ['ได้เงินเดือนมากขึ้น', 'ไม่ต้องเสียเวลาเดินทางในรถติด', 'ได้เจอเพื่อนร่วมงานบ่อยขึ้น', 'ทำงานน้อยลง'], ans: 1, why: 'They don\'t have to spend hours in traffic.' },
      { q: 'ทำไมบางคนเลิกงานตอนเย็นได้ยาก', opts: ['เพราะหัวหน้าโทรมา', 'เพราะที่ทำงานกับห้องนั่งเล่นเป็นที่เดียวกัน', 'เพราะมีงานเยอะ', 'เพราะเหงา'], ans: 1, why: 'their office is also their living room' },
      { q: 'ข้อใดไม่ใช่คำแนะนำของผู้เชี่ยวชาญ', opts: ['เริ่มและเลิกงานเวลาเดิมทุกวัน', 'พักสั้น ๆ และออกไปข้างนอก', 'ทำงานบนเตียงให้สบาย', 'แยกโต๊ะทำงานกับห้องนอน'], ans: 2, why: 'บทอ่านแนะนำให้แยกโต๊ะทำงานออกจากห้องนอน ไม่ใช่ทำงานบนเตียง' },
      { q: 'คำว่า "a mix" ในย่อหน้าสุดท้ายหมายถึงอะไร', opts: ['เข้าออฟฟิศบางวัน ทำที่บ้านบางวัน', 'ทำงานสองบริษัท', 'ทำงานกลางวันและกลางคืน', 'ทำงานคนเดียว'], ans: 0, why: 'two or three days in the office and the rest at home' }
    ]
  },
  {
    id: 'r-b1-sleep', lvl: 'B1', title: 'นอนให้พอ', en: 'Why Sleep Matters',
    text: [
      'Most adults need seven to nine hours of sleep a night, but surveys show that many of us get less than six. We often think that sleeping less gives us more time, but the opposite may be true.',
      'When we don\'t sleep enough, our brain works more slowly. We forget things, make more mistakes and find it harder to control our emotions. Over time, a lack of sleep can also affect our heart and our weight.',
      'One common problem is screens. The light from phones tells the brain that it is still daytime. Doctors recommend putting your phone away at least thirty minutes before bed.',
      'Good sleep is not a luxury. It is one of the easiest ways to improve your health, your mood and even your English!'
    ],
    gloss: [['surveys', 'ผลสำรวจ'], ['opposite', 'ตรงกันข้าม'], ['emotions', 'อารมณ์'], ['a lack of', 'การขาด'], ['recommend', 'แนะนำ'], ['luxury', 'ของฟุ่มเฟือย']],
    qs: [
      { q: 'ผู้ใหญ่ส่วนใหญ่ต้องนอนวันละกี่ชั่วโมง', opts: ['ต่ำกว่าหก', 'หกถึงเจ็ด', 'เจ็ดถึงเก้า', 'สิบขึ้นไป'], ans: 2, why: 'Most adults need seven to nine hours of sleep a night.' },
      { q: 'ข้อใดไม่ใช่ผลของการนอนไม่พอตามบทอ่าน', opts: ['ขี้ลืม', 'ทำผิดพลาดมากขึ้น', 'ควบคุมอารมณ์ยาก', 'เก่งภาษามากขึ้น'], ans: 3, why: 'บทอ่านบอกว่านอนพอทำให้ภาษาดีขึ้น ไม่ใช่นอนไม่พอ' },
      { q: 'ทำไมแสงจากโทรศัพท์จึงเป็นปัญหา', opts: ['ทำให้ปวดตา', 'ทำให้สมองคิดว่ายังเป็นกลางวัน', 'ทำให้หิว', 'ทำให้แบตหมด'], ans: 1, why: 'The light from phones tells the brain that it is still daytime.' },
      { q: '"the opposite may be true" ในย่อหน้าแรกหมายความว่าอย่างไร', opts: ['การนอนน้อยอาจทำให้เสียเวลามากกว่า', 'การนอนน้อยดีต่อสุขภาพ', 'คนส่วนใหญ่นอนมากเกินไป', 'ผลสำรวจไม่ถูกต้อง'], ans: 0, why: 'เราคิดว่านอนน้อยแล้วได้เวลาเพิ่ม แต่ความจริงอาจตรงกันข้าม คือทำงานช้าลงและพลาดมากขึ้น' }
    ]
  },
  {
    id: 'r-b2-plastic', lvl: 'B2', title: 'พลาสติกในทะเล', en: 'The Plastic Problem',
    text: [
      'Every year, an estimated eight million tonnes of plastic end up in the world\'s oceans. Much of it breaks down into tiny pieces called microplastics, which are eaten by fish and eventually by the people who eat those fish.',
      'Governments have responded in different ways. Some have banned single-use plastic bags, while others have introduced a small charge for each bag. The results are encouraging: in several countries, the use of plastic bags fell by more than eighty percent within a year.',
      'Critics argue, however, that bags are only a small part of the problem. Fishing nets, bottles and food packaging make up a far larger share of ocean waste. Moreover, recycling rates remain low, partly because many types of plastic are difficult or expensive to recycle.',
      'Most experts agree that real progress will require action at every level: companies designing less packaging, governments enforcing stricter rules, and consumers changing their habits.'
    ],
    gloss: [['estimated', 'โดยประมาณ'], ['eventually', 'ในที่สุด'], ['banned', 'สั่งห้าม'], ['encouraging', 'น่าพอใจ / ให้กำลังใจ'], ['share', 'สัดส่วน'], ['enforcing', 'บังคับใช้']],
    qs: [
      { q: 'microplastics ส่งผลต่อคนได้อย่างไรตามบทอ่าน', opts: ['ผ่านน้ำดื่ม', 'ผ่านการกินปลาที่กินพลาสติกเข้าไป', 'ผ่านอากาศ', 'บทอ่านไม่ได้บอก'], ans: 1, why: 'eaten by fish and eventually by the people who eat those fish' },
      { q: 'ผลของการห้ามหรือเก็บเงินค่าถุงพลาสติกเป็นอย่างไร', opts: ['ไม่ได้ผลเลย', 'การใช้ถุงลดลงมากกว่า 80% ในบางประเทศ', 'คนใช้ถุงมากขึ้น', 'ทุกประเทศเลิกใช้ถุงหมดแล้ว'], ans: 1, why: 'the use of plastic bags fell by more than eighty percent within a year' },
      { q: 'ฝ่ายวิจารณ์ (critics) มีความเห็นว่าอย่างไร', opts: ['ควรห้ามถุงพลาสติกให้เร็วขึ้น', 'ถุงเป็นแค่ส่วนเล็กของปัญหา', 'การรีไซเคิลแก้ปัญหาได้หมด', 'ปัญหาพลาสติกไม่มีอยู่จริง'], ans: 1, why: 'Critics argue that bags are only a small part of the problem.' },
      { q: 'ทำไมอัตราการรีไซเคิลยังต่ำ', opts: ['เพราะคนไม่สนใจ', 'เพราะพลาสติกหลายชนิดรีไซเคิลยากหรือแพง', 'เพราะรัฐบาลห้าม', 'เพราะไม่มีโรงงาน'], ans: 1, why: 'many types of plastic are difficult or expensive to recycle' }
    ]
  },
  {
    id: 'r-b2-ai', lvl: 'B2', title: 'ปัญญาประดิษฐ์กับงาน', en: 'Will AI Take Our Jobs?',
    text: [
      'Few topics generate as much debate as the impact of artificial intelligence on employment. Optimists point out that new technology has always created more jobs than it destroyed. The arrival of computers, for instance, eliminated many typing jobs but created entire industries that did not exist before.',
      'Pessimists, on the other hand, believe this time is different. Unlike earlier machines, AI can perform tasks that require judgment, such as writing reports or analyzing medical images. If machines can do these tasks faster and more cheaply, they ask, what will be left for humans?',
      'The truth probably lies somewhere in between. Rather than replacing whole professions, AI is more likely to change what people do within them. A lawyer may spend less time searching documents and more time advising clients.',
      'What seems clear is that the ability to keep learning will matter more than ever. Workers who adapt quickly are likely to benefit; those who do not may struggle.'
    ],
    gloss: [['generate', 'ก่อให้เกิด'], ['eliminated', 'กำจัด / ทำให้หายไป'], ['judgment', 'การใช้วิจารณญาณ'], ['professions', 'อาชีพ'], ['adapt', 'ปรับตัว'], ['struggle', 'ลำบาก']],
    qs: [
      { q: 'ฝ่ายมองโลกในแง่ดี (optimists) ใช้อะไรเป็นตัวอย่าง', opts: ['หุ่นยนต์ในโรงงาน', 'คอมพิวเตอร์ที่ทำให้งานพิมพ์ดีดหายไปแต่เกิดอุตสาหกรรมใหม่', 'อินเทอร์เน็ต', 'การแพทย์'], ans: 1, why: 'The arrival of computers eliminated many typing jobs but created entire industries.' },
      { q: 'ฝ่ายมองโลกในแง่ร้ายคิดว่า AI ต่างจากเครื่องจักรในอดีตอย่างไร', opts: ['ราคาแพงกว่า', 'ทำงานที่ต้องใช้วิจารณญาณได้', 'ใช้ไฟฟ้าน้อยกว่า', 'ทำงานได้ช้ากว่า'], ans: 1, why: 'AI can perform tasks that require judgment.' },
      { q: 'ผู้เขียนคิดว่าอะไรน่าจะเกิดขึ้นมากที่สุด', opts: ['AI จะแทนที่ทุกอาชีพ', 'AI จะไม่เปลี่ยนแปลงอะไรเลย', 'AI จะเปลี่ยนลักษณะงานภายในแต่ละอาชีพ', 'ทนายจะตกงานทั้งหมด'], ans: 2, why: 'AI is more likely to change what people do within them.' },
      { q: 'ตามบทสรุป ทักษะใดสำคัญที่สุด', opts: ['การเขียนโปรแกรม', 'ความสามารถในการเรียนรู้ต่อเนื่อง', 'การทำงานเร็ว', 'การใช้คอมพิวเตอร์'], ans: 1, why: 'the ability to keep learning will matter more than ever' }
    ]
  },
  {
    id: 'r-c1-attention', lvl: 'C1', title: 'เศรษฐกิจแห่งความสนใจ', en: 'The Attention Economy',
    text: [
      'In an age of information abundance, the scarce resource is no longer information itself but human attention. This insight, first articulated decades ago, has become the organizing principle of much of the digital economy.',
      'Platforms that offer their services for free are, in effect, selling their users\' attention to advertisers. Consequently, their designs are optimized not for the wellbeing of users but for engagement: endless feeds, notifications timed to draw us back, and recommendations tuned to provoke a reaction.',
      'Defenders of these platforms contend that users are not passive victims; people choose what they watch and can switch off whenever they like. Critics counter that this argument underestimates how deliberately these products exploit well-documented psychological tendencies.',
      'Whichever view one takes, it is hard to dispute that attention, once spent, cannot be recovered. Treating it as something worth protecting may be one of the more consequential habits a person can cultivate.'
    ],
    gloss: [['abundance', 'ความอุดมสมบูรณ์ / มีมากมาย'], ['scarce', 'ขาดแคลน'], ['articulated', 'แสดงออกเป็นคำพูดอย่างชัดเจน'], ['engagement', 'การมีส่วนร่วม (การใช้งาน)'], ['contend', 'ยืนยันโต้แย้ง'], ['consequential', 'มีผลสำคัญ']],
    qs: [
      { q: 'ตามบทอ่าน ทรัพยากรที่ขาดแคลนในยุคนี้คืออะไร', opts: ['ข้อมูล', 'ความสนใจของมนุษย์', 'เงินโฆษณา', 'เทคโนโลยี'], ans: 1, why: 'the scarce resource is no longer information itself but human attention' },
      { q: 'ผู้เขียนบอกว่าแพลตฟอร์มฟรีหารายได้จากอะไร', opts: ['ค่าสมาชิก', 'การขายความสนใจของผู้ใช้ให้ผู้ลงโฆษณา', 'การขายข้อมูลส่วนตัวโดยตรง', 'เงินบริจาค'], ans: 1, why: 'selling their users\' attention to advertisers' },
      { q: 'ฝ่ายปกป้องแพลตฟอร์ม (defenders) โต้แย้งว่าอย่างไร', opts: ['ผู้ใช้เลือกเองและปิดได้ตลอด', 'แพลตฟอร์มดีต่อสุขภาพจิต', 'โฆษณาไม่มีผลต่อผู้ใช้', 'ควรเก็บเงินผู้ใช้'], ans: 0, why: 'people choose what they watch and can switch off whenever they like' },
      { q: 'ข้อสรุปของผู้เขียนใกล้เคียงข้อใดที่สุด', opts: ['ควรเลิกใช้อินเทอร์เน็ต', 'ความสนใจใช้แล้วเอาคืนไม่ได้ จึงควรปกป้องไว้', 'แพลตฟอร์มควรถูกปิด', 'ผู้ใช้ไม่มีทางเลือก'], ans: 1, why: 'attention, once spent, cannot be recovered. Treating it as something worth protecting...' }
    ]
  },
  {
    id: 'r-c1-language', lvl: 'C1', title: 'ภาษาที่สองกับสมอง', en: 'Learning a Language as an Adult',
    text: [
      'It is widely assumed that children learn languages more easily than adults. While there is some truth in this, the picture is more nuanced than the popular view suggests.',
      'Children do appear to have an advantage when it comes to pronunciation: those who start young are far more likely to sound like native speakers. Adults, however, often make faster progress in the early stages, largely because they can draw on what they already know about grammar and learning strategies.',
      'What adults typically lack is not ability but exposure. A child absorbs thousands of hours of the language through play and everyday life, whereas an adult learner may get only a few hours a week in a classroom. Research suggests that sheer quantity of meaningful input, rather than age alone, accounts for much of the difference.',
      'The practical implication is encouraging. Adults who surround themselves with the language, listening, reading and above all speaking every day, can reach a high level of fluency, even if a trace of an accent remains.'
    ],
    gloss: [['widely assumed', 'เชื่อกันอย่างกว้างขวาง'], ['nuanced', 'มีรายละเอียดซับซ้อน'], ['draw on', 'นำมาใช้'], ['exposure', 'การได้สัมผัส (ภาษา)'], ['sheer quantity', 'ปริมาณล้วน ๆ'], ['a trace of', 'ร่องรอยเล็กน้อย']],
    qs: [
      { q: 'เด็กได้เปรียบผู้ใหญ่ชัดเจนในเรื่องใด', opts: ['ไวยากรณ์', 'การออกเสียง', 'คำศัพท์', 'การอ่าน'], ans: 1, why: 'Children do appear to have an advantage when it comes to pronunciation.' },
      { q: 'ทำไมผู้ใหญ่มักก้าวหน้าเร็วกว่าในช่วงแรก', opts: ['เพราะมีเวลามากกว่า', 'เพราะใช้ความรู้เดิมเรื่องไวยากรณ์และวิธีเรียนได้', 'เพราะฟังเก่งกว่า', 'เพราะไม่อาย'], ans: 1, why: 'they can draw on what they already know about grammar and learning strategies' },
      { q: 'ตามงานวิจัย อะไรอธิบายความแตกต่างได้มากที่สุด', opts: ['อายุเพียงอย่างเดียว', 'ปริมาณการได้รับภาษาที่มีความหมาย', 'ความฉลาด', 'จำนวนครู'], ans: 1, why: 'sheer quantity of meaningful input, rather than age alone, accounts for much of the difference' },
      { q: 'ข้อสรุปของบทอ่านคืออะไร', opts: ['ผู้ใหญ่ไม่มีทางพูดคล่อง', 'ผู้ใหญ่พูดได้คล่องในระดับสูงถ้าได้ใช้ภาษาทุกวัน แม้ยังมีสำเนียงอยู่บ้าง', 'ต้องเริ่มเรียนก่อนอายุสิบขวบ', 'สำเนียงสำคัญที่สุด'], ans: 1, why: 'can reach a high level of fluency, even if a trace of an accent remains' }
    ]
  }
];

/* แบบทดสอบวัดระดับ: ขั้นละ 4 ข้อ ตั้งแต่ขั้น 1 (เริ่มจากศูนย์) ถึงขั้น 7 */
window.PLACEMENT = [
  [['Hello, my ___ is Nok.', ['name', 'age', 'from', 'like'], 0], ['She ___ a teacher.', ['am', 'is', 'are', 'be'], 1], ['I have two ___.', ['brother', 'brothers', 'brother\'s', 'a brother'], 1], ['___ is your phone? It\'s on the table.', ['What', 'Who', 'Where', 'When'], 2]],
  [['He ___ to work every day.', ['go', 'goes', 'going', 'is go'], 1], ['I ___ like spicy food.', ['am not', 'doesn\'t', 'don\'t', 'not'], 2], ['There ___ a bank near my house.', ['are', 'is', 'have', 'has'], 1], ['___ I borrow your pen?', ['Can', 'Do', 'Am', 'Does'], 0]],
  [['I ___ to the cinema last night.', ['go', 'went', 'gone', 'have go'], 1], ['She is ___ than her sister.', ['tall', 'taller', 'more tall', 'tallest'], 1], ['They ___ TV when I called.', ['watched', 'were watching', 'are watching', 'watch'], 1], ['Look! It ___.', ['rains', 'is raining', 'rained', 'rain'], 1]],
  [['Have you ever ___ sushi?', ['eat', 'ate', 'eaten', 'eating'], 2], ['I\'ve lived here ___ 2019.', ['for', 'since', 'from', 'ago'], 1], ['You ___ wear a seatbelt. It\'s the law.', ['must', 'can', 'might', 'would'], 0], ['I\'m going ___ my parents next week.', ['visit', 'to visit', 'visiting', 'visited'], 1]],
  [['If I ___ more money, I would buy a car.', ['have', 'had', 'will have', 'would have'], 1], ['The bridge ___ in 1932.', ['built', 'was built', 'is building', 'has build'], 1], ['She told me that she ___ tired.', ['is', 'was', 'will be', 'be'], 1], ['___ it was raining, we went out.', ['Because', 'Although', 'Despite', 'So'], 1]],
  [['I ___ have told you earlier. Sorry.', ['should', 'must', 'can', 'will'], 0], ['Would you mind ___ the door?', ['to close', 'close', 'closing', 'closed'], 2], ['Not only ___ late, but he also forgot the report.', ['he was', 'was he', 'he is', 'did he'], 1], ['The exam was a piece of ___.', ['bread', 'cake', 'pie', 'paper'], 1]],
  [['I\'d rather you ___ smoke here.', ['don\'t', 'didn\'t', 'won\'t', 'not'], 1], ['Had I known, I ___ have come.', ['will', 'would', 'shall', 'can'], 1], ['It\'s high time we ___ a decision.', ['make', 'made', 'will make', 'making'], 1], ['Hardly ___ arrived when it started to rain.', ['we had', 'had we', 'we have', 'did we'], 1]]
];
