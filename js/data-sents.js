/* Fluent: ประโยคตัวอย่างเพิ่มเติม บทละ 5 ประโยค และบทพื้นฐานใหม่ 4 บท
   MORE.sents[รหัสบท] ต่อท้ายประโยคเดิมของบทนั้น ทุกครั้งที่เรียนซ้ำ แบบฝึกจะสุ่มจากประโยคทั้งหมด */
(function () {
  var M = window.MORE = window.MORE || {};
  M.sents = {
    s0l1: [["Can you spell that, please?", "ช่วยสะกดหน่อยได้ไหม"], ["My email is nok at mail dot com.", "อีเมลของฉันคือ nok at mail dot com"], ["Is it G or J?", "ตัว G หรือ J"], ["It's V for Victor.", "มันคือตัว V แบบ Victor"], ["Double L, double E.", "L สองตัว E สองตัว"]],
    s0l2: [["Good morning, everyone.", "สวัสดีตอนเช้าทุกคน"], ["Hi, how are you? I'm fine, thanks.", "หวัดดี สบายดีไหม สบายดี ขอบคุณ"], ["Thank you very much.", "ขอบคุณมากครับ/ค่ะ"], ["Sorry, I'm late.", "ขอโทษที่มาสาย"], ["Goodbye. See you tomorrow.", "ลาก่อน เจอกันพรุ่งนี้"]],
    s0l3: [["I have two cats.", "ฉันมีแมวสองตัว"], ["The bus is number fifteen.", "รถเมล์สายสิบห้า"], ["There are twelve months in a year.", "หนึ่งปีมีสิบสองเดือน"], ["It's one hundred baht.", "ราคาหนึ่งร้อยบาท"], ["My room is number eight.", "ห้องของฉันเบอร์แปด"]],
    s0l4: [["I am a student.", "ฉันเป็นนักเรียน"], ["She is my friend.", "เธอเป็นเพื่อนของฉัน"], ["They are teachers.", "พวกเขาเป็นครู"], ["We are from Thailand.", "เรามาจากประเทศไทย"], ["He isn't a doctor. He's a teacher.", "เขาไม่ได้เป็นหมอ เขาเป็นครู"]],
    s0l5: [["This is my phone.", "นี่คือโทรศัพท์ของฉัน"], ["My bag is black.", "กระเป๋าของฉันสีดำ"], ["Is this your pen? Yes, it is.", "นี่ปากกาของคุณใช่ไหม ใช่"], ["I have a red book.", "ฉันมีหนังสือสีแดง"], ["That is a white car.", "นั่นคือรถสีขาว"]],
    s0l6: [["This is my mother.", "นี่คือแม่ของฉัน"], ["My father is a farmer.", "พ่อของฉันเป็นชาวนา"], ["I have one sister.", "ฉันมีพี่สาวหรือน้องสาวหนึ่งคน"], ["They have two children.", "พวกเขามีลูกสองคน"], ["My wife is a nurse.", "ภรรยาของผมเป็นพยาบาล"]],
    s0l7: [["What time is it?", "กี่โมงแล้ว"], ["Which one do you want?", "คุณอยากได้อันไหน"], ["How are you today?", "วันนี้เป็นอย่างไรบ้าง"], ["How many brothers do you have?", "คุณมีพี่น้องผู้ชายกี่คน"], ["Where is the toilet?", "ห้องน้ำอยู่ที่ไหน"]],
    s0l8: [["There are many people here.", "ที่นี่มีคนเยอะ"], ["Do you have any questions?", "มีคำถามไหม"], ["I need some water.", "ฉันต้องการน้ำหน่อย"], ["She has a lot of friends.", "เธอมีเพื่อนเยอะ"], ["There isn't much time.", "มีเวลาไม่มาก"]],
    s1l1: [["I get up at six every day.", "ฉันตื่นตอนหกโมงทุกวัน"], ["I always have breakfast at home.", "ฉันกินอาหารเช้าที่บ้านเสมอ"], ["He usually goes to work by train.", "เขามักนั่งรถไฟไปทำงาน"], ["We sometimes eat out on Friday.", "บางทีเราก็ไปกินข้าวนอกบ้านวันศุกร์"], ["I take a shower before bed.", "ฉันอาบน้ำก่อนนอน"]],
    s1l2: [["See you on Monday.", "เจอกันวันจันทร์"], ["It's half past nine.", "ตอนนี้เก้าโมงครึ่ง"], ["The shop is closed on Sunday.", "ร้านปิดวันอาทิตย์"], ["What are you doing this weekend?", "สุดสัปดาห์นี้คุณจะทำอะไร"], ["It's a quarter past two.", "ตอนนี้บ่ายสองโมงสิบห้า"]],
    s1l3: [["Can I see the menu, please?", "ขอดูเมนูหน่อยได้ไหม"], ["I'd like rice and chicken.", "ขอข้าวกับไก่"], ["A glass of water, please.", "ขอน้ำเปล่าหนึ่งแก้ว"], ["Not too spicy, please.", "ไม่เผ็ดมากนะ"], ["Are you ready to order?", "พร้อมสั่งหรือยังครับ/คะ"]],
    s1l4: [["How much is this shirt?", "เสื้อตัวนี้ราคาเท่าไหร่"], ["Can I try it on?", "ขอลองได้ไหม"], ["Do you have a bigger size?", "มีไซซ์ใหญ่กว่านี้ไหม"], ["Can I pay by card?", "จ่ายด้วยบัตรได้ไหม"], ["It's too expensive for me.", "มันแพงเกินไปสำหรับฉัน"]],
    s1l5: [["The bank is next to the market.", "ธนาคารอยู่ข้างตลาด"], ["Is there a park near here?", "แถวนี้มีสวนสาธารณะไหม"], ["The hospital is opposite the station.", "โรงพยาบาลอยู่ตรงข้ามสถานี"], ["There is a café between the bank and the hotel.", "มีร้านกาแฟอยู่ระหว่างธนาคารกับโรงแรม"], ["The station isn't far.", "สถานีไม่ไกล"]],
    s1l6: [["I like cooking Thai food.", "ฉันชอบทำอาหารไทย"], ["She loves music.", "เธอรักเสียงเพลง"], ["I can play the guitar.", "ฉันเล่นกีตาร์เป็น"], ["He hates getting up early.", "เขาเกลียดการตื่นเช้า"], ["Do you enjoy swimming?", "คุณชอบว่ายน้ำไหม"]],
    s1l7: [["It's very hot today.", "วันนี้ร้อนมาก"], ["Take an umbrella. It's rainy.", "เอาร่มไปด้วย ฝนตก"], ["It's cloudy but warm.", "อากาศครึ้มแต่อุ่น"], ["Bangkok is hot and humid.", "กรุงเทพร้อนและชื้น"], ["My favorite season is winter.", "ฤดูที่ฉันชอบที่สุดคือฤดูหนาว"]],
    s1l8: [["Could you help me, please?", "ช่วยฉันหน่อยได้ไหม"], ["Can I borrow your pen?", "ขอยืมปากกาหน่อยได้ไหม"], ["Of course. Here you are.", "ได้สิ นี่จ้ะ"], ["Could you repeat that, please?", "ช่วยพูดอีกครั้งได้ไหม"], ["Sure, no problem.", "ได้เลย ไม่มีปัญหา"]],
    s2l1: [["I went to the beach last weekend.", "สุดสัปดาห์ที่แล้วฉันไปทะเล"], ["We ate pizza last night.", "เมื่อคืนเรากินพิซซ่า"], ["She bought a new phone.", "เธอซื้อโทรศัพท์เครื่องใหม่"], ["I saw him two days ago.", "ฉันเห็นเขาเมื่อสองวันก่อน"], ["We visited my grandmother on Sunday.", "วันอาทิตย์เราไปเยี่ยมยาย"]],
    s2l2: [["My flight is at ten.", "เที่ยวบินของฉันตอนสิบโมง"], ["Can I see your passport, please?", "ขอดูหนังสือเดินทางหน่อยครับ/ค่ะ"], ["I booked a hotel near the beach.", "ฉันจองโรงแรมใกล้ชายหาดไว้"], ["The flight is delayed.", "เที่ยวบินล่าช้า"], ["Where do I check in?", "ฉันต้องเช็กอินที่ไหน"]],
    s2l3: [["Go straight and turn left.", "ตรงไปแล้วเลี้ยวซ้าย"], ["It's on the corner.", "มันอยู่ตรงหัวมุม"], ["Turn right at the traffic lights.", "เลี้ยวขวาที่ไฟแดง"], ["Is it far from here?", "ไกลจากที่นี่ไหม"], ["Excuse me, I'm lost.", "ขอโทษนะครับ/คะ ฉันหลงทาง"]],
    s2l4: [["I'm cooking dinner right now.", "ตอนนี้ฉันกำลังทำอาหารเย็นอยู่"], ["She's studying at the moment.", "ตอนนี้เธอกำลังเรียนหนังสืออยู่"], ["It's raining outside.", "ข้างนอกฝนกำลังตก"], ["Wait! I'm coming.", "รอเดี๋ยว กำลังไปแล้ว"], ["What are you looking for?", "คุณกำลังหาอะไรอยู่"]],
    s2l5: [["This bag is cheaper than that one.", "กระเป๋าใบนี้ถูกกว่าใบนั้น"], ["My brother is taller than me.", "พี่ชายของฉันสูงกว่าฉัน"], ["This is the best café in town.", "นี่คือร้านกาแฟที่ดีที่สุดในเมือง"], ["The train is as fast as the plane.", "รถไฟเร็วพอ ๆ กับเครื่องบิน"], ["Today is worse than yesterday.", "วันนี้แย่กว่าเมื่อวาน"]],
    s2l6: [["I have a headache.", "ฉันปวดหัว"], ["She has a fever and a cough.", "เธอมีไข้และไอ"], ["You should rest for two days.", "คุณควรพักสองวัน"], ["Take this medicine after meals.", "กินยานี้หลังอาหาร"], ["Where is the nearest pharmacy?", "ร้านขายยาที่ใกล้ที่สุดอยู่ที่ไหน"]],
    s2l7: [["I was sleeping when you called.", "ฉันกำลังนอนอยู่ตอนที่คุณโทรมา"], ["They were watching TV at that time.", "ตอนนั้นพวกเขากำลังดูทีวีอยู่"], ["What were you doing last night?", "เมื่อคืนคุณกำลังทำอะไรอยู่"], ["Suddenly, the lights went out.", "จู่ ๆ ไฟก็ดับ"], ["I fell asleep while I was reading.", "ฉันเผลอหลับไปขณะที่กำลังอ่านหนังสือ"]],
    s2l8: [["Let's go to the cinema tonight.", "คืนนี้ไปดูหนังกัน"], ["How about Thai food?", "อาหารไทยดีไหม"], ["Would you like to join us?", "อยากไปด้วยกันไหม"], ["Sounds good! See you then.", "ดีเลย แล้วเจอกัน"], ["Sorry, I can't. Maybe another time.", "ขอโทษนะ ไปไม่ได้ ไว้คราวหน้านะ"]],
    s3l1: [["I'm going to study English next year.", "ปีหน้าฉันจะเรียนภาษาอังกฤษ"], ["It will probably rain tomorrow.", "พรุ่งนี้ฝนน่าจะตก"], ["I hope to visit Japan someday.", "ฉันหวังว่าสักวันจะได้ไปญี่ปุ่น"], ["We haven't decided yet.", "เรายังไม่ได้ตัดสินใจเลย"], ["Maybe I'll stay at home.", "ฉันอาจจะอยู่บ้าน"]],
    s3l2: [["Have you ever been to Japan?", "คุณเคยไปญี่ปุ่นไหม"], ["I've just finished my homework.", "ฉันเพิ่งทำการบ้านเสร็จ"], ["She has already eaten.", "เธอกินข้าวแล้ว"], ["I've lived here for five years.", "ฉันอยู่ที่นี่มาห้าปีแล้ว"], ["Have you tried this before?", "คุณเคยลองนี่มาก่อนไหม"]],
    s3l3: [["I have a meeting at ten.", "ฉันมีประชุมตอนสิบโมง"], ["My boss is very kind.", "หัวหน้าของฉันใจดีมาก"], ["The deadline is next Friday.", "กำหนดส่งคือวันศุกร์หน้า"], ["I'm responsible for marketing.", "ฉันรับผิดชอบด้านการตลาด"], ["I have a job interview tomorrow.", "พรุ่งนี้ฉันมีสัมภาษณ์งาน"]],
    s3l4: [["In my opinion, it's a good idea.", "ในความคิดของฉัน นี่เป็นความคิดที่ดี"], ["I don't agree with you.", "ฉันไม่เห็นด้วยกับคุณ"], ["I'm not sure about that.", "ฉันไม่แน่ใจเรื่องนั้น"], ["Personally, I prefer tea.", "โดยส่วนตัวฉันชอบชามากกว่า"], ["That's a good point.", "เป็นประเด็นที่ดีนะ"]],
    s3l5: [["Can I speak to Mr. Lee, please?", "ขอสายคุณลีหน่อยครับ/ค่ะ"], ["Hold on, please.", "รอสักครู่นะ"], ["Could you call me back later?", "ช่วยโทรกลับมาทีหลังได้ไหม"], ["I'd like to confirm my appointment.", "ฉันอยากยืนยันนัดหมาย"], ["Can we reschedule to Monday?", "เราเลื่อนนัดไปวันจันทร์ได้ไหม"]],
    s3l6: [["Please turn off the light.", "ช่วยปิดไฟหน่อย"], ["I'll pick you up at seven.", "ฉันจะไปรับคุณตอนหนึ่งทุ่ม"], ["Don't give up!", "อย่ายอมแพ้นะ"], ["She looks after her mother.", "เธอดูแลแม่ของเธอ"], ["When are you coming back?", "คุณจะกลับมาเมื่อไหร่"]],
    s3l7: [["You must wear a seatbelt.", "คุณต้องคาดเข็มขัดนิรภัย"], ["You don't have to come early.", "คุณไม่ต้องมาเช้าก็ได้"], ["You mustn't smoke here.", "ห้ามสูบบุหรี่ที่นี่"], ["You should drink more water.", "คุณควรดื่มน้ำให้มากขึ้น"], ["I need to finish this today.", "ฉันต้องทำสิ่งนี้ให้เสร็จวันนี้"]],
    s3l8: [["How's it going? Pretty good, thanks.", "เป็นยังไงบ้าง ก็ดีนะ ขอบคุณ"], ["What have you been doing lately?", "ช่วงนี้ทำอะไรอยู่บ้าง"], ["Same here.", "ฉันก็เหมือนกัน"], ["We should catch up soon.", "เราควรนัดเจอกันคุยเร็ว ๆ นี้"], ["Nice chatting with you. Take care!", "ดีใจที่ได้คุยนะ ดูแลตัวเองด้วย"]],
    s4l1: [["If it rains, we'll stay home.", "ถ้าฝนตก เราจะอยู่บ้าน"], ["If I had more time, I would travel more.", "ถ้าฉันมีเวลามากกว่านี้ ฉันจะเที่ยวให้มากขึ้น"], ["Take an umbrella in case it rains.", "เอาร่มไปเผื่อฝนตก"], ["You can go out as long as you're home by ten.", "คุณออกไปได้ ตราบใดที่กลับถึงบ้านก่อนสี่ทุ่ม"], ["Imagine you won the lottery.", "ลองนึกภาพว่าคุณถูกลอตเตอรี่"]],
    s4l2: [["This bag is made in Italy.", "กระเป๋าใบนี้ผลิตในอิตาลี"], ["The temple was built in 1782.", "วัดนี้สร้างขึ้นในปี 1782"], ["My bike has been stolen.", "จักรยานของฉันถูกขโมยไปแล้ว"], ["These cakes are made by hand.", "เค้กพวกนี้ทำด้วยมือ"], ["Thai is spoken in Thailand.", "ในประเทศไทยพูดภาษาไทย"]],
    s4l3: [["She said she was tired.", "เธอบอกว่าเธอเหนื่อย"], ["He told me to wait.", "เขาบอกให้ฉันรอ"], ["They asked if I was free.", "พวกเขาถามว่าฉันว่างไหม"], ["He promised he would call.", "เขาสัญญาว่าจะโทรมา"], ["She explained why she was late.", "เธออธิบายว่าทำไมถึงมาสาย"]],
    s4l4: [["Let's look at the agenda.", "มาดูวาระการประชุมกัน"], ["Could you clarify that point?", "ช่วยอธิบายประเด็นนั้นให้ชัดขึ้นได้ไหม"], ["Let's move on to the budget.", "ไปที่เรื่องงบประมาณกันต่อ"], ["To summarize, we need more time.", "สรุปคือเราต้องการเวลาเพิ่ม"], ["I'll send the action points by email.", "ฉันจะส่งรายการสิ่งที่ต้องทำทางอีเมล"]],
    s4l5: [["Although it was late, we kept working.", "แม้จะดึกแล้ว เราก็ยังทำงานต่อ"], ["Despite the rain, the concert continued.", "แม้ฝนจะตก คอนเสิร์ตก็ยังดำเนินต่อไป"], ["The hotel was cheap. However, it was dirty.", "โรงแรมราคาถูก แต่สกปรก"], ["He studied hard. As a result, he passed.", "เขาเรียนหนัก ผลก็คือเขาสอบผ่าน"], ["I like coffee, whereas my wife prefers tea.", "ฉันชอบกาแฟ ในขณะที่ภรรยาชอบชามากกว่า"]],
    s4l6: [["According to the news, prices will rise.", "ตามข่าว ราคาสินค้าจะสูงขึ้น"], ["The number of tourists has increased.", "จำนวนนักท่องเที่ยวเพิ่มขึ้น"], ["Pollution affects our health.", "มลพิษส่งผลต่อสุขภาพของเรา"], ["The government announced a new plan.", "รัฐบาลประกาศแผนใหม่"], ["A recent survey shows that people sleep less.", "ผลสำรวจล่าสุดชี้ว่าผู้คนนอนน้อยลง"]],
    s4l7: [["The man who lives next door is a pilot.", "ผู้ชายที่อยู่บ้านข้าง ๆ เป็นนักบิน"], ["This is the phone that I bought.", "นี่คือโทรศัพท์ที่ฉันซื้อมา"], ["That's the restaurant where we met.", "นั่นคือร้านอาหารที่เราเจอกัน"], ["I have a friend whose father is a chef.", "ฉันมีเพื่อนที่พ่อเป็นเชฟ"], ["The laptop which was broken is fixed now.", "แล็ปท็อปที่เคยเสียตอนนี้ซ่อมแล้ว"]],
    s4l8: [["I'd like to make a complaint.", "ฉันขอร้องเรียนหน่อย"], ["This phone is not working.", "โทรศัพท์เครื่องนี้ใช้งานไม่ได้"], ["The box was damaged when it arrived.", "กล่องเสียหายตอนที่มาถึง"], ["Could I have a refund, please?", "ขอคืนเงินได้ไหม"], ["I'd like to speak to the manager.", "ฉันขอพูดกับผู้จัดการ"]],
    s5l1: [["The test was a piece of cake.", "การทดสอบง่ายมาก"], ["I'm feeling a bit under the weather.", "ฉันรู้สึกไม่ค่อยสบาย"], ["Let's call it a day.", "วันนี้พอแค่นี้กันเถอะ"], ["I only see him once in a blue moon.", "นาน ๆ ทีฉันถึงจะได้เจอเขา"], ["You'll get the hang of it soon.", "อีกไม่นานคุณก็จะคล่องเอง"]],
    s5l2: [["I was wondering if you could help me.", "ไม่ทราบว่าคุณพอจะช่วยฉันได้ไหม"], ["Would you mind closing the window?", "รบกวนปิดหน้าต่างให้หน่อยได้ไหม"], ["I'm afraid that's not possible.", "เกรงว่าจะเป็นไปไม่ได้"], ["It seems there's a misunderstanding.", "ดูเหมือนจะมีความเข้าใจผิดกัน"], ["The price is slightly higher than we expected.", "ราคาสูงกว่าที่เราคาดไว้เล็กน้อย"]],
    s5l3: [["Let me give you a brief overview.", "ขอให้ภาพรวมสั้น ๆ ก่อนนะครับ/คะ"], ["To begin with, let's look at the numbers.", "เริ่มจากมาดูตัวเลขกันก่อน"], ["As you can see, sales went up.", "อย่างที่เห็น ยอดขายเพิ่มขึ้น"], ["I'd like to highlight three points.", "ฉันอยากเน้นสามประเด็น"], ["In conclusion, the plan is working.", "โดยสรุป แผนนี้ได้ผล"]],
    s5l4: [["We're willing to be flexible on the price.", "เรายินดียืดหยุ่นเรื่องราคา"], ["That's our final offer.", "นั่นคือข้อเสนอสุดท้ายของเรา"], ["Let's meet halfway.", "เจอกันครึ่งทางเถอะ"], ["The delivery date is non-negotiable.", "วันส่งของต่อรองไม่ได้"], ["Do we have a deal?", "เราตกลงกันได้ไหม"]],
    s5l5: [["By the way, did you see the email?", "ว่าแต่ เห็นอีเมลหรือยัง"], ["To be honest, I didn't like it.", "พูดตามตรง ฉันไม่ชอบเลย"], ["Anyway, let's get back to work.", "เอาเถอะ กลับไปทำงานกันต่อ"], ["It's expensive. That said, it's worth it.", "มันแพง แต่ถึงอย่างนั้นก็คุ้ม"], ["Speaking of which, how's your new job?", "พูดถึงเรื่องนี้ งานใหม่เป็นไงบ้าง"]],
    s5l6: [["What I need is a long holiday.", "สิ่งที่ฉันต้องการคือวันหยุดยาว ๆ"], ["The thing is, I don't have time.", "ปัญหาคือฉันไม่มีเวลา"], ["I do appreciate your help.", "ฉันซาบซึ้งในความช่วยเหลือของคุณจริง ๆ"], ["Not only is it cheap, but it's also good.", "ไม่ใช่แค่ราคาถูก แต่ยังดีด้วย"], ["Above all, be honest.", "ที่สำคัญที่สุดคือต้องซื่อสัตย์"]],
    s5l7: [["I should have left earlier.", "ฉันน่าจะออกมาเร็วกว่านี้"], ["You shouldn't have said that.", "คุณไม่น่าพูดแบบนั้นเลย"], ["She must have forgotten.", "เธอคงลืมไปแล้วแน่ ๆ"], ["They might have missed the bus.", "พวกเขาอาจจะตกรถเมล์"], ["I could have helped you.", "ฉันช่วยคุณได้นะ (แต่ไม่ได้ช่วย)"]],
    s5l8: [["I need to make a decision soon.", "ฉันต้องตัดสินใจเร็ว ๆ นี้"], ["Can you do me a favor?", "ช่วยอะไรฉันหน่อยได้ไหม"], ["Let me have a look.", "ขอดูหน่อย"], ["Please pay attention.", "กรุณาตั้งใจฟัง"], ["I always drink strong coffee.", "ฉันดื่มกาแฟเข้ม ๆ เสมอ"]],
    s6l1: [["I'm gonna be late.", "ฉันจะไปสายนะ"], ["Do you wanna come?", "อยากมาด้วยไหม"], ["I gotta go.", "ฉันต้องไปแล้ว"], ["Lemme see.", "เดี๋ยวขอดูก่อนนะ (พูดแบบกันเอง)"], ["I dunno what to do.", "ไม่รู้จะทำยังไงดี"]],
    s6l2: [["Please inquire at the front desk.", "กรุณาสอบถามที่แผนกต้อนรับ"], ["How may I assist you?", "มีอะไรให้ช่วยไหมครับ/คะ"], ["The meeting will commence at nine.", "การประชุมจะเริ่มเวลาเก้าโมง"], ["Give me a shout if you need anything.", "ต้องการอะไรก็เรียกได้เลย"], ["A passport is required.", "ต้องใช้หนังสือเดินทาง"]],
    s6l3: [["I'm just kidding!", "ล้อเล่นน่า"], ["Are you pulling my leg?", "นี่ล้อฉันเล่นอยู่หรือเปล่า"], ["Oh great, another meeting.", "เยี่ยมเลย ประชุมอีกแล้ว (ประชด)"], ["Don't tease your sister.", "อย่าแกล้งน้องสาว"], ["That was a terrible pun.", "มุกเล่นคำนั้นแป้กมาก"]],
    s6l4: [["So there I was, alone in the dark.", "ตอนนั้นฉันอยู่คนเดียวในความมืด"], ["All of a sudden, the door opened.", "จู่ ๆ ประตูก็เปิด"], ["It turns out he was right.", "กลายเป็นว่าเขาพูดถูก"], ["Guess what? I got the job!", "รู้ไหม ฉันได้งานแล้ว"], ["In the end, everything was fine.", "สุดท้ายทุกอย่างก็เรียบร้อยดี"]],
    s6l5: [["There's no evidence for that claim.", "ไม่มีหลักฐานสนับสนุนข้ออ้างนั้น"], ["That's a valid point.", "นั่นเป็นประเด็นที่มีน้ำหนัก"], ["Granted, it's expensive, but it lasts.", "ยอมรับว่ามันแพง แต่ใช้ได้นาน"], ["I see it from a different perspective.", "ฉันมองจากอีกมุมหนึ่ง"], ["Fundamentally, we agree.", "โดยพื้นฐานแล้วเราเห็นตรงกัน"]],
    s6l6: [["It's on the tip of my tongue.", "คำมันติดอยู่ที่ปลายลิ้นแล้ว"], ["How can I put this?", "จะพูดยังไงดีนะ"], ["It's a kind of fruit.", "มันเป็นผลไม้ชนิดหนึ่ง"], ["Off the top of my head, about fifty.", "ถ้าตอบแบบไม่ได้เช็ก ประมาณห้าสิบ"], ["In a nutshell, we need more money.", "พูดสั้น ๆ คือเราต้องการเงินเพิ่ม"]],
    s6l7: [["I wish I could speak French.", "ฉันอยากพูดภาษาฝรั่งเศสได้จัง"], ["If only I had more time.", "ถ้าฉันมีเวลามากกว่านี้ก็ดีสิ"], ["I'd rather stay home tonight.", "คืนนี้ฉันขออยู่บ้านดีกว่า"], ["In hindsight, it was a mistake.", "มองย้อนกลับไป มันเป็นความผิดพลาด"], ["It's about time you got a new phone.", "ถึงเวลาที่คุณควรเปลี่ยนโทรศัพท์ใหม่ได้แล้ว"]],
    s6l8: [["Imagine never being late again.", "ลองนึกภาพว่าคุณจะไม่มาสายอีกเลย"], ["It's worth a try.", "มันคุ้มที่จะลองดู"], ["What if we started earlier?", "ถ้าเราเริ่มเร็วขึ้นล่ะ"], ["Let's be honest, it isn't working.", "พูดกันตรง ๆ เลย มันไม่ได้ผล"], ["Ultimately, it's your call.", "ท้ายที่สุดแล้วก็แล้วแต่คุณตัดสินใจ"]]
  };

  /* บทพื้นฐานใหม่: ขั้น 0 และขั้น 1 */
  M.lessons = M.lessons || {};
  (M.lessons.s0 = M.lessons.s0 || []).push(
    {
      id: 's0l9', title: 'วันนี้รู้สึกยังไง', en: 'How do you feel?', head: 'f',
      goal: 'บอกความรู้สึกและอาการของตัวเองด้วย I am / I feel ได้',
      notes: [
        'บอกความรู้สึกใช้ <b>I am + คำคุณศัพท์</b>: I am happy. ห้ามพูด I happy',
        'ใช้ <b>I feel</b> ก็ได้: I feel tired. ความหมายเหมือนกัน',
        'ถามคนอื่น: <b>How are you?</b> / <b>Are you OK?</b>',
        'คำว่า <b>very</b> (มาก) วางหน้าคำคุณศัพท์: very tired, very happy'
      ],
      words: [['happy', 'มีความสุข'], ['sad', 'เศร้า'], ['tired', 'เหนื่อย'], ['hungry', 'หิว'], ['thirsty', 'กระหายน้ำ'], ['sick', 'ไม่สบาย'], ['angry', 'โกรธ'], ['bored', 'เบื่อ'], ['fine', 'สบายดี'], ['very', 'มาก']],
      sents: [['I am happy today.', 'วันนี้ฉันมีความสุข'], ['I feel very tired.', 'ฉันรู้สึกเหนื่อยมาก'], ['Are you OK? You look sad.', 'เป็นอะไรไหม ดูเศร้านะ'], ['I am hungry. Let\'s eat.', 'ฉันหิว ไปกินข้าวกัน'], ['He is sick today.', 'วันนี้เขาไม่สบาย'], ['Are you thirsty?', 'คุณหิวน้ำไหม'], ['I am not angry.', 'ฉันไม่ได้โกรธ'], ['The children are bored.', 'เด็ก ๆ เบื่อ'], ['How are you? I am fine.', 'สบายดีไหม ฉันสบายดี'], ['She is very happy.', 'เธอมีความสุขมาก']],
      fix: [['I hungry.', 'I am hungry.', 'ต้องมี am ระหว่าง I กับคำคุณศัพท์'], ['I am very much tired.', 'I am very tired.', 'ขยายคำคุณศัพท์ใช้ very อย่างเดียว'], ['She feel sad.', 'She feels sad.', 'ประธาน she ต้องเติม s ที่กริยา: feels']]
    },
    {
      id: 's0l10', title: 'อันนี้ อันนั้น', en: 'This, that, these, those', head: 'T',
      goal: 'ชี้สิ่งของใกล้และไกล ทั้งชิ้นเดียวและหลายชิ้นได้ถูกต้อง',
      notes: [
        '<b>this</b> (อันนี้ ใกล้) และ <b>that</b> (อันนั้น ไกล) ใช้กับของชิ้นเดียว',
        '<b>these</b> (พวกนี้ ใกล้) และ <b>those</b> (พวกนั้น ไกล) ใช้กับของหลายชิ้น',
        'This <b>is</b> ... / These <b>are</b> ... กริยาต้องตรงกับจำนวน',
        'ถามว่าอะไร: <b>What is this?</b> / <b>What are these?</b>'
      ],
      words: [['this', 'อันนี้ / นี่'], ['that', 'อันนั้น / นั่น'], ['these', 'พวกนี้'], ['those', 'พวกนั้น'], ['here', 'ที่นี่'], ['there', 'ที่นั่น'], ['key', 'กุญแจ'], ['cup', 'ถ้วย'], ['shoes', 'รองเท้า'], ['glasses', 'แว่นตา']],
      sents: [['This is my key.', 'นี่คือกุญแจของฉัน'], ['That is your cup.', 'นั่นคือถ้วยของคุณ'], ['These are my shoes.', 'พวกนี้คือรองเท้าของฉัน'], ['Those are her glasses.', 'พวกนั้นคือแว่นตาของเขา (ผู้หญิง)'], ['What is this?', 'นี่คืออะไร'], ['What are those?', 'พวกนั้นคืออะไร'], ['Is that your bag?', 'นั่นกระเป๋าของคุณหรือเปล่า'], ['Come here, please.', 'มาที่นี่หน่อย'], ['My phone is over there.', 'โทรศัพท์ของฉันอยู่ตรงโน้น'], ['These cups are clean.', 'ถ้วยพวกนี้สะอาด']],
      fix: [['These is my shoes.', 'These are my shoes.', 'these เป็นพหูพจน์ ใช้ are'], ['This are my key.', 'This is my key.', 'this เป็นเอกพจน์ ใช้ is'], ['What is those?', 'What are those?', 'those เป็นพหูพจน์ ใช้ are']]
    }
  );
  (M.lessons.s1 = M.lessons.s1 || []).push(
    {
      id: 's1l9', title: 'บ้านของฉัน', en: 'My home', head: 'h',
      goal: 'บรรยายบ้านและห้องต่าง ๆ ด้วย There is / There are และคำบอกตำแหน่ง',
      notes: [
        '<b>There is</b> + ของชิ้นเดียว / <b>There are</b> + ของหลายชิ้น: There are two bedrooms.',
        'บอกตำแหน่งด้วย <b>in, on, under, next to</b>: The cat is under the bed.',
        'ถามว่ามีไหม: <b>Is there</b> a garden? / <b>Are there</b> any windows?',
        'live <b>in</b> a house / live <b>on</b> the fifth floor'
      ],
      words: [['bedroom', 'ห้องนอน'], ['kitchen', 'ห้องครัว'], ['bathroom', 'ห้องน้ำ'], ['living room', 'ห้องนั่งเล่น'], ['floor', 'ชั้น / พื้น'], ['window', 'หน้าต่าง'], ['door', 'ประตู'], ['under', 'ใต้'], ['on', 'บน'], ['in', 'ใน']],
      sents: [['There are two bedrooms in my house.', 'บ้านของฉันมีสองห้องนอน'], ['There is a big kitchen.', 'มีห้องครัวขนาดใหญ่'], ['The bathroom is next to the bedroom.', 'ห้องน้ำอยู่ข้างห้องนอน'], ['I live on the fifth floor.', 'ฉันอยู่ชั้นห้า'], ['Is there a garden? No, there isn\'t.', 'มีสวนไหม ไม่มี'], ['The cat is under the bed.', 'แมวอยู่ใต้เตียง'], ['My keys are on the table.', 'กุญแจของฉันอยู่บนโต๊ะ'], ['Please close the window.', 'ช่วยปิดหน้าต่างหน่อย'], ['We watch TV in the living room.', 'เราดูทีวีในห้องนั่งเล่น'], ['My apartment is small but nice.', 'อพาร์ตเมนต์ของฉันเล็กแต่น่าอยู่']],
      fix: [['There is two bedrooms.', 'There are two bedrooms.', 'ของหลายชิ้นใช้ There are'], ['I live in the fifth floor.', 'I live on the fifth floor.', 'ชั้นของตึกใช้ on'], ['Have a garden in my house.', 'There is a garden at my house.', 'บอกว่า "มี" สิ่งของในสถานที่ ใช้ There is']]
    },
    {
      id: 's1l10', title: 'ไปไหนมาไหน', en: 'Getting around', head: 'G',
      goal: 'บอกว่าไปไหนด้วยอะไร ใช้เวลานานเท่าไหร่ และซื้อตั๋วได้',
      notes: [
        'บอกพาหนะด้วย <b>by</b>: by bus, by train, by car แต่เดินใช้ <b>on foot</b>',
        'หรือใช้กริยาตรง ๆ: <b>take</b> a taxi, <b>take</b> the bus',
        'ถามระยะเวลา: <b>How long does it take?</b> ตอบ <b>It takes</b> twenty minutes.',
        'ขึ้นรถ <b>get on</b> / ลงรถ <b>get off</b>'
      ],
      words: [['by bus', 'โดยรถเมล์'], ['by train', 'โดยรถไฟ'], ['on foot', 'เดินเท้า'], ['take a taxi', 'นั่งแท็กซี่'], ['get on', 'ขึ้น (รถ)'], ['get off', 'ลง (รถ)'], ['ticket', 'ตั๋ว'], ['stop', 'ป้าย / หยุด'], ['how long', 'นานแค่ไหน'], ['minutes', 'นาที']],
      sents: [['I go to work by bus.', 'ฉันไปทำงานโดยรถเมล์'], ['She goes to school on foot.', 'เธอเดินไปโรงเรียน'], ['Let\'s take a taxi.', 'นั่งแท็กซี่กันเถอะ'], ['How long does it take?', 'ใช้เวลานานแค่ไหน'], ['It takes twenty minutes by train.', 'นั่งรถไฟใช้เวลายี่สิบนาที'], ['Where do I get off?', 'ฉันต้องลงที่ไหน'], ['Get off at the next stop.', 'ลงป้ายถัดไป'], ['One ticket to Chiang Mai, please.', 'ขอตั๋วไปเชียงใหม่หนึ่งใบ'], ['Does this bus go to the airport?', 'รถเมล์คันนี้ไปสนามบินไหม'], ['I get on the train at seven.', 'ฉันขึ้นรถไฟตอนเจ็ดโมง']],
      fix: [['I go to work by foot.', 'I go to work on foot.', 'เดินเท้าใช้ on foot ไม่ใช่ by foot'], ['How long it takes?', 'How long does it take?', 'คำถามต้องมี does'], ['I go to work by the bus.', 'I go to work by bus.', 'หลัง by ไม่ต้องมี the']]
    }
  );
})();
