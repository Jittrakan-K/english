/* Fluent: ติว TOEIC ชุดเพิ่ม: Part 1 และ Part 2 (ต่อท้ายข้อเดิม ลำดับเดิมไม่เปลี่ยน) */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.p1 = (T.p1 || []).concat([
    { scene: 'ผู้ชายสวมหมวกนิรภัยกำลังปีนบันได พิงอยู่กับผนังอาคาร', opts: ['A man is climbing a ladder.', 'A man is painting a ceiling.', 'A ladder is being folded.', 'A man is taking off his helmet.'], ans: 0, why: 'climbing a ladder = ปีนบันได ข้อ D ผิดเพราะเขายังสวมหมวกอยู่ ไม่ได้ถอด' },
    { scene: 'ชั้นวางในร้านค้า มีกระป๋องอาหารเรียงเต็มชั้น ไม่มีคนในภาพ', opts: ['A clerk is stocking the shelves.', 'Some cans are lined up on shelves.', 'Customers are waiting at the counter.', 'Some shelves are being removed.'], ans: 1, why: 'ภาพไม่มีคน จึงตอบสภาพที่เห็น: กระป๋องเรียงอยู่บนชั้น (lined up) ตัวเลือกที่บอกว่ามีคนกำลังเติมของหรือรื้อชั้นต้องมีคนอยู่ในภาพ' },
    { scene: 'ผู้หญิงนั่งที่โต๊ะทำงาน ใส่หูฟัง พิมพ์บนแป้นพิมพ์', opts: ['She is hanging up the phone.', 'She is wearing a headset.', 'She is plugging in a monitor.', 'She is putting on her glasses.'], ans: 1, why: 'wearing = สวมอยู่ (สภาพ) ส่วน putting on = กำลังสวม (การกระทำ) ภาพแสดงว่าใส่อยู่แล้ว' },
    { scene: 'จักรยานหลายคันจอดเรียงกันอยู่ข้างรั้ว หน้าอาคารสำนักงาน', opts: ['Some bicycles are parked by a fence.', 'People are riding bicycles.', 'A fence is being repaired.', 'Some bicycles are being loaded onto a truck.'], ans: 0, why: 'parked by a fence = จอดอยู่ข้างรั้ว ภาพไม่มีคนจึงตัดข้อที่มีคนกำลังทำออก' },
    { scene: 'พนักงานเสิร์ฟกำลังรินน้ำใส่แก้วให้ลูกค้าที่โต๊ะ', opts: ['A server is pouring water into a glass.', 'A customer is paying the bill.', 'A server is clearing the table.', 'Some glasses are being washed.'], ans: 0, why: 'pouring water into a glass = รินน้ำใส่แก้ว' },
    { scene: 'คนงานในโกดังกำลังขับรถยกที่มีพาเลทสินค้าอยู่ด้านหน้า', opts: ['A worker is operating a forklift.', 'A worker is unpacking a box.', 'Some boxes are falling off a shelf.', 'A truck is parked in a garage.'], ans: 0, why: 'operating a forklift = ขับ ใช้งานรถยก operate ออกบ่อยมากใน Part 1 กับเครื่องจักร' },
    { scene: 'คนกลุ่มหนึ่งกำลังเดินขึ้นบันไดเลื่อนในห้างสรรพสินค้า', opts: ['Some people are riding an escalator.', 'Some people are shopping for clothes.', 'An escalator is being repaired.', 'Some people are waiting for an elevator.'], ans: 0, why: 'riding an escalator = ขึ้นบันไดเลื่อน ข้อ D ใช้ elevator (ลิฟต์) เป็นกับดักคำใกล้เคียง' },
    { scene: 'ร่มหลายคันกางอยู่บนลานกลางแจ้ง มีโต๊ะเก้าอี้วางอยู่ใต้ร่ม ไม่มีคน', opts: ['Some umbrellas have been opened over tables.', 'People are eating outside.', 'Some chairs are being stacked.', 'It is raining heavily.'], ans: 0, why: 'have been opened = ถูกกางไว้แล้ว ใช้กับภาพไม่มีคน ข้อ D เดาจากร่มแต่ภาพไม่ได้บอกว่าฝนตก' }
  ]);

  T.p2 = (T.p2 || []).concat([
    { q: 'When is the new product being launched?', opts: ['At the convention center.', 'Sometime in early spring.', 'Yes, we had lunch.'], ans: 1, why: 'When ถามเวลา ตอบ in early spring ข้อ C ใช้ lunch เสียงคล้าย launched' },
    { q: 'Who\'s in charge of the training program?', opts: ['Ms. Tanaka is organizing it.', 'It starts at nine.', 'No, there\'s no charge.'], ans: 0, why: 'Who ถามคน ตอบชื่อคน ข้อ C ใช้ charge ซ้ำคำในคำถามเป็นกับดัก' },
    { q: 'Why was the meeting moved to Thursday?', opts: ['In meeting room B.', 'Because the director is traveling.', 'I moved last year.'], ans: 1, why: 'Why ถามเหตุผล ตอบ Because ... ข้อ C ใช้ moved ซ้ำคำแต่คนละเรื่อง' },
    { q: 'How many copies of the report do you need?', opts: ['About twenty, please.', 'It was a long report.', 'At the copy center.'], ans: 0, why: 'How many ถามจำนวน ตอบ About twenty' },
    { q: 'Would you like to join us for dinner tonight?', opts: ['I\'d love to, thanks.', 'The dinner was delicious.', 'He joined the company in May.'], ans: 0, why: 'คำชวน Would you like ... ตอบรับคำชวน' },
    { q: 'Isn\'t the printer working again?', opts: ['Yes, I printed it yesterday.', 'Someone from IT is fixing it now.', 'I work on the second floor.'], ans: 1, why: 'คำถามปฏิเสธ ตอบแบบอ้อมว่ามีคนกำลังซ่อม แปลว่ายังเสียอยู่' },
    { q: 'Should I send the contract by email or by mail?', opts: ['Email is faster.', 'Yes, you should.', 'The contract is signed.'], ans: 0, why: 'คำถามให้เลือก A or B ห้ามตอบ Yes/No ตอบเลือกอย่างใดอย่างหนึ่ง' },
    { q: 'The flight to Osaka has been delayed.', opts: ['Do we know for how long?', 'Yes, it\'s a nice place.', 'I\'ll fly there in June.'], ans: 0, why: 'ประโยคบอกเล่า คำตอบที่เข้ากันคือถามต่อว่าเลื่อนนานแค่ไหน' },
    { q: 'Could you help me set up the projector?', opts: ['Sure, I\'ll be right there.', 'It\'s a new project.', 'The setup fee is waived.'], ans: 0, why: 'ขอความช่วยเหลือ Could you ... ตอบรับ Sure ข้อ B ใช้ project เสียงคล้าย projector' },
    { q: 'Where can I find the cleaning supplies?', opts: ['In the closet next to the kitchen.', 'Every Friday afternoon.', 'They clean very well.'], ans: 0, why: 'Where ถามที่ ตอบ In the closet' },
    { q: 'How long will the renovation take?', opts: ['About three weeks.', 'It\'s a long hallway.', 'Yes, they took it.'], ans: 0, why: 'How long ถามระยะเวลา ตอบ About three weeks' },
    { q: 'Do you know if the bank is open on Saturday?', opts: ['Only in the morning.', 'I opened an account.', 'On the river bank.'], ans: 0, why: 'ถามว่าเปิดวันเสาร์ไหม ตอบว่าเปิดเฉพาะช่วงเช้า' },
    { q: 'Which supplier offered the lowest price?', opts: ['The one from Penang.', 'The price is on the label.', 'Yes, we did.'], ans: 0, why: 'Which ถามว่าอันไหน ตอบ The one from ... คำถาม Wh ห้ามตอบ Yes' },
    { q: 'Let\'s review the budget before the client arrives.', opts: ['Good idea, I\'ll get the files.', 'She arrived by taxi.', 'The review was positive.'], ans: 0, why: 'ข้อเสนอ Let\'s ... ตอบเห็นด้วย' },
    { q: 'Haven\'t you met our new sales manager?', opts: ['Not yet, but I\'d like to.', 'Sales went up last quarter.', 'We meet every Monday.'], ans: 0, why: 'คำถามปฏิเสธ ตอบตามความจริงว่ายังไม่เคยเจอ' },
    { q: 'What time does the store close today?', opts: ['At eight thirty.', 'It\'s close to the station.', 'Today is Tuesday.'], ans: 0, why: 'What time ถามเวลา ข้อ B ใช้ close ที่แปลว่าใกล้ เป็นกับดักคำพ้องเสียง' },
    { q: 'Whose turn is it to lead the morning meeting?', opts: ['I think it\'s Daniel\'s.', 'Turn left at the corner.', 'It was a good meeting.'], ans: 0, why: 'Whose ถามว่าของใคร ตอบ Daniel\'s' },
    { q: 'You\'ve already submitted your timesheet, haven\'t you?', opts: ['I\'ll do it this afternoon.', 'It\'s a big sheet of paper.', 'At five o\'clock.'], ans: 0, why: 'คำถามท้ายประโยค ตอบอ้อมว่าจะส่งบ่ายนี้ แปลว่ายังไม่ส่ง' },
    { q: 'Why don\'t we order lunch from the Thai restaurant?', opts: ['That sounds great.', 'Because it\'s closed.', 'In alphabetical order.'], ans: 0, why: 'Why don\'t we = ข้อเสนอ ไม่ใช่ถามเหตุผล ตอบรับข้อเสนอ ข้อ B ตอบ Because จึงเป็นกับดัก' },
    { q: 'Who should I give these invoices to?', opts: ['Leave them with Mr. Lee in accounting.', 'Yes, I gave them away.', 'Before the end of the month.'], ans: 0, why: 'Who ถามคน ตอบให้วางไว้กับ Mr. Lee' },
    { q: 'Is the conference room available this afternoon?', opts: ['It\'s booked until three.', 'The conference was in Seoul.', 'I can\'t find my room key.'], ans: 0, why: 'ถามว่าห้องว่างไหม ตอบอ้อมว่าจองไว้ถึงบ่ายสาม' },
    { q: 'How did the presentation go?', opts: ['Better than I expected.', 'By train.', 'It\'s in the presentation folder.'], ans: 0, why: 'How did ... go ถามว่าเป็นอย่างไรบ้าง ไม่ได้ถามวิธีเดินทาง' },
    { q: 'I can\'t find the file for the Morgan account.', opts: ['Did you check the shared drive?', 'I found a good restaurant.', 'The account is closed on Sundays.'], ans: 0, why: 'บอกปัญหา คำตอบที่เข้ากันคือถามกลับเพื่อช่วยหา' },
    { q: 'When will the shipment arrive?', opts: ['It\'s been delayed until Monday.', 'At the shipping dock.', 'By the arrival gate.'], ans: 0, why: 'When ถามเวลา ตอบว่าเลื่อนไปวันจันทร์' },
    { q: 'Would you prefer a window seat or an aisle seat?', opts: ['Either is fine with me.', 'Please have a seat.', 'The window is open.'], ans: 0, why: 'คำถามให้เลือก ตอบได้ว่า อันไหนก็ได้ (Either is fine) ซึ่งเป็นคำตอบที่ถูกบ่อยใน Part 2' }
  ]);
})();
