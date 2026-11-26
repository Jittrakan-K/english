/* Fluent: ติว TOEIC (Listening & Reading) ส่วนที่ 1: เทคนิค, Part 1, Part 2
   ข้อสอบทั้งหมดเขียนขึ้นใหม่ตามรูปแบบข้อสอบจริง ไม่ได้คัดลอกจากข้อสอบของ ETS
   ans คือลำดับตัวเลือกที่ถูก (เริ่มที่ 0), why คือคำอธิบายภาษาไทย */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.parts = [
    { id: 'p1', sec: 'L', name: 'Part 1 Photographs', th: 'บรรยายภาพ', real: 6,
      what: 'ดูภาพ แล้วฟังประโยค 4 ประโยค (ไม่มีพิมพ์ในข้อสอบ) เลือกประโยคที่บรรยายภาพได้ถูกที่สุด',
      tips: ['ก่อนฟัง ดูภาพให้รู้ว่า ใคร ทำอะไร อยู่ที่ไหน มีของอะไรเด่น', 'ระวังคำที่ "เสียงคล้าย" กับสิ่งในภาพ เช่น ภาพมี copy machine แต่ตัวเลือกพูดว่า coffee', 'ระวังกริยาที่ภาพไม่ได้แสดง เช่น ภาพคนนั่งอยู่หน้าคอม แต่ตัวเลือกบอกว่ากำลัง "turning on" เครื่อง', 'ภาพไม่มีคนมักใช้ passive: The chairs have been stacked. / Some boxes are being loaded.', 'is being + V3 แปลว่ามีคน "กำลังทำ" อยู่ในภาพ ถ้าภาพไม่มีคนทำ ข้อนั้นมักผิด'] },
    { id: 'p2', sec: 'L', name: 'Part 2 Question-Response', th: 'ถาม-ตอบ', real: 25,
      what: 'ฟังคำถามหรือประโยคหนึ่งประโยค แล้วฟังคำตอบ 3 แบบ (ไม่มีพิมพ์) เลือกคำตอบที่เหมาะที่สุด',
      tips: ['ฟังคำแรกให้ชัด: Who, Where, When, Why, How ตัดตัวเลือกได้ทันที เช่น When ต้องตอบเรื่องเวลา', 'คำตอบที่ "ซ้ำคำ" หรือ "เสียงคล้าย" คำในคำถาม มักเป็นกับดัก', 'คำตอบที่ถูกบ่อยครั้งเป็นแบบอ้อม เช่น ถาม When is the meeting? ตอบ Let me check the schedule.', 'คำถาม Yes/No คำตอบที่ถูกอาจไม่มีคำว่า yes หรือ no เลย', 'Why don\'t we...? / Would you like...? เป็นการชวนหรือเสนอ ตอบด้วย Sure, That\'s a good idea, I\'d love to'] },
    { id: 'p3', sec: 'L', name: 'Part 3 Conversations', th: 'บทสนทนา', real: 39,
      what: 'ฟังบทสนทนา 2 ถึง 3 คน แล้วตอบคำถามที่พิมพ์ไว้ 3 ข้อต่อบท บางบทมีตารางหรือแผนภาพประกอบ',
      tips: ['อ่านคำถาม 3 ข้อก่อนเสียงเริ่ม จะรู้ว่าต้องฟังหาอะไร', 'คำตอบของ 3 ข้อมักเรียงตามลำดับในบทสนทนา ข้อ 1 อยู่ต้นบท ข้อ 3 อยู่ท้ายบท', 'คำถามแบบ What will the man probably do next? คำตอบอยู่ในประโยคท้าย ๆ', 'ตัวเลือกที่ถูกมัก "ถอดความ" ไม่ได้ใช้คำเดียวกับที่ได้ยิน เช่น ได้ยิน "reschedule" ตัวเลือกเขียน "change a date"', 'คำถามเรื่องเจตนา (Why does the woman say "...") ต้องดูบริบทก่อนและหลังประโยคนั้น'] },
    { id: 'p4', sec: 'L', name: 'Part 4 Talks', th: 'ฟังคนพูดคนเดียว', real: 30,
      what: 'ฟังประกาศ ข้อความเสียง โฆษณา หรือการบรรยายสั้น แล้วตอบคำถามที่พิมพ์ไว้ 3 ข้อต่อเรื่อง',
      tips: ['ประโยคแรก ๆ มักบอกว่าเป็นใคร พูดที่ไหน พูดเรื่องอะไร ซึ่งเป็นคำตอบของข้อแรก', 'ข้อความเสียง (voicemail) มักจบด้วยสิ่งที่ผู้ฟังต้องทำ เช่น Please call me back', 'ฟังคำบอกการเปลี่ยนแปลง เช่น however, unfortunately, instead มักตามด้วยคำตอบสำคัญ', 'ตัวเลข วัน เวลา ราคา มักถูกถาม จดสั้น ๆ ได้ถ้าฝึก'] },
    { id: 'p5', sec: 'R', name: 'Part 5 Incomplete Sentences', th: 'เติมคำในประโยค', real: 30,
      what: 'ประโยคมีช่องว่าง 1 ช่อง เลือกคำที่ถูกต้องจาก 4 ตัวเลือก วัดไวยากรณ์และคำศัพท์',
      tips: ['ดูตัวเลือกก่อน ถ้าเป็นคำรากเดียวกัน (decide, decision, decisive, decisively) เป็นข้อ "ชนิดคำ" ดูแค่คำรอบช่องว่างก็ตอบได้', 'หลัง the, a, คำคุณศัพท์ หรือ preposition มักเป็นคำนาม / หน้าคำนามมักเป็นคำคุณศัพท์ / ขยายกริยามักเป็น -ly', 'ข้อ tense ดูคำบอกเวลา: yesterday, since, by next month, currently', 'ข้อคำเชื่อม ดูว่าหลังช่องว่างเป็นประโยค (although, because) หรือคำนาม (despite, because of)', 'อย่าใช้เวลาเกินข้อละ 30 วินาที ข้อที่ไม่รู้ให้เดาแล้วไปต่อ'] },
    { id: 'p6', sec: 'R', name: 'Part 6 Text Completion', th: 'เติมคำในข้อความ', real: 16,
      what: 'อีเมล ประกาศ หรือบทความสั้นมีช่องว่าง 4 ช่อง บางช่องให้เลือกทั้งประโยคที่เหมาะกับบริบท',
      tips: ['อ่านทั้งย่อหน้า ไม่ใช่แค่ประโยคที่มีช่องว่าง เพราะ tense และคำเชื่อมขึ้นกับประโยคก่อนหน้า', 'ข้อเลือกประโยค ให้ดูประโยคก่อนและหลังช่องว่าง ประโยคที่ถูกจะเชื่อมต่อทั้งสองด้าน', 'คำสรรพนาม (it, they, this) ในตัวเลือก ต้องอ้างถึงสิ่งที่พูดไปแล้วได้'] },
    { id: 'p7', sec: 'R', name: 'Part 7 Reading Comprehension', th: 'อ่านจับใจความ', real: 54,
      what: 'อ่านเอกสารจริงในที่ทำงาน เช่น อีเมล โฆษณา แบบฟอร์ม แชต บทความ มีทั้งเรื่องเดียว สองเรื่อง และสามเรื่อง แล้วตอบคำถาม',
      tips: ['อ่านคำถามก่อน แล้วค่อยหาคำตอบในเนื้อเรื่อง', 'คำถาม NOT true / NOT mentioned ต้องตรวจทุกตัวเลือกกับเนื้อเรื่อง', 'ชุดหลายเรื่อง มักมีข้อที่ต้องเอาข้อมูลจาก 2 เรื่องมารวมกัน', 'Part 7 ยาวที่สุด แบ่งเวลาให้เหลือประมาณ 55 นาทีสำหรับ Part 7 ทั้งหมด', 'คำถามคำศัพท์ (closest in meaning) ให้แปลตามบริบทในประโยค ไม่ใช่ความหมายที่คุ้นที่สุด'] }
  ];

  T.general = [
    'ข้อสอบจริง: Listening 100 ข้อ 45 นาที และ Reading 100 ข้อ 75 นาที รวม 200 ข้อ 2 ชั่วโมง คะแนนเต็ม 990 (ส่วนละ 495)',
    'ไม่มีการหักคะแนนเมื่อตอบผิด อย่าเว้นว่างเด็ดขาด ข้อที่ไม่รู้ให้เดา',
    'Listening เล่นเสียงแค่ครั้งเดียว ฝึกในเว็บนี้ให้ลองฟังรอบเดียวก่อน แล้วค่อยกดฟังซ้ำตอนดูเฉลย',
    'Reading ไม่มีใครบอกเวลาแต่ละ Part ให้ตั้งเป้า Part 5 ประมาณ 10 นาที Part 6 ประมาณ 10 นาที ที่เหลือเป็น Part 7',
    'คำศัพท์ TOEIC เป็นภาษาที่ทำงาน: การประชุม การเงิน การจ้างงาน การสั่งซื้อ การเดินทางไปทำงาน ฝึกชุดคำ TOEIC ในคลังคำควบคู่กันไป'
  ];

  /* Part 1: ข้อสอบจริงใช้รูปถ่าย ที่นี่ใช้คำบรรยายภาพแทน ให้นึกภาพตามก่อนฟัง */
  T.p1 = [
    { scene: 'ผู้หญิงคนหนึ่งยืนอยู่หน้าเครื่องถ่ายเอกสาร กำลังวางกระดาษลงบนเครื่อง', opts: ['The woman is drinking a cup of coffee.', 'The woman is placing a document on a copier.', 'The woman is repairing a machine.', 'The woman is opening a window.'], ans: 1, why: 'เธอกำลังวางเอกสารบนเครื่องถ่ายเอกสาร (placing a document on a copier) ข้อ A ใช้คำว่า coffee ซึ่งเสียงคล้าย copier' },
    { scene: 'ห้องประชุมว่างเปล่า เก้าอี้ถูกจัดเรียงรอบโต๊ะยาว ไม่มีคน', opts: ['Some people are attending a meeting.', 'A man is moving some chairs.', 'Chairs have been arranged around a table.', 'A table is being cleaned.'], ans: 2, why: 'ภาพไม่มีคน จึงใช้ passive แบบ have been arranged (ถูกจัดไว้แล้ว) ส่วน is being cleaned แปลว่ามีคนกำลังทำอยู่ ซึ่งภาพไม่มี' },
    { scene: 'ผู้ชายสองคนกำลังยกกล่องขึ้นรถบรรทุก', opts: ['They are loading boxes onto a truck.', 'They are driving a truck.', 'They are opening some boxes.', 'They are standing in line.'], ans: 0, why: 'load ... onto a truck คือขนของขึ้นรถ ตรงกับภาพ' },
    { scene: 'ผู้ชายคนหนึ่งนั่งอยู่ที่โต๊ะ กำลังพิมพ์ลงบนแล็ปท็อป มีแว่นตาวางอยู่ข้าง ๆ', opts: ['He is putting on his glasses.', 'He is typing on a laptop.', 'He is carrying a computer.', 'He is talking on the phone.'], ans: 1, why: 'เขากำลังพิมพ์บนแล็ปท็อป ข้อ A ผิดเพราะแว่นวางอยู่บนโต๊ะ ไม่ได้กำลังสวม (putting on = กำลังสวม)' },
    { scene: 'ร้านค้ามีผลไม้วางเรียงอยู่บนชั้นหลายชั้น ไม่มีคน', opts: ['A shopper is choosing some fruit.', 'Fruit is being picked from a tree.', 'Some produce is displayed on shelves.', 'The shelves are empty.'], ans: 2, why: 'produce แปลว่าผลผลิตทางการเกษตร (ผักผลไม้) is displayed = ถูกวางโชว์อยู่ ภาพไม่มีคน ข้อ A จึงผิด' },
    { scene: 'ผู้หญิงคนหนึ่งกำลังรดน้ำต้นไม้ในกระถางที่ระเบียง', opts: ['She is watering some plants.', 'She is planting a tree.', 'She is buying some flowers.', 'She is sweeping the balcony.'], ans: 0, why: 'water เป็นกริยาแปลว่ารดน้ำ ตรงกับภาพ' },
    { scene: 'คนหลายคนเดินข้ามถนนบนทางม้าลาย มีรถจอดรออยู่', opts: ['Cars are being parked in a garage.', 'Pedestrians are crossing the street.', 'A road is being repaired.', 'People are waiting for a bus.'], ans: 1, why: 'pedestrians = คนเดินเท้า กำลังข้ามถนน ข้อ C ใช้ passive is being repaired แต่ภาพไม่มีการซ่อม' },
    { scene: 'ผู้ชายสวมหมวกนิรภัยกำลังปีนบันไดพิงกำแพง', opts: ['A man is climbing a ladder.', 'A man is taking off his helmet.', 'A ladder is lying on the ground.', 'A man is painting a ceiling.'], ans: 0, why: 'climb a ladder = ปีนบันได ข้อ C ผิดเพราะบันไดพิงกำแพง ไม่ได้วางบนพื้น' },
    { scene: 'บนโต๊ะในร้านอาหารมีจาน แก้ว และเมนูวางอยู่ ไม่มีคนนั่ง', opts: ['A waiter is taking an order.', 'Diners are eating a meal.', 'Some menus have been left on a table.', 'Plates are being washed.'], ans: 2, why: 'ภาพไม่มีคน ใช้ have been left (ถูกวางทิ้งไว้) ข้ออื่นต้องมีคนทำกิจกรรม' },
    { scene: 'ผู้หญิงคนหนึ่งชี้ไปที่กราฟบนหน้าจอ ต่อหน้าเพื่อนร่วมงานที่นั่งฟังอยู่', opts: ['She is turning off a projector.', 'She is pointing at a chart.', 'The audience is leaving the room.', 'She is writing on a whiteboard.'], ans: 1, why: 'point at a chart = ชี้ไปที่แผนภูมิ' }
  ];

  /* Part 2: ตัวเลือกไม่พิมพ์ในข้อสอบจริง ให้ฟังทั้งคำถามและคำตอบ */
  T.p2 = [
    { q: 'Where is the marketing department?', opts: ['On the third floor.', 'Next Monday.', 'Yes, it\'s a good market.'], ans: 0, why: 'Where ถามสถานที่ ตอบ On the third floor ข้อ C ใช้คำ market ซึ่งเสียงคล้าย marketing เป็นกับดัก' },
    { q: 'When does the conference start?', opts: ['In the main hall.', 'At nine o\'clock tomorrow.', 'About two hundred people.'], ans: 1, why: 'When ถามเวลา ตอบ At nine o\'clock tomorrow' },
    { q: 'Who is in charge of the new project?', opts: ['It\'s quite expensive.', 'Ms. Tanaka is leading it.', 'Since last week.'], ans: 1, why: 'Who ถามคน ตอบชื่อคน Ms. Tanaka is leading it' },
    { q: 'Why was the flight delayed?', opts: ['Because of bad weather.', 'Gate twelve.', 'I\'ll take the window seat.'], ans: 0, why: 'Why ถามเหตุผล ตอบ Because of bad weather' },
    { q: 'How did you get to the office today?', opts: ['About an hour.', 'I took the train.', 'It\'s on Main Street.'], ans: 1, why: 'How ... get to ถามวิธีเดินทาง ตอบ I took the train ข้อ A ตอบเรื่องระยะเวลา (How long)' },
    { q: 'Would you like some help with those boxes?', opts: ['Thanks, that would be great.', 'They\'re in the storage room.', 'No, I don\'t like boxing.'], ans: 0, why: 'Would you like ... เป็นการเสนอความช่วยเหลือ ตอบรับด้วย Thanks, that would be great' },
    { q: 'Have you finished the sales report?', opts: ['The sale ends on Friday.', 'I\'m still working on it.', 'Yes, he did.'], ans: 1, why: 'คำตอบอ้อม I\'m still working on it = ยังไม่เสร็จ ข้อ A ใช้ sale เป็นกับดักคำซ้ำ ข้อ C ใช้ he ผิดประธาน' },
    { q: 'Why don\'t we order lunch from the new café?', opts: ['Because it was closed.', 'Sure, I\'ll get the menu.', 'At twelve thirty.'], ans: 1, why: 'Why don\'t we ... เป็นการชวน ไม่ใช่ถามเหตุผล ตอบรับด้วย Sure ข้อ A ใช้ Because เป็นกับดัก' },
    { q: 'Is the printer working again?', opts: ['A technician fixed it this morning.', 'I printed twenty copies.', 'He works in accounting.'], ans: 0, why: 'ตอบอ้อมว่าช่างซ่อมแล้ว แปลว่าใช้งานได้แล้ว' },
    { q: 'Which hotel are you staying at?', opts: ['For three nights.', 'The one near the station.', 'I booked it online.'], ans: 1, why: 'Which ถามว่าอันไหน ตอบ The one near the station' },
    { q: 'Could you send me the file by email?', opts: ['Of course, I\'ll do it right away.', 'It\'s a large file cabinet.', 'I received it yesterday.'], ans: 0, why: 'ขอร้องให้ทำ ตอบรับ Of course ข้อ B ใช้ file เป็นกับดักคำซ้ำ' },
    { q: 'How much does the training course cost?', opts: ['It lasts two days.', 'It\'s free for all employees.', 'In conference room B.'], ans: 1, why: 'How much ถามราคา ตอบ It\'s free' },
    { q: 'You\'ve met our new manager, haven\'t you?', opts: ['Yes, at the meeting on Monday.', 'The managing director.', 'I haven\'t eaten yet.'], ans: 0, why: 'Tag question ถามว่าเคยเจอไหม ตอบ Yes พร้อมบอกว่าเจอที่ไหน' },
    { q: 'Should we take a taxi or walk to the restaurant?', opts: ['Yes, we should.', 'It\'s only five minutes away.', 'I\'ll have the fish.'], ans: 1, why: 'คำถามแบบให้เลือก ตอบ Yes/No ไม่ได้ คำตอบ It\'s only five minutes away สื่อว่าเดินไปได้' },
    { q: 'What time does the bank close?', opts: ['At four thirty.', 'Close to the post office.', 'I need to open an account.'], ans: 0, why: 'What time ถามเวลา ข้อ B ใช้ close ความหมายว่า "ใกล้" เป็นกับดัก' },
    { q: 'Who should I give these invoices to?', opts: ['Mr. Lee in finance.', 'Yes, they arrived today.', 'About five hundred dollars.'], ans: 0, why: 'Who ถามคน ตอบ Mr. Lee in finance' },
    { q: 'I can\'t find the key to the supply room.', opts: ['The supplies arrived late.', 'Try asking the receptionist.', 'It\'s a key issue.'], ans: 1, why: 'ประโยคบอกปัญหา คำตอบที่ดีคือเสนอทางแก้ Try asking the receptionist' },
    { q: 'Where can I park my car?', opts: ['There\'s a garage behind the building.', 'I parked it yesterday.', 'Thanks, it\'s a new car.'], ans: 0, why: 'Where ถามสถานที่ ตอบ There\'s a garage behind the building' },
    { q: 'Did you call the client or send an email?', opts: ['I called her this morning.', 'Yes, I did.', 'She\'s a new client.'], ans: 0, why: 'คำถามให้เลือก ตอบด้วยตัวเลือกหนึ่ง I called her' },
    { q: 'When will the new software be installed?', opts: ['On all office computers.', 'Sometime next week.', 'It\'s very easy to use.'], ans: 1, why: 'When ถามเวลา ตอบ Sometime next week' },
    { q: 'Why is the store closed today?', opts: ['It\'s a public holiday.', 'At nine in the morning.', 'Close the door, please.'], ans: 0, why: 'Why ถามเหตุผล ตอบว่าเป็นวันหยุดราชการ' },
    { q: 'How long have you worked here?', opts: ['About five years.', 'By bus.', 'It\'s a long way.'], ans: 0, why: 'How long have you ... ถามระยะเวลา ตอบ About five years' },
    { q: 'Can I reschedule my appointment?', opts: ['What day works better for you?', 'The doctor is very kind.', 'I scheduled it last week.'], ans: 0, why: 'ขอเลื่อนนัด คำตอบที่เหมาะคือถามวันที่สะดวก' },
    { q: 'Isn\'t the meeting supposed to start at ten?', opts: ['It\'s been moved to eleven.', 'Yes, ten people.', 'In the meeting room.'], ans: 0, why: 'คำถามปฏิเสธเช็กข้อมูล ตอบด้วยข้อมูลใหม่ว่าเลื่อนเป็นสิบเอ็ดโมง' },
    { q: 'Whose turn is it to order office supplies?', opts: ['I think it\'s Maria\'s.', 'Turn left at the corner.', 'Paper and pens.'], ans: 0, why: 'Whose ถามว่าของใคร หรือตาใคร ตอบ Maria\'s' },
    { q: 'Let\'s review the budget before the presentation.', opts: ['Good idea. I\'m free after lunch.', 'The budget was approved last year.', 'He presented it well.'], ans: 0, why: 'Let\'s ... เป็นการชวน ตอบรับ Good idea' },
    { q: 'Where did you put the contract?', opts: ['On your desk.', 'Next Tuesday.', 'We signed it.'], ans: 0, why: 'Where ถามสถานที่ ตอบ On your desk' },
    { q: 'How often do you visit the factory?', opts: ['About twice a month.', 'It\'s in Rayong.', 'For three hours.'], ans: 0, why: 'How often ถามความถี่ ตอบ twice a month' },
    { q: 'The quarterly figures look very good.', opts: ['Yes, sales increased by ten percent.', 'Four times a year.', 'He has a good figure.'], ans: 0, why: 'แสดงความเห็น ตอบเสริมด้วยข้อมูล sales increased' },
    { q: 'Would you prefer a morning or an afternoon session?', opts: ['Mornings are better for me.', 'Yes, I would.', 'The session was cancelled.'], ans: 0, why: 'ให้เลือก ตอบตัวเลือกหนึ่ง Mornings are better' }
  ];
})();
