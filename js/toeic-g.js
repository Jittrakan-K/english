/* Speakeasy: ติว TOEIC ชุดเพิ่ม: Part 4 ฟังคนพูดคนเดียว */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.p4 = (T.p4 || []).concat([
    { kind: 'ประกาศในร้านค้า', lines: [['W', 'Attention, shoppers. For the next thirty minutes, all frozen foods in aisle twelve are twenty percent off. This offer is only for members of our Fresh Rewards program, so please have your membership card ready at the checkout. Not a member yet? You can sign up for free at the customer service desk near the main entrance.']],
      qs: [
        { q: 'Where is the announcement being made?', opts: ['At a restaurant.', 'At a supermarket.', 'At a bank.', 'At a pharmacy.'], ans: 1, why: 'shoppers, aisle, frozen foods, checkout = ซูเปอร์มาร์เก็ต' },
        { q: 'How long will the discount last?', opts: ['Thirty minutes.', 'One hour.', 'One day.', 'One week.'], ans: 0, why: 'For the next thirty minutes' },
        { q: 'What can listeners do at the customer service desk?', opts: ['Return items.', 'Join a program.', 'Pick up an order.', 'Get a free bag.'], ans: 1, why: 'You can sign up for free at the customer service desk = สมัครสมาชิก' }
      ] },
    { kind: 'ข้อความเสียงถึงลูกค้า', lines: [['M', 'Hello, Ms. Rivera. This is Victor from Sunshine Dental Clinic. I\'m calling to remind you about your appointment with Dr. Lim tomorrow at four p.m. Please note that our clinic has moved to a new address, 25 Garden Road, on the second floor of the Parkview Building. There\'s free parking behind the building. If you need to change your appointment, please call us at least twenty-four hours in advance.']],
      qs: [
        { q: 'What is the purpose of the call?', opts: ['To remind a patient of an appointment.', 'To cancel an appointment.', 'To ask for a payment.', 'To advertise a new service.'], ans: 0, why: 'I\'m calling to remind you about your appointment' },
        { q: 'What has changed?', opts: ['The doctor\'s name.', 'The appointment time.', 'The clinic\'s location.', 'The price.'], ans: 2, why: 'our clinic has moved to a new address' },
        { q: 'What does the speaker say about parking?', opts: ['It is expensive.', 'It is free.', 'It is on the second floor.', 'It is not available.'], ans: 1, why: 'There\'s free parking behind the building' }
      ] },
    { kind: 'ประชุมพนักงาน', lines: [['W', 'Before we finish today\'s meeting, I want to thank everyone for their hard work this quarter. Thanks to you, we completed the Henderson project two weeks ahead of schedule. To celebrate, the company is giving everyone an extra day off. You can take it any time before the end of next month. Just make sure to let your team leader know at least a week in advance so we can plan coverage.']],
      qs: [
        { q: 'What is the speaker mainly doing?', opts: ['Introducing a new employee.', 'Thanking staff for their work.', 'Explaining a new policy.', 'Announcing a schedule delay.'], ans: 1, why: 'I want to thank everyone for their hard work' },
        { q: 'What does the speaker say about the Henderson project?', opts: ['It was finished early.', 'It was cancelled.', 'It is over budget.', 'It will start next month.'], ans: 0, why: 'two weeks ahead of schedule = เสร็จก่อนกำหนด' },
        { q: 'What are listeners asked to do?', opts: ['Submit a report.', 'Inform their team leader in advance.', 'Attend a party.', 'Work overtime.'], ans: 1, why: 'let your team leader know at least a week in advance' }
      ] },
    { kind: 'รายงานจราจร', lines: [['M', 'This is Radio 98 with your morning traffic update. Traffic is moving slowly on Highway 7 heading into the city because of an accident near the Riverside exit. Two lanes are closed, and police expect them to reopen around nine. If you\'re traveling downtown, we recommend taking the Sky Train instead. Coming up next, we\'ll have the weather forecast for the weekend.']],
      qs: [
        { q: 'What is causing the delay?', opts: ['Road construction.', 'An accident.', 'Bad weather.', 'A parade.'], ans: 1, why: 'because of an accident near the Riverside exit' },
        { q: 'What does the speaker recommend?', opts: ['Leaving home early.', 'Using public transportation.', 'Driving on Highway 9.', 'Working from home.'], ans: 1, why: 'we recommend taking the Sky Train ถอดความเป็น public transportation' },
        { q: 'What will listeners hear next?', opts: ['A weather forecast.', 'A sports report.', 'Some music.', 'An interview.'], ans: 0, why: 'Coming up next, we\'ll have the weather forecast' }
      ] },
    { kind: 'แนะนำวิทยากร', lines: [['W', 'Good evening, and welcome to the third talk in our Small Business Success series. Tonight\'s speaker is Daniel Wong, who started an online tea shop in his kitchen ten years ago. Today, his company sells tea in more than twenty countries. Mr. Wong will talk about how he used social media to find his first customers. After the talk, there\'ll be time for questions, so please write them on the cards on your seats.']],
      qs: [
        { q: 'Who is Daniel Wong?', opts: ['A chef.', 'A business owner.', 'A tea farmer.', 'A journalist.'], ans: 1, why: 'started an online tea shop ... his company sells tea = เจ้าของธุรกิจ' },
        { q: 'What will Mr. Wong talk about?', opts: ['Growing tea.', 'Using social media to find customers.', 'Shipping products overseas.', 'Hiring employees.'], ans: 1, why: 'how he used social media to find his first customers' },
        { q: 'What are listeners asked to do?', opts: ['Turn off their phones.', 'Write questions on cards.', 'Buy some tea.', 'Sign up for the next talk.'], ans: 1, why: 'please write them on the cards on your seats' }
      ] },
    { kind: 'ประกาศบนเครื่องบิน', lines: [['M', 'Good afternoon, ladies and gentlemen. This is your captain speaking. We\'ve reached our cruising altitude, and our flight time to Singapore will be about two hours and twenty minutes. We\'re expecting some light turbulence over the next half hour, so please keep your seat belts fastened while seated. Our cabin crew will begin serving drinks and a light meal shortly.']],
      qs: [
        { q: 'Who is the speaker?', opts: ['A pilot.', 'A flight attendant.', 'A travel agent.', 'An airport official.'], ans: 0, why: 'This is your captain speaking = กัปตัน นักบิน' },
        { q: 'Why are listeners asked to keep their seat belts fastened?', opts: ['The plane is landing.', 'Turbulence is expected.', 'The meal is being served.', 'It is the airline\'s rule for the whole flight.'], ans: 1, why: 'We\'re expecting some light turbulence' },
        { q: 'What will happen soon?', opts: ['The plane will land.', 'Drinks and food will be served.', 'A movie will begin.', 'Passengers can buy duty-free goods.'], ans: 1, why: 'cabin crew will begin serving drinks and a light meal shortly' }
      ] },
    { kind: 'ข้อความเสียงในที่ทำงาน', lines: [['W', 'Hi, Mark. It\'s Elena from the design team. I\'ve finished the new logo for the Bayside Hotel, and I\'ve put three versions in the shared folder. The client wants to see them on Friday, but I\'m not sure which color works best. You\'ve worked with them before. Could you take a look this afternoon and tell me what you think? Thanks.']],
      qs: [
        { q: 'What has the speaker completed?', opts: ['A hotel booking.', 'Some logo designs.', 'A client contract.', 'A marketing report.'], ans: 1, why: 'I\'ve finished the new logo ... three versions' },
        { q: 'Why does the speaker ask for the listener\'s opinion?', opts: ['He is her manager.', 'He has experience with the client.', 'He is a color expert.', 'He created the original logo.'], ans: 1, why: 'You\'ve worked with them before = เคยทำงานกับลูกค้ารายนี้' },
        { q: 'When will the client see the designs?', opts: ['This afternoon.', 'Tomorrow.', 'On Friday.', 'Next week.'], ans: 2, why: 'The client wants to see them on Friday' }
      ] },
    { kind: 'นำเที่ยวพิพิธภัณฑ์', lines: [['M', 'Welcome to the National Science Museum. My name is Arthur, and I\'ll be guiding you through our new space exhibition. The tour lasts about forty-five minutes. Photography is allowed, but please don\'t use flash, as it can damage some of the older materials. At the end of the tour, you\'ll have a chance to try our flight simulator. Tickets for it are sold separately at the gift shop.']],
      qs: [
        { q: 'What is the tour about?', opts: ['Ancient history.', 'Space.', 'Modern art.', 'Ocean life.'], ans: 1, why: 'our new space exhibition' },
        { q: 'What are listeners asked not to do?', opts: ['Take photographs.', 'Use flash.', 'Eat food.', 'Touch the walls.'], ans: 1, why: 'please don\'t use flash' },
        { q: 'What does the speaker say about the flight simulator?', opts: ['It is closed today.', 'It requires a separate ticket.', 'It is for children only.', 'It is free.'], ans: 1, why: 'Tickets for it are sold separately at the gift shop' }
      ] },
    { kind: 'ประกาศในบริษัท พร้อมตาราง', lines: [['W', 'Hello, everyone. As you know, the IT department is upgrading all office computers this week. Each floor will be done on a different day, as shown in the schedule I sent. Please save your work and turn off your computer before you leave the night before your floor\'s upgrade. Oh, and one change: the fourth floor has been moved to Friday because some equipment arrived late.']],
      graphic: { title: 'Computer upgrade schedule', rows: [['Day', 'Floor'], ['Tuesday', '2nd floor'], ['Wednesday', '3rd floor'], ['Thursday', '4th floor'], ['Friday', '5th floor']] },
      qs: [
        { q: 'What is the announcement about?', opts: ['A computer upgrade.', 'An office move.', 'A training session.', 'A security check.'], ans: 0, why: 'upgrading all office computers this week' },
        { q: 'What are listeners asked to do?', opts: ['Buy new equipment.', 'Save their work and turn off computers.', 'Work from home.', 'Change their passwords.'], ans: 1, why: 'Please save your work and turn off your computer' },
        { q: 'Look at the graphic. Which day on the schedule is no longer correct?', opts: ['Tuesday.', 'Wednesday.', 'Thursday.', 'Friday.'], ans: 2, why: 'ชั้น 4 ย้ายไปวันศุกร์ ดูตารางเดิมชั้น 4 อยู่วันพฤหัส จึงเป็นวันที่ไม่ถูกแล้ว' }
      ] },
    { kind: 'โฆษณา', lines: [['M', 'Is your office too hot in the summer? CoolAir has the answer. Our quiet, energy-saving air conditioners can cut your electricity bill by up to forty percent. And this month, we\'re offering free installation on all orders. Our technicians can install a unit in less than two hours. Call us today for a free visit, and we\'ll recommend the best system for your space.']],
      qs: [
        { q: 'What is being advertised?', opts: ['Office furniture.', 'Air conditioners.', 'An electricity company.', 'Cleaning services.'], ans: 1, why: 'Our quiet, energy-saving air conditioners' },
        { q: 'What benefit of the product is mentioned?', opts: ['Lower energy costs.', 'A ten-year warranty.', 'A modern design.', 'Remote control.'], ans: 0, why: 'cut your electricity bill by up to forty percent' },
        { q: 'What is offered this month?', opts: ['A discount on units.', 'Free installation.', 'Free maintenance for a year.', 'A gift card.'], ans: 1, why: 'free installation on all orders' }
      ] },
    { kind: 'ข้อความเสียงจากร้านอาหาร', lines: [['W', 'Hi, this message is for Mr. Novak. This is Bella Cucina restaurant calling about your reservation for a party of twelve on Saturday night. I\'m afraid our private dining room will be closed for repairs that evening. We can still seat your group in the main dining area, or we can move your reservation to Sunday in the private room. Please call us back to let us know which you prefer.']],
      qs: [
        { q: 'Why is the speaker calling?', opts: ['To confirm a menu.', 'To report a problem with a reservation.', 'To ask for a deposit.', 'To offer a job.'], ans: 1, why: 'private dining room will be closed for repairs = มีปัญหากับการจอง' },
        { q: 'How many people are in Mr. Novak\'s group?', opts: ['Two.', 'Six.', 'Twelve.', 'Twenty.'], ans: 2, why: 'a party of twelve' },
        { q: 'What is one option the speaker offers?', opts: ['A discount on the meal.', 'Changing the date.', 'A free dessert.', 'Eating at another restaurant.'], ans: 1, why: 'move your reservation to Sunday = เปลี่ยนวัน' }
      ] },
    { kind: 'ปาฐกถาเปิดงาน', lines: [['M', 'Thank you all for coming to the opening of our new factory here in Rayong. This facility will produce solar panels for customers across Southeast Asia. It\'s the most advanced factory our company has ever built, and it runs completely on renewable energy. I\'d especially like to thank the local government for its support. Now, please join me for a short tour of the production floor.']],
      qs: [
        { q: 'What is the event?', opts: ['A factory opening.', 'A product launch.', 'A retirement party.', 'A trade fair.'], ans: 0, why: 'the opening of our new factory' },
        { q: 'What will the facility produce?', opts: ['Cars.', 'Solar panels.', 'Batteries.', 'Computers.'], ans: 1, why: 'This facility will produce solar panels' },
        { q: 'What will listeners do next?', opts: ['Have lunch.', 'Watch a video.', 'Tour the factory.', 'Meet government officials.'], ans: 2, why: 'join me for a short tour of the production floor' }
      ] },
    { kind: 'พอดแคสต์ธุรกิจ', lines: [['W', 'Welcome back to Work Smart, the podcast about building better habits at work. Today, I want to talk about meetings. Studies show that most office workers spend over ten hours a week in meetings, and many of those meetings could be an email. Here\'s my advice: before you schedule a meeting, write down the one decision you need to make. If there isn\'t one, you probably don\'t need the meeting.']],
      qs: [
        { q: 'What is the main topic of the talk?', opts: ['Writing emails.', 'Making meetings more useful.', 'Finding a new job.', 'Working from home.'], ans: 1, why: 'Today, I want to talk about meetings แล้วแนะนำว่าประชุมเมื่อจำเป็น' },
        { q: 'What does the speaker imply when she says, "many of those meetings could be an email"?', opts: ['Emails are hard to write.', 'Many meetings are unnecessary.', 'People should check email more often.', 'Meetings should be shorter.'], ans: 1, why: 'หลายประชุมส่งเป็นอีเมลแทนได้ = ประชุมหลายครั้งไม่จำเป็น' },
        { q: 'What does the speaker recommend?', opts: ['Writing down the decision a meeting is for.', 'Meeting only on Mondays.', 'Inviting fewer people.', 'Recording every meeting.'], ans: 0, why: 'write down the one decision you need to make' }
      ] },
    { kind: 'ประกาศในงานแสดงสินค้า', lines: [['M', 'Good morning, visitors, and welcome to the Bangkok Home and Living Expo. Please note that the cooking demonstration scheduled for eleven a.m. in Hall B has been moved to Hall D because of a lighting problem. Also, don\'t forget to visit the information desk to enter our lucky draw. Three winners will receive a new sofa, and the draw takes place at five p.m. today.']],
      graphic: { title: 'Expo map', rows: [['Hall', 'Zone'], ['Hall A', 'Furniture'], ['Hall B', 'Kitchen'], ['Hall C', 'Garden'], ['Hall D', 'Lighting']] },
      qs: [
        { q: 'Why has the demonstration been moved?', opts: ['The chef is late.', 'There is a lighting problem.', 'More people are expected.', 'Hall B is being cleaned.'], ans: 1, why: 'because of a lighting problem' },
        { q: 'Look at the graphic. In which zone will the demonstration take place?', opts: ['Furniture.', 'Kitchen.', 'Garden.', 'Lighting.'], ans: 3, why: 'ย้ายไป Hall D ดูแผนผัง Hall D คือโซน Lighting' },
        { q: 'How can listeners enter the lucky draw?', opts: ['By visiting the information desk.', 'By buying a sofa.', 'By downloading an app.', 'By attending the demonstration.'], ans: 0, why: 'visit the information desk to enter our lucky draw' }
      ] }
  ]);
})();
