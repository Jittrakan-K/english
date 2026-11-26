/* Speakeasy: ติว TOEIC ส่วนที่ 2: Part 3 บทสนทนา และ Part 4 ฟังคนพูดคนเดียว
   lines: [ผู้พูด, ประโยค] โดย M = ผู้ชาย, W = ผู้หญิง, M2/W2 = คนที่สาม */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.p3 = [
    { lines: [['W', 'Hi, I\'m calling about the printer in our office. It keeps jamming every time we print more than ten pages.'], ['M', 'I\'m sorry to hear that. Is it the model we installed last month?'], ['W', 'Yes, that\'s the one. We have a big presentation tomorrow, so we really need it working.'], ['M', 'I understand. I can send a technician this afternoon around three. Will someone be there?'], ['W', 'Yes, I\'ll be in the office until six.']],
      qs: [
        { q: 'What problem does the woman mention?', opts: ['A printer is out of ink.', 'A printer keeps jamming.', 'A presentation was cancelled.', 'An order has not arrived.'], ans: 1, why: 'เธอบอกว่า It keeps jamming = กระดาษติดตลอด' },
        { q: 'Why does the woman need the problem fixed quickly?', opts: ['She has a presentation tomorrow.', 'She is leaving on vacation.', 'Her manager is visiting.', 'The warranty is ending.'], ans: 0, why: 'We have a big presentation tomorrow' },
        { q: 'What will happen this afternoon?', opts: ['The woman will buy a new printer.', 'A technician will visit.', 'The office will close early.', 'The man will call back.'], ans: 1, why: 'I can send a technician this afternoon around three' }
      ] },
    { lines: [['M', 'Excuse me, I\'d like to return this jacket. I bought it last week, but it\'s too small.'], ['W', 'No problem. Do you have your receipt?'], ['M', 'Yes, here it is. Actually, could I exchange it for a larger size instead of getting a refund?'], ['W', 'Of course. Let me check if we have it in large. Oh, it looks like we only have it in navy blue now, not black.'], ['M', 'Navy is fine. I\'ll take that.']],
      qs: [
        { q: 'Where most likely are the speakers?', opts: ['At a clothing store.', 'At a bank.', 'At a dry cleaner.', 'At a post office.'], ans: 0, why: 'คุยเรื่องคืนเสื้อแจ็กเก็ตและเปลี่ยนไซซ์ จึงอยู่ในร้านเสื้อผ้า' },
        { q: 'What does the man decide to do?', opts: ['Get a refund.', 'Exchange an item.', 'Buy a second jacket.', 'Order online.'], ans: 1, why: 'could I exchange it for a larger size instead of getting a refund' },
        { q: 'What problem does the woman mention?', opts: ['The store is closing.', 'The receipt is missing.', 'A color is not available.', 'The price has increased.'], ans: 2, why: 'มีแค่สีกรมท่า ไม่มีสีดำ = สีที่ต้องการไม่มี' }
      ] },
    { lines: [['W', 'Kevin, have you finished the budget proposal for the marketing campaign?'], ['M', 'Almost. I\'m still waiting for the final numbers from the design team.'], ['W', 'The director wants to see it by Thursday morning. Do you think you can make that?'], ['M', 'It should be fine. I\'ll call the design team today and ask them to send the numbers by tomorrow.'], ['W', 'Great. Let me know if you need any help.']],
      qs: [
        { q: 'What are the speakers discussing?', opts: ['A job interview.', 'A budget proposal.', 'A product design.', 'A client meeting.'], ans: 1, why: 'have you finished the budget proposal' },
        { q: 'Why hasn\'t the man finished?', opts: ['He was on vacation.', 'He is waiting for some information.', 'His computer is broken.', 'The director changed the plan.'], ans: 1, why: 'still waiting for the final numbers from the design team ตัวเลือกถอดความเป็น information' },
        { q: 'What will the man do today?', opts: ['Contact another team.', 'Meet the director.', 'Hire a designer.', 'Revise a contract.'], ans: 0, why: 'I\'ll call the design team today = ติดต่อทีมอื่น' }
      ] },
    { lines: [['M', 'Good morning. I have a reservation under the name Somchai Rattana. I\'m checking in today.'], ['W', 'Welcome, Mr. Rattana. You\'re staying for three nights in a double room, correct?'], ['M', 'That\'s right. Is breakfast included?'], ['W', 'Yes, breakfast is served from six thirty to ten on the second floor. And here\'s a voucher for a free drink at our rooftop bar.'], ['M', 'Thank you. Also, could I get a late checkout on my last day? My flight isn\'t until the evening.'], ['W', 'I\'ll make a note of that. Checkout can be extended until two p.m.']],
      qs: [
        { q: 'Where does the conversation take place?', opts: ['At an airport.', 'At a hotel.', 'At a restaurant.', 'At a travel agency.'], ans: 1, why: 'เช็กอิน ห้องพัก อาหารเช้า = โรงแรม' },
        { q: 'What does the woman give the man?', opts: ['A map.', 'A drink voucher.', 'A boarding pass.', 'A room upgrade.'], ans: 1, why: 'here\'s a voucher for a free drink' },
        { q: 'Why does the man ask for a late checkout?', opts: ['He has an evening flight.', 'He has a meeting at the hotel.', 'He arrived late.', 'He wants to use the pool.'], ans: 0, why: 'My flight isn\'t until the evening' }
      ] },
    { lines: [['W', 'I heard the company is moving our department to the new building next month.'], ['M', 'Yes, I saw the email this morning. It\'s much closer to the subway station, so commuting will be easier.'], ['W', 'That\'s good news for me. But I\'m worried about packing everything. We have so many files.'], ['M', 'Apparently, a moving company will handle that. We just need to label our boxes by Friday the twentieth.'], ['W', 'Oh, that helps a lot. I\'ll start sorting my files this afternoon.']],
      qs: [
        { q: 'What is the main topic of the conversation?', opts: ['A department relocation.', 'A new subway line.', 'A company merger.', 'A training session.'], ans: 0, why: 'moving our department to the new building = ย้ายแผนก' },
        { q: 'What advantage of the new building does the man mention?', opts: ['It has larger offices.', 'It is near public transportation.', 'It has free parking.', 'It is less expensive.'], ans: 1, why: 'much closer to the subway station ถอดความเป็น near public transportation' },
        { q: 'What must employees do by Friday?', opts: ['Pack all their files.', 'Label their boxes.', 'Submit a form.', 'Visit the new building.'], ans: 1, why: 'We just need to label our boxes by Friday' }
      ] },
    { lines: [['M', 'Hello, this is Dr. Park\'s office. How can I help you?'], ['W', 'Hi, I have an appointment on Tuesday at ten, but something urgent came up at work. Is it possible to change it?'], ['M', 'Let me see. Dr. Park has an opening on Wednesday at four, or Friday at nine in the morning.'], ['W', 'Friday morning would be better for me.'], ['M', 'All right, I\'ve moved you to Friday at nine. Please arrive fifteen minutes early to fill out a form.']],
      qs: [
        { q: 'Why is the woman calling?', opts: ['To cancel her insurance.', 'To change an appointment.', 'To ask for test results.', 'To complain about a bill.'], ans: 1, why: 'Is it possible to change it? = ขอเปลี่ยนวันนัด' },
        { q: 'When will the woman see the doctor?', opts: ['Tuesday at ten.', 'Wednesday at four.', 'Friday at nine.', 'Friday at four.'], ans: 2, why: 'I\'ve moved you to Friday at nine' },
        { q: 'What is the woman asked to do?', opts: ['Bring her insurance card.', 'Call again on Thursday.', 'Arrive early.', 'Pay in advance.'], ans: 2, why: 'Please arrive fifteen minutes early' }
      ] },
    { lines: [['W', 'Tom, Ana, thanks for joining. I wanted to talk about the delay in the shipment to our Singapore client.'], ['M', 'The parts from our supplier arrived two days late, so production fell behind.'], ['W2', 'I\'ve already spoken to the client. They said a delay of up to one week is acceptable, as long as we keep them updated.'], ['W', 'That\'s a relief. Tom, can you send them a daily progress report until the order ships?'], ['M', 'Sure, I\'ll start today.']],
      qs: [
        { q: 'What caused the delay?', opts: ['A machine broke down.', 'Some parts arrived late.', 'The client changed the order.', 'Staff were on holiday.'], ans: 1, why: 'The parts from our supplier arrived two days late' },
        { q: 'What does Ana say about the client?', opts: ['They want a discount.', 'They will cancel the order.', 'They accept a short delay.', 'They want to visit the factory.'], ans: 2, why: 'a delay of up to one week is acceptable' },
        { q: 'What will Tom do?', opts: ['Send daily updates.', 'Find a new supplier.', 'Travel to Singapore.', 'Speed up production.'], ans: 0, why: 'send them a daily progress report' }
      ] },
    { lines: [['M', 'Have you tried the new cafeteria on the first floor?'], ['W', 'Not yet. Is it any good?'], ['M', 'The food is great, and it\'s cheaper than the restaurants outside. But it gets really crowded at noon.'], ['W', 'Maybe I should go a little earlier, then. What time does it open?'], ['M', 'Eleven thirty. If you go right when it opens, you won\'t have to wait in line.']],
      qs: [
        { q: 'What are the speakers mainly discussing?', opts: ['A new cafeteria.', 'A lunch meeting.', 'A restaurant review.', 'A cooking class.'], ans: 0, why: 'the new cafeteria on the first floor' },
        { q: 'What disadvantage does the man mention?', opts: ['The food is expensive.', 'It is crowded at lunchtime.', 'It is far from the office.', 'The menu is limited.'], ans: 1, why: 'it gets really crowded at noon' },
        { q: 'What does the man suggest?', opts: ['Ordering food online.', 'Going when it opens.', 'Bringing lunch from home.', 'Eating outside.'], ans: 1, why: 'If you go right when it opens, you won\'t have to wait' }
      ] }
  ];

  T.p4 = [
    { kind: 'ประกาศในสนามบิน', lines: [['W', 'Attention, passengers on Flight 482 to Tokyo. Due to heavy rain at our destination, this flight has been delayed by approximately ninety minutes. The new departure time is eleven fifteen. Passengers may use the meal voucher available at the service desk near Gate 18. We apologize for the inconvenience and will provide further updates as soon as possible.']],
      qs: [
        { q: 'Why is the flight delayed?', opts: ['A mechanical problem.', 'Bad weather.', 'A crew shortage.', 'Heavy traffic.'], ans: 1, why: 'Due to heavy rain at our destination' },
        { q: 'What is the new departure time?', opts: ['Nine forty-five.', 'Ten fifteen.', 'Eleven fifteen.', 'Eleven forty-five.'], ans: 2, why: 'The new departure time is eleven fifteen' },
        { q: 'What can passengers get at the service desk?', opts: ['A meal voucher.', 'A new ticket.', 'A hotel room.', 'A refund.'], ans: 0, why: 'meal voucher available at the service desk' }
      ] },
    { kind: 'ข้อความเสียง', lines: [['M', 'Hi, this is Daniel from Bright Office Supplies, returning your call about your order of printer paper and toner. Unfortunately, the toner you requested is out of stock until next Wednesday. However, we do have a compatible brand at the same price, and we could deliver it tomorrow. Please call me back at 555-0192 to let me know which option you prefer.']],
      qs: [
        { q: 'Why is the speaker calling?', opts: ['To confirm a delivery address.', 'To respond to an inquiry about an order.', 'To advertise a sale.', 'To request a payment.'], ans: 1, why: 'returning your call about your order' },
        { q: 'What problem does the speaker mention?', opts: ['An item is unavailable.', 'A price has increased.', 'A delivery was damaged.', 'An invoice is incorrect.'], ans: 0, why: 'the toner you requested is out of stock' },
        { q: 'What does the speaker ask the listener to do?', opts: ['Visit the store.', 'Send an email.', 'Return a phone call.', 'Cancel the order.'], ans: 2, why: 'Please call me back' }
      ] },
    { kind: 'ประกาศในบริษัท', lines: [['W', 'Good morning, everyone. Before we start, I have a quick announcement. Starting next Monday, the main entrance will be closed for renovation for about two weeks. During this time, please use the side entrance on Park Avenue. Your ID cards will work there as usual. Also, the parking garage will remain open, so there\'s no change for those of you who drive. Thank you for your patience.']],
      qs: [
        { q: 'What is the announcement mainly about?', opts: ['A new security system.', 'A temporary entrance closure.', 'A change in working hours.', 'A parking fee.'], ans: 1, why: 'the main entrance will be closed for renovation for about two weeks' },
        { q: 'What are listeners asked to do?', opts: ['Use a different entrance.', 'Apply for new ID cards.', 'Park on the street.', 'Work from home.'], ans: 0, why: 'please use the side entrance on Park Avenue' },
        { q: 'What does the speaker say about the parking garage?', opts: ['It will be closed.', 'It will be renovated.', 'It will stay open.', 'It will charge a fee.'], ans: 2, why: 'the parking garage will remain open' }
      ] },
    { kind: 'โฆษณาทางวิทยุ', lines: [['M', 'Are you tired of long lines at the gym? Come to FitLife, the newest fitness center in the city. We\'re open twenty-four hours a day, seven days a week, so you can work out whenever it suits you. This month only, new members get their first three months at half price. Visit our website or stop by our location on River Road to sign up today.']],
      qs: [
        { q: 'What is being advertised?', opts: ['A sports store.', 'A fitness center.', 'A health food café.', 'A medical clinic.'], ans: 1, why: 'FitLife, the newest fitness center' },
        { q: 'What feature of the business is mentioned?', opts: ['It offers free classes.', 'It is open all the time.', 'It has a swimming pool.', 'It is near a subway station.'], ans: 1, why: 'open twenty-four hours a day, seven days a week' },
        { q: 'What special offer is available this month?', opts: ['A free T-shirt.', 'A discount for new members.', 'A free personal trainer.', 'Free parking.'], ans: 1, why: 'new members get their first three months at half price' }
      ] },
    { kind: 'นำชมโรงงาน', lines: [['W', 'Welcome to Siam Precision Parts. I\'m Lisa, and I\'ll be your guide for today\'s factory tour. We\'ll start in the assembly area, then visit the quality control lab, and finish in our showroom, where you can see our latest products. For safety reasons, please wear the helmets and glasses we\'ve provided at all times, and do not touch any of the machines. The tour will take about one hour.']],
      qs: [
        { q: 'Who most likely is the speaker?', opts: ['A tour guide.', 'A machine operator.', 'A safety inspector.', 'A sales manager.'], ans: 0, why: 'I\'ll be your guide for today\'s factory tour' },
        { q: 'Where will the tour end?', opts: ['In the assembly area.', 'In the quality control lab.', 'In the showroom.', 'In the cafeteria.'], ans: 2, why: 'finish in our showroom' },
        { q: 'What are listeners told to do?', opts: ['Take photographs.', 'Wear safety equipment.', 'Sign a form.', 'Leave their bags.'], ans: 1, why: 'please wear the helmets and glasses' }
      ] },
    { kind: 'รายงานข่าวธุรกิจ', lines: [['M', 'In business news, the electronics company Novatech announced today that it will open a new factory in Chonburi next year. The factory is expected to create around eight hundred jobs. Company president Mary Chen said the location was chosen because of its excellent port facilities, which will make it easier to export products to other parts of Asia. Construction will begin in March.']],
      qs: [
        { q: 'What did Novatech announce?', opts: ['A new product.', 'A new factory.', 'A merger.', 'A new president.'], ans: 1, why: 'it will open a new factory in Chonburi' },
        { q: 'According to the speaker, why was the location chosen?', opts: ['Low labor costs.', 'Good port facilities.', 'Government support.', 'Nearby universities.'], ans: 1, why: 'because of its excellent port facilities' },
        { q: 'When will construction begin?', opts: ['Next month.', 'In March.', 'At the end of the year.', 'Next summer.'], ans: 1, why: 'Construction will begin in March' }
      ] }
  ];
})();
