/* Speakeasy: ติว TOEIC ชุดเพิ่ม: Part 7 เอกสารเรื่องเดียว
   [1] [2] [3] [4] ในเนื้อเรื่องคือตำแหน่งสำหรับคำถามแทรกประโยค */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.p7 = (T.p7 || []).concat([
    { kind: 'ป้ายประกาศ', docs: [{ title: 'Notice: Staff kitchen', text: 'Starting Monday, the staff kitchen on the third floor will be cleaned every evening at 6 p.m. Please remove your food from the refrigerator by 5:45 p.m. on Fridays. Any items left after that time will be thrown away. Thank you for helping us keep the kitchen clean.' }],
      qs: [
        { q: 'What is the purpose of the notice?', opts: ['To announce a new cleaning schedule.', 'To introduce a new kitchen.', 'To ask staff to buy food.', 'To close the kitchen.'], ans: 0, why: 'the kitchen ... will be cleaned every evening = ตารางทำความสะอาดใหม่' },
        { q: 'What will happen to food left in the refrigerator after 5:45 p.m. on Fridays?', opts: ['It will be given away.', 'It will be thrown away.', 'It will be moved to another floor.', 'It will be labeled.'], ans: 1, why: 'Any items left after that time will be thrown away' }
      ] },
    { kind: 'อีเมล', docs: [{ title: 'From: Helen Price / To: Omar Said / Subject: Tomorrow\'s visit', text: 'Hi Omar,\nI\'m looking forward to visiting your factory tomorrow. Unfortunately, my train from Bangkok has been cancelled, so I will be driving instead. I expect to arrive around 10:30 rather than 9:30. Could we push the tour back by an hour? I will still be able to stay for lunch as planned. Also, could you send me directions to the visitor parking area?\nBest,\nHelen' }],
      qs: [
        { q: 'Why did Ms. Price write the email?', opts: ['To cancel a visit.', 'To change the time of a tour.', 'To order products.', 'To invite Mr. Said to lunch.'], ans: 1, why: 'Could we push the tour back by an hour? = ขอเลื่อนเวลาเยี่ยมชม' },
        { q: 'How will Ms. Price travel to the factory?', opts: ['By train.', 'By car.', 'By plane.', 'By bus.'], ans: 1, why: 'I will be driving instead' },
        { q: 'What does Ms. Price ask Mr. Said to send?', opts: ['A lunch menu.', 'A train ticket.', 'Directions to a parking area.', 'A product list.'], ans: 2, why: 'send me directions to the visitor parking area' }
      ] },
    { kind: 'แชตกลุ่มงาน', docs: [{ title: 'Online chat discussion', text: 'Nina Park (2:05): The client just asked if we can deliver the brochures by Thursday instead of Friday.\nLeo Brandt (2:06): The printing is done. It depends on whether the folding machine is free.\nCarla Ruiz (2:08): It\'s booked for another job until Wednesday noon.\nLeo Brandt (2:09): Then we can fold them Wednesday afternoon.\nNina Park (2:10): So Thursday is possible?\nLeo Brandt (2:11): Definitely. I\'ll arrange a courier for Thursday morning.\nNina Park (2:12): Perfect. I\'ll let the client know.' }],
      qs: [
        { q: 'What does the client want?', opts: ['A lower price.', 'An earlier delivery.', 'A different design.', 'More brochures.'], ans: 1, why: 'deliver the brochures by Thursday instead of Friday = ส่งเร็วขึ้น' },
        { q: 'Why is the folding machine not available until Wednesday afternoon?', opts: ['It is broken.', 'It is being used for another job.', 'It is being moved.', 'No one can operate it.'], ans: 1, why: 'It\'s booked for another job until Wednesday noon' },
        { q: 'At 2:11, what does Mr. Brandt mean when he writes, "Definitely"?', opts: ['He is sure the deadline can be met.', 'He disagrees with Ms. Park.', 'He wants to cancel the order.', 'He needs more time.'], ans: 0, why: 'ตอบคำถาม So Thursday is possible? ว่า Definitely = ได้แน่นอน' },
        { q: 'What will Ms. Park do next?', opts: ['Book a courier.', 'Contact the client.', 'Fold the brochures.', 'Print more copies.'], ans: 1, why: 'I\'ll let the client know' }
      ] },
    { kind: 'ใบประกาศอบรม', docs: [{ title: 'Free workshop: Writing effective business emails', text: 'Date: Wednesday, October 12\nTime: 1:00 to 4:00 p.m.\nPlace: Training Room 2, Main Building\nThis workshop will help you write clear and professional emails. Topics include choosing a subject line, using the right tone, and keeping messages short. Participants should bring a laptop. Space is limited to 25 people, so register by October 5 on the HR page. Light refreshments will be provided.' }],
      qs: [
        { q: 'What is NOT a topic of the workshop?', opts: ['Writing subject lines.', 'Using an appropriate tone.', 'Writing short messages.', 'Making phone calls.'], ans: 3, why: 'หัวข้อมี subject line, tone, keeping messages short ไม่มีเรื่องโทรศัพท์' },
        { q: 'What should participants bring?', opts: ['A laptop.', 'Lunch.', 'A notebook.', 'Their ID card.'], ans: 0, why: 'Participants should bring a laptop' },
        { q: 'Why should people register early?', opts: ['The fee will increase.', 'The number of places is limited.', 'The room may change.', 'Lunch must be ordered.'], ans: 1, why: 'Space is limited to 25 people' }
      ] },
    { kind: 'บทความข่าวท้องถิ่น', docs: [{ title: 'Riverside Market reopens', text: 'After eight months of renovation, Riverside Market reopened last Saturday. [1] The market now has a new roof, wider walkways, and a larger seating area for customers who want to eat their food on site. [2] More than 120 vendors are selling fresh produce, street food, and handmade goods. [3] City officials hope the improvements will bring more tourists to the area. [4] The market is open daily from 7 a.m. to 9 p.m.' }],
      qs: [
        { q: 'What is the article mainly about?', opts: ['A new shopping mall.', 'A market that has been improved.', 'A food festival.', 'A change in city officials.'], ans: 1, why: 'reopened after renovation พร้อมรายการสิ่งที่ปรับปรุง' },
        { q: 'What is mentioned as a new feature of the market?', opts: ['A parking garage.', 'A larger seating area.', 'A children\'s playground.', 'Air conditioning.'], ans: 1, why: 'a larger seating area for customers' },
        { q: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Several of them have been selling at the market for over twenty years."', opts: ['[1]', '[2]', '[3]', '[4]'], ans: 2, why: '"them" ต้องหมายถึง vendors ที่เพิ่งพูดถึงในประโยคก่อนตำแหน่ง [3]' }
      ] },
    { kind: 'ใบรับประกันสินค้า', docs: [{ title: 'BrightHome Blender: Warranty information', text: 'Your BrightHome blender is covered by a two-year warranty from the date of purchase. The warranty covers defects in materials and workmanship. It does not cover damage caused by dropping the product, using it for commercial purposes, or repairs made by anyone other than an authorized BrightHome service center. To make a claim, contact customer support with your receipt and the product\'s serial number, which is located on the bottom of the base.' }],
      qs: [
        { q: 'What is covered by the warranty?', opts: ['Damage from dropping the blender.', 'Defects in materials.', 'Use in a restaurant.', 'Repairs by any technician.'], ans: 1, why: 'The warranty covers defects in materials and workmanship' },
        { q: 'What is needed to make a claim?', opts: ['A photo of the product.', 'A receipt and a serial number.', 'The original box.', 'A store manager\'s signature.'], ans: 1, why: 'with your receipt and the product\'s serial number' },
        { q: 'Where is the serial number?', opts: ['On the receipt.', 'On the lid.', 'On the bottom of the base.', 'Inside the manual.'], ans: 2, why: 'located on the bottom of the base' }
      ] },
    { kind: 'จดหมายแจ้งขึ้นราคา', docs: [{ title: 'Dear Valued Customer,', text: 'For the past six years, FreshBox has delivered organic vegetables to your door at the same price. However, due to rising fuel and packaging costs, we must increase the price of our weekly box from 450 to 495 baht, starting on the first of next month. We have worked hard to keep this increase as small as possible. As a thank-you for your loyalty, customers who pay for three months in advance before the end of this month will continue to pay the old price until the end of the year.\nThe FreshBox Team' }],
      qs: [
        { q: 'Why is FreshBox raising its price?', opts: ['It is adding more vegetables.', 'Its costs have gone up.', 'It is opening new stores.', 'Demand has increased.'], ans: 1, why: 'due to rising fuel and packaging costs' },
        { q: 'How long has the price stayed the same?', opts: ['Six months.', 'One year.', 'Three years.', 'Six years.'], ans: 3, why: 'For the past six years ... at the same price' },
        { q: 'How can customers keep the old price?', opts: ['By paying three months in advance.', 'By ordering two boxes.', 'By referring a friend.', 'By picking up their box.'], ans: 0, why: 'customers who pay for three months in advance ... will continue to pay the old price' },
        { q: 'The word "loyalty" in the letter is closest in meaning to', opts: ['honesty', 'continued support', 'payment', 'patience'], ans: 1, why: 'loyalty ในบริบทลูกค้าคือการเป็นลูกค้าต่อเนื่อง = continued support' }
      ] },
    { kind: 'ข้อความโทรศัพท์', docs: [{ title: 'Text message', text: 'From: Ben (8:47 a.m.)\nHi Julia, I\'m stuck on the expressway. There\'s been an accident and nothing is moving. I won\'t make it for the 9:00 meeting with the suppliers. The slides are in the shared folder under "Q3 Suppliers." Could you start without me? I\'ll join by phone if traffic is still bad at 9:30.' }],
      qs: [
        { q: 'Why did Ben send the message?', opts: ['He will be late for a meeting.', 'He lost some files.', 'He wants to cancel an order.', 'He is sick.'], ans: 0, why: 'I won\'t make it for the 9:00 meeting เพราะรถติด' },
        { q: 'What does Ben ask Julia to do?', opts: ['Call the suppliers.', 'Begin the meeting.', 'Pick him up.', 'Print the slides.'], ans: 1, why: 'Could you start without me?' },
        { q: 'What does Ben say he might do?', opts: ['Take a taxi.', 'Join the meeting by phone.', 'Reschedule the meeting.', 'Send a colleague.'], ans: 1, why: 'I\'ll join by phone if traffic is still bad at 9:30' }
      ] },
    { kind: 'ประกาศรับสมัครงาน', docs: [{ title: 'Now hiring: Hotel Front Desk Agents', text: 'The Ocean Pearl Hotel in Phuket is looking for friendly front desk agents to join our team. Duties include checking guests in and out, answering questions about local attractions, and handling reservations by phone and email. Applicants must be able to work evening and weekend shifts. Experience in hospitality is preferred but not required, as full training will be provided. A second foreign language in addition to English is an advantage. Staff receive free meals during shifts and discounted rooms at our sister hotels.' }],
      qs: [
        { q: 'What is a requirement for the job?', opts: ['Hotel experience.', 'Availability on evenings and weekends.', 'A university degree.', 'A driver\'s license.'], ans: 1, why: 'Applicants must be able to work evening and weekend shifts (ประสบการณ์ไม่บังคับ)' },
        { q: 'What is indicated about training?', opts: ['It is provided by the hotel.', 'Applicants must pay for it.', 'It takes place in Bangkok.', 'It lasts one year.'], ans: 0, why: 'full training will be provided' },
        { q: 'What benefit is mentioned?', opts: ['Free housing.', 'Free meals during work.', 'A yearly bonus.', 'Free language classes.'], ans: 1, why: 'Staff receive free meals during shifts' }
      ] },
    { kind: 'ตารางเดินรถ', docs: [{ title: 'Airport Express Bus: Route A1 (City Center to Airport)', text: 'Departs every 30 minutes from 5:00 a.m. to 11:00 p.m.\nStops: Central Station, Silom, Sukhumit Plaza, Airport Terminal 1\nTravel time: about 50 minutes (longer during rush hours: 7 to 9 a.m. and 5 to 7 p.m.)\nFare: 60 baht. Children under 12 ride for half price.\nPayment: cash or transit card only. Credit cards are not accepted on board.' }],
      qs: [
        { q: 'How often does the bus leave?', opts: ['Every 15 minutes.', 'Every 30 minutes.', 'Every 50 minutes.', 'Every hour.'], ans: 1, why: 'Departs every 30 minutes' },
        { q: 'How much would a 10-year-old child pay?', opts: ['Nothing.', '30 baht.', '50 baht.', '60 baht.'], ans: 1, why: 'Children under 12 ride for half price ครึ่งหนึ่งของ 60 คือ 30 บาท' },
        { q: 'What is NOT accepted as payment on the bus?', opts: ['Cash.', 'Transit cards.', 'Credit cards.', 'Coins.'], ans: 2, why: 'Credit cards are not accepted on board' }
      ] },
    { kind: 'บันทึกภายในบริษัท', docs: [{ title: 'MEMO / To: All department heads / From: Finance', text: 'As part of our effort to reduce costs, all travel requests for the next quarter must be approved by the finance director before tickets are booked. [1] Requests should be submitted at least two weeks before the travel date. [2] Please consider whether a video conference could replace an in-person meeting. [3] Travel to meet new clients will be given priority. [4] Thank you for your cooperation.' }],
      qs: [
        { q: 'What is the purpose of the memo?', opts: ['To announce new travel rules.', 'To introduce a new finance director.', 'To promote video conferencing software.', 'To list new clients.'], ans: 0, why: 'all travel requests ... must be approved = กฎใหม่เรื่องการเดินทาง' },
        { q: 'What type of travel will be given priority?', opts: ['Training trips.', 'Trips to meet new clients.', 'Trips to visit branch offices.', 'Conference trips.'], ans: 1, why: 'Travel to meet new clients will be given priority' },
        { q: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Late requests will not be accepted except in emergencies."', opts: ['[1]', '[2]', '[3]', '[4]'], ans: 1, why: 'ต่อจากประโยคที่บอกว่าต้องส่งล่วงหน้าสองสัปดาห์ จึงพูดถึงคำขอที่ส่งช้าได้พอดี คือตำแหน่ง [2]' }
      ] },
    { kind: 'รีวิวออนไลน์', docs: [{ title: 'Review of Orchid Garden Restaurant / Rating: 4 out of 5', text: 'I had dinner here with three colleagues after a conference. The green curry was the best I\'ve had in years, and the staff were friendly and helpful. The only problem was the noise. A large group at the next table was celebrating a birthday, and it was hard to hear each other. Prices are reasonable for the quality. I would come back, but next time I\'ll ask for a table in the quieter upstairs area.\nPosted by Lars J.' }],
      qs: [
        { q: 'Why did the reviewer go to the restaurant?', opts: ['To celebrate a birthday.', 'To have dinner after a conference.', 'To meet a client.', 'To write a magazine article.'], ans: 1, why: 'I had dinner here with three colleagues after a conference' },
        { q: 'What did the reviewer dislike?', opts: ['The food.', 'The service.', 'The noise level.', 'The prices.'], ans: 2, why: 'The only problem was the noise' },
        { q: 'What does the reviewer plan to do next time?', opts: ['Order a different dish.', 'Sit upstairs.', 'Bring more people.', 'Make a reservation online.'], ans: 1, why: 'I\'ll ask for a table in the quieter upstairs area' }
      ] }
  ]);
})();
