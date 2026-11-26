/* Speakeasy: ติว TOEIC ชุดเพิ่ม: Part 3 บทสนทนา
   graphic: ตาราง หรือรายการที่ข้อสอบจริงพิมพ์ไว้ให้ดูคู่กับเสียง (คำถามแบบ Look at the graphic) */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.p3 = (T.p3 || []).concat([
    { lines: [['M', 'Hi, Sarah. Do you know why the elevator isn\'t working?'], ['W', 'Maintenance is replacing some parts. The notice says it\'ll be back by Wednesday.'], ['M', 'Wednesday? I have a delivery of ten boxes of brochures coming tomorrow.'], ['W', 'You could ask the delivery company to use the service elevator at the back of the building. That one\'s still working.'], ['M', 'Good idea. I\'ll call them right now.']],
      qs: [
        { q: 'What problem are the speakers discussing?', opts: ['An elevator is out of service.', 'A delivery was lost.', 'Some brochures have errors.', 'The building is closing early.'], ans: 0, why: 'the elevator isn\'t working และมีการซ่อม = ลิฟต์ใช้การไม่ได้' },
        { q: 'What is the man expecting tomorrow?', opts: ['A maintenance worker.', 'A delivery.', 'A client visit.', 'A new elevator.'], ans: 1, why: 'I have a delivery of ten boxes of brochures coming tomorrow' },
        { q: 'What does the woman suggest?', opts: ['Postponing the delivery.', 'Carrying the boxes upstairs.', 'Using a different elevator.', 'Calling maintenance.'], ans: 2, why: 'use the service elevator at the back = ใช้ลิฟต์อีกตัว' }
      ] },
    { lines: [['W', 'Raj, the client from Hanoi just emailed. They want to move our video call from ten to two this afternoon.'], ['M', 'Two? I\'m supposed to be at the dentist then.'], ['W', 'Hmm. I can lead the call by myself if you send me your notes on the pricing.'], ['M', 'That would be great. I\'ll email you the file before lunch.']],
      qs: [
        { q: 'What does the client want to do?', opts: ['Cancel a contract.', 'Reschedule a call.', 'Visit the office.', 'Lower the price.'], ans: 1, why: 'move our video call from ten to two = เลื่อนเวลาประชุมทางวิดีโอ' },
        { q: 'Why can\'t the man join at two o\'clock?', opts: ['He has a medical appointment.', 'He will be on a flight.', 'He has another client meeting.', 'He is leaving work early.'], ans: 0, why: 'I\'m supposed to be at the dentist ถอดความเป็น medical appointment' },
        { q: 'What will the man send the woman?', opts: ['A contract.', 'Some pricing notes.', 'A travel schedule.', 'A video file.'], ans: 1, why: 'send me your notes on the pricing / I\'ll email you the file' }
      ] },
    { lines: [['M', 'Welcome to Lakeside Bank. How can I help you?'], ['W', 'I\'d like to open a business account for my bakery.'], ['M', 'Certainly. Did you bring your business registration certificate and an ID?'], ['W', 'I have my ID, but I forgot the certificate.'], ['M', 'That\'s OK. I can start the application now, and you can bring the certificate any time this week.']],
      qs: [
        { q: 'Who most likely is the woman?', opts: ['A bank employee.', 'A business owner.', 'A government official.', 'A baker\'s customer.'], ans: 1, why: 'open a business account for my bakery = เธอเป็นเจ้าของร้านเบเกอรี่' },
        { q: 'What did the woman forget?', opts: ['Her ID card.', 'A certificate.', 'Her bank card.', 'A deposit.'], ans: 1, why: 'I forgot the certificate' },
        { q: 'What does the man offer to do?', opts: ['Start the application today.', 'Lend her some money.', 'Visit her bakery.', 'Waive a fee.'], ans: 0, why: 'I can start the application now' }
      ] },
    { lines: [['W', 'Hi, I ordered a desk from your website, but one of the legs is missing.'], ['M', 'I\'m very sorry about that. Can you give me the order number?'], ['W', 'It\'s 4-4-7-2-1.'], ['M', 'Thank you. I\'ll ship the missing leg today by express, free of charge. You should get it in two days.'], ['W', 'Great, thank you.']],
      qs: [
        { q: 'Why is the woman calling?', opts: ['A part of her order is missing.', 'She wants to cancel an order.', 'A delivery is late.', 'She was charged twice.'], ans: 0, why: 'one of the legs is missing = ชิ้นส่วนของสินค้าหายไป' },
        { q: 'What does the man ask for?', opts: ['Her address.', 'An order number.', 'A photo of the desk.', 'Her credit card.'], ans: 1, why: 'Can you give me the order number?' },
        { q: 'When will the woman probably receive the item?', opts: ['Today.', 'Tomorrow.', 'In two days.', 'Next week.'], ans: 2, why: 'You should get it in two days' }
      ] },
    { lines: [['M', 'Lena, Paul, did you both see the results of the customer survey?'], ['W', 'Yes. Most people liked our new app, but many said it\'s hard to find the search button.'], ['M2', 'We could make the button bigger and move it to the top of the screen.'], ['M', 'Let\'s do that. Paul, can you have a new design ready for Friday\'s meeting?'], ['M2', 'No problem.']],
      qs: [
        { q: 'What are the speakers discussing?', opts: ['Survey results.', 'A hiring decision.', 'A sales report.', 'A new office.'], ans: 0, why: 'the results of the customer survey' },
        { q: 'What problem did customers mention?', opts: ['The app is too expensive.', 'A button is hard to find.', 'The app is slow.', 'The screen is too bright.'], ans: 1, why: 'it\'s hard to find the search button' },
        { q: 'What will Paul do by Friday?', opts: ['Contact customers.', 'Prepare a new design.', 'Write a report.', 'Test the app on phones.'], ans: 1, why: 'have a new design ready for Friday\'s meeting' }
      ] },
    { lines: [['W', 'Excuse me. I\'m looking for the train to Ayutthaya. Is it from platform four?'], ['M', 'It usually is, but today it\'s leaving from platform seven because of track repairs.'], ['W', 'Thanks. And is there somewhere I can buy a snack before I go?'], ['M', 'There\'s a café right next to platform seven. But hurry, the train leaves in ten minutes.']],
      qs: [
        { q: 'Where does the conversation most likely take place?', opts: ['At an airport.', 'At a train station.', 'At a bus stop.', 'On a boat.'], ans: 1, why: 'train, platform = สถานีรถไฟ' },
        { q: 'Why is the train using a different platform?', opts: ['It is a special train.', 'There are track repairs.', 'Platform four is crowded.', 'The schedule changed.'], ans: 1, why: 'because of track repairs' },
        { q: 'What does the man say about the train?', opts: ['It is delayed.', 'It is full.', 'It leaves soon.', 'It does not stop in Ayutthaya.'], ans: 2, why: 'the train leaves in ten minutes = ออกในไม่ช้า' }
      ] },
    { lines: [['M', 'I\'m thinking about taking the online project management course the company is paying for.'], ['W', 'I took it last year. It\'s really useful, but you need about five hours a week for homework.'], ['M', 'Five hours? That\'s a lot with my current workload.'], ['W', 'Well, the next course starts in January. Things are usually quieter then.']],
      qs: [
        { q: 'What are the speakers mainly discussing?', opts: ['A training course.', 'A new project.', 'A job opening.', 'A holiday schedule.'], ans: 0, why: 'the online project management course' },
        { q: 'What does the man mean when he says, "That\'s a lot with my current workload"?', opts: ['He thinks the course is expensive.', 'He is worried he does not have enough time.', 'He wants more homework.', 'He has finished his work.'], ans: 1, why: 'ห้าชั่วโมงต่อสัปดาห์มากเกินไปเมื่อเทียบกับงานตอนนี้ = กังวลว่าไม่มีเวลา' },
        { q: 'What does the woman suggest?', opts: ['Asking a manager for help.', 'Taking the course later.', 'Choosing a shorter course.', 'Studying on weekends.'], ans: 1, why: 'the next course starts in January. Things are usually quieter then = แนะนำให้เรียนรอบหน้า' }
      ] },
    { lines: [['W', 'Hi, Marco. I\'m organizing the staff party and I need to choose a venue. Here\'s the price list from the hotel.'], ['M', 'How many people are coming?'], ['W', 'About eighty.'], ['M', 'Then we need a room for at least eighty. The cheapest one that fits is fine. Our budget is tight this year.'], ['W', 'OK, I\'ll book that one today.']],
      graphic: { title: 'Riverside Hotel: Event rooms', rows: [['Room', 'Guests', 'Price'], ['Lotus Room', 'up to 50', '15,000 baht'], ['Orchid Room', 'up to 90', '22,000 baht'], ['Jasmine Hall', 'up to 120', '30,000 baht'], ['Grand Ballroom', 'up to 300', '60,000 baht']] },
      qs: [
        { q: 'What is the woman organizing?', opts: ['A training day.', 'A staff party.', 'A product launch.', 'A business trip.'], ans: 1, why: 'I\'m organizing the staff party' },
        { q: 'Look at the graphic. Which room will the woman most likely book?', opts: ['Lotus Room.', 'Orchid Room.', 'Jasmine Hall.', 'Grand Ballroom.'], ans: 1, why: 'ต้องรับได้อย่างน้อย 80 คนและถูกที่สุด ดูตาราง Lotus รับได้แค่ 50 ห้องถัดไปคือ Orchid รับได้ 90 ราคา 22,000' },
        { q: 'Why does the man want a less expensive room?', opts: ['The budget is limited.', 'Fewer people are coming.', 'The party is short.', 'The hotel is far away.'], ans: 0, why: 'Our budget is tight this year = งบจำกัด' }
      ] },
    { lines: [['M', 'Good afternoon. I\'d like to pick up my suit. I dropped it off on Monday.'], ['W', 'Do you have your ticket?'], ['M', 'Here it is.'], ['W', 'Hmm, it\'s not ready yet. Our machine broke down on Tuesday, so we\'re a bit behind. It\'ll be ready tomorrow at noon.'], ['M', 'Oh, I need it for an interview tomorrow morning.'], ['W', 'I see. I\'ll make it a priority and have it ready by six this evening.']],
      qs: [
        { q: 'Where does the woman most likely work?', opts: ['At a dry cleaner.', 'At a clothing factory.', 'At a hotel.', 'At a shoe store.'], ans: 0, why: 'มารับสูท มีตั๋วรับผ้า เครื่องเสีย = ร้านซักแห้ง' },
        { q: 'Why is the suit not ready?', opts: ['A machine broke down.', 'The man came too early.', 'An employee is sick.', 'The ticket was lost.'], ans: 0, why: 'Our machine broke down on Tuesday' },
        { q: 'What does the woman offer to do?', opts: ['Give a discount.', 'Deliver the suit.', 'Finish the suit this evening.', 'Lend the man another suit.'], ans: 2, why: 'have it ready by six this evening' }
      ] },
    { lines: [['W', 'Ken, our website traffic dropped by thirty percent last month.'], ['M', 'Really? Do we know why?'], ['W', 'I think it\'s because we stopped posting on social media while Amy was on leave.'], ['M', 'That makes sense. Why don\'t we hire a part-time assistant to help with posting?'], ['W', 'I\'ll talk to HR about it this afternoon.']],
      qs: [
        { q: 'What problem does the woman mention?', opts: ['Sales fell sharply.', 'Fewer people visited the website.', 'The website is down.', 'An employee quit.'], ans: 1, why: 'website traffic dropped = คนเข้าเว็บน้อยลง' },
        { q: 'According to the woman, what caused the problem?', opts: ['A design change.', 'Higher prices.', 'A lack of social media posts.', 'Technical errors.'], ans: 2, why: 'we stopped posting on social media' },
        { q: 'What will the woman do this afternoon?', opts: ['Post on social media.', 'Contact the human resources department.', 'Call Amy.', 'Fix the website.'], ans: 1, why: 'I\'ll talk to HR' }
      ] },
    { lines: [['M', 'Hello, I\'m calling from Apex Car Rental about your reservation for this weekend.'], ['W', 'Yes, is there a problem?'], ['M', 'The compact car you booked isn\'t available. But we can give you a larger sedan for the same price.'], ['W', 'Oh, that\'s fine. Actually, that\'s even better. I\'ll have three colleagues with me.'], ['M', 'Great. You can pick it up at the airport counter on Saturday at nine.']],
      qs: [
        { q: 'Why is the man calling?', opts: ['To confirm a payment.', 'To explain a change to a booking.', 'To offer a discount.', 'To ask about damage to a car.'], ans: 1, why: 'The compact car you booked isn\'t available แล้วเสนอคันใหม่ = แจ้งเปลี่ยนการจอง' },
        { q: 'Why is the woman pleased?', opts: ['She will travel with other people.', 'The price is lower.', 'She can return the car later.', 'The car is electric.'], ans: 0, why: 'I\'ll have three colleagues with me รถใหญ่ขึ้นจึงดีกว่า' },
        { q: 'Where will the woman pick up the car?', opts: ['At her hotel.', 'At the airport.', 'At a train station.', 'At her office.'], ans: 1, why: 'pick it up at the airport counter' }
      ] },
    { lines: [['W', 'Hi, Tom. Have you finished translating the user manual into Japanese?'], ['M', 'Almost. I\'ve done eight of the ten chapters.'], ['W', 'The printer needs it by Monday. Will that be a problem?'], ['M', 'Not at all. I\'ll finish it this weekend.'], ['W', 'Thanks. Could you also send it to Yuki so she can check it before it goes to the printer?']],
      qs: [
        { q: 'What is the man working on?', opts: ['Designing a product.', 'Translating a document.', 'Printing a catalog.', 'Writing a report.'], ans: 1, why: 'translating the user manual' },
        { q: 'How much of the work is complete?', opts: ['Half of it.', 'Two chapters.', 'Most of it.', 'All of it.'], ans: 2, why: 'eight of the ten chapters = ส่วนใหญ่แล้ว' },
        { q: 'What does the woman ask the man to do?', opts: ['Send the work to a colleague.', 'Call the printer.', 'Work overtime today.', 'Shorten the manual.'], ans: 0, why: 'send it to Yuki so she can check it' }
      ] },
    { lines: [['M', 'Excuse me, do you sell replacement batteries for this camera?'], ['W', 'Let me see the model. Hmm, we don\'t carry those in the store, but I can order one for you.'], ['M', 'How long would it take?'], ['W', 'About three days. Or you can buy it directly from the manufacturer\'s website.'], ['M', 'I\'ll order it here. I prefer to pick it up in person.']],
      qs: [
        { q: 'What does the man want to buy?', opts: ['A camera.', 'A battery.', 'A memory card.', 'A phone case.'], ans: 1, why: 'replacement batteries for this camera' },
        { q: 'What does the woman say about the item?', opts: ['It is on sale.', 'It is not available in the store.', 'It is very expensive.', 'It is no longer made.'], ans: 1, why: 'we don\'t carry those in the store = ร้านไม่มีขาย' },
        { q: 'What does the man decide to do?', opts: ['Order the item from the store.', 'Buy a new camera.', 'Visit another store.', 'Order online from the manufacturer.'], ans: 0, why: 'I\'ll order it here' }
      ] },
    { lines: [['W', 'Gary, I just looked at the schedule for the trade show booth. You\'re working on Thursday and Friday, right?'], ['M', 'That\'s right. But I just found out my flight back from Seoul lands Thursday afternoon.'], ['W', 'Then you can switch with Hannah. She\'s only working on Saturday.'], ['M', 'Hannah takes Thursday, and I take Saturday? OK, I\'ll ask her now.']],
      graphic: { title: 'Trade show booth schedule', rows: [['Day', 'Staff'], ['Thursday', 'Gary, Mei'], ['Friday', 'Gary, Omar'], ['Saturday', 'Hannah, Omar']] },
      qs: [
        { q: 'What problem does the man mention?', opts: ['His flight arrives on Thursday afternoon.', 'The booth is too small.', 'He lost the schedule.', 'He is sick.'], ans: 0, why: 'my flight back from Seoul lands Thursday afternoon' },
        { q: 'Look at the graphic. Who will work with the man on Saturday?', opts: ['Mei.', 'Omar.', 'Hannah.', 'The woman.'], ans: 1, why: 'Gary จะไปทำวันเสาร์แทน Hannah ดูตาราง วันเสาร์มี Omar อยู่ด้วย' },
        { q: 'What will the man do next?', opts: ['Book a new flight.', 'Talk to a coworker.', 'Change the booth location.', 'Email the organizer.'], ans: 1, why: 'I\'ll ask her now = ไปคุยกับ Hannah' }
      ] },
    { lines: [['M', 'Hi, Grace. The new coffee machine in the break room is great, isn\'t it?'], ['W', 'It is, but I can\'t figure out how to make tea with it.'], ['M', 'You press the button with the cup symbol twice. The first time is for cold water, the second is for hot.'], ['W', 'Oh, I never would have guessed that. Is there a guide somewhere?'], ['M', 'I\'ll print the instructions and put them next to the machine.']],
      qs: [
        { q: 'What are the speakers talking about?', opts: ['A new coffee machine.', 'A break room renovation.', 'A tea shop.', 'A printer.'], ans: 0, why: 'The new coffee machine in the break room' },
        { q: 'What does the woman have trouble with?', opts: ['Paying for drinks.', 'Making tea.', 'Cleaning the machine.', 'Finding cups.'], ans: 1, why: 'I can\'t figure out how to make tea with it' },
        { q: 'What does the man offer to do?', opts: ['Buy some tea.', 'Call a technician.', 'Post some instructions.', 'Order a new machine.'], ans: 2, why: 'I\'ll print the instructions and put them next to the machine' }
      ] },
    { lines: [['W', 'Mr. Okafor, thank you for coming in. Can you tell us a little about your last job?'], ['M', 'Sure. I was an accountant at a shipping company for six years. I managed payments to our overseas suppliers.'], ['W2', 'This position involves a lot of travel to our branch in Jakarta. Would that be a problem?'], ['M', 'Not at all. I actually speak some Indonesian, so I\'d enjoy that.']],
      qs: [
        { q: 'Where most likely are the speakers?', opts: ['At a job interview.', 'At a shipping office.', 'At an airport.', 'At a bank.'], ans: 0, why: 'ถามประวัติงานเดิมและคุณสมบัติ = สัมภาษณ์งาน' },
        { q: 'What did the man do in his previous job?', opts: ['He sold ships.', 'He managed supplier payments.', 'He trained new staff.', 'He taught languages.'], ans: 1, why: 'I managed payments to our overseas suppliers' },
        { q: 'Why does the man say he would enjoy traveling?', opts: ['He has family in Jakarta.', 'He can speak the local language.', 'He likes flying.', 'He has never been abroad.'], ans: 1, why: 'I actually speak some Indonesian' }
      ] },
    { lines: [['M', 'Patricia, I\'m looking at the sales numbers. Our new energy drink is doing really well in the north.'], ['W', 'That\'s great. What about the south?'], ['M', 'Not as good. Most stores there haven\'t received it yet because of a problem with our distributor.'], ['W', 'Let\'s set up a call with the distributor tomorrow morning and fix that.']],
      qs: [
        { q: 'What product are the speakers discussing?', opts: ['A snack.', 'A drink.', 'A phone.', 'A magazine.'], ans: 1, why: 'Our new energy drink' },
        { q: 'Why are sales low in the south?', opts: ['The price is too high.', 'Stores have not received the product.', 'Customers prefer another brand.', 'The weather has been bad.'], ans: 1, why: 'Most stores there haven\'t received it yet' },
        { q: 'What will the speakers do tomorrow?', opts: ['Visit some stores.', 'Lower the price.', 'Speak with a distributor.', 'Start an advertising campaign.'], ans: 2, why: 'set up a call with the distributor tomorrow morning' }
      ] },
    { lines: [['W', 'Welcome to City Library. Can I help you?'], ['M', 'Yes, I\'d like to reserve one of the study rooms for Saturday afternoon.'], ['W', 'You need a library card to do that. Do you have one?'], ['M', 'No, I just moved here.'], ['W', 'You can apply for one now. It only takes a few minutes. I just need to see something with your new address on it.'], ['M', 'I have my apartment lease right here.']],
      qs: [
        { q: 'What does the man want to do?', opts: ['Borrow a book.', 'Reserve a room.', 'Return a laptop.', 'Join a class.'], ans: 1, why: 'reserve one of the study rooms' },
        { q: 'What does the woman ask for?', opts: ['A fee.', 'Proof of address.', 'A phone number.', 'A photo.'], ans: 1, why: 'something with your new address on it = หลักฐานที่อยู่' },
        { q: 'What does the man show the woman?', opts: ['A rental agreement.', 'A passport.', 'A utility bill.', 'A student ID.'], ans: 0, why: 'my apartment lease ถอดความเป็น rental agreement (สัญญาเช่า)' }
      ] }
  ]);
})();
