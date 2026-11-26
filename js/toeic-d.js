/* Speakeasy: ติว TOEIC ส่วนที่ 4: Part 6 เติมคำในข้อความ และ Part 7 อ่านจับใจความ
   Part 6: ช่องว่างในข้อความเขียนเป็น {1} {2} {3} {4} ตรงกับคำถามตามลำดับ
   Part 7: docs คือเอกสาร 1 ถึง 3 ชิ้นในชุดเดียวกัน */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.p6 = [
    { kind: 'อีเมล', title: 'To: All staff / Subject: Parking lot repairs',
      text: 'Dear colleagues,\nThe parking lot behind our building will be {1} next week. Work will begin on Monday morning and is expected to last five days. {2} this time, please park in the public garage on Lake Street. The company will {3} the cost of parking for all employees. Simply keep your receipts and submit them to the finance office. {4}\nThank you for your understanding.\nFacilities Department',
      qs: [
        { opts: ['repair', 'repaired', 'repairing', 'repairs'], ans: 1, why: 'will be + V3 เป็น passive ลานจอดรถ "ถูกซ่อม"' },
        { opts: ['During', 'While', 'Since', 'Until'], ans: 0, why: 'During + คำนาม (this time) = ในช่วงเวลานี้ ส่วน While ต้องตามด้วยประโยค' },
        { opts: ['charge', 'cover', 'raise', 'spend'], ans: 1, why: 'cover the cost = ออกค่าใช้จ่ายให้ ประโยคถัดไปบอกให้เก็บใบเสร็จมาเบิก' },
        { opts: ['The garage is closed on weekends.', 'You will be reimbursed at the end of the month.', 'Our new building opened last year.', 'Please drive carefully in the rain.'], ans: 1, why: 'ต่อจากเรื่องส่งใบเสร็จ ประโยคที่เข้ากันคือ จะได้รับเงินคืนตอนสิ้นเดือน (reimbursed = ได้เงินคืน)' }
      ] },
    { kind: 'ประกาศ', title: 'Notice to customers',
      text: 'Greenleaf Supermarket is pleased to announce that our store hours are {1}. Starting April 1, we will open at 7 a.m. instead of 8 a.m., and we will close at 11 p.m. This change is a {2} to the many requests we have received from customers who shop before work. {3}, our bakery will now offer fresh bread from opening time. {4}',
      qs: [
        { opts: ['extend', 'extending', 'being extended', 'extension'], ans: 2, why: 'are being extended = กำลังถูกขยาย (passive continuous) เวลาเปิดถูกขยายให้นานขึ้น' },
        { opts: ['response', 'respond', 'responsive', 'responded'], ans: 0, why: 'a ___ to ต้องเป็นคำนาม response = การตอบสนอง' },
        { opts: ['However', 'In addition', 'Otherwise', 'Instead'], ans: 1, why: 'เพิ่มข้อมูลดี ๆ อีกเรื่อง ใช้ In addition = นอกจากนี้' },
        { opts: ['We apologize for the price increase.', 'We look forward to serving you earlier.', 'The bakery will close next month.', 'Parking is not available at night.'], ans: 1, why: 'ปิดประกาศเรื่องเปิดเช้าขึ้น ประโยคที่เข้ากันคือ ยินดีให้บริการคุณเร็วขึ้น' }
      ] },
    { kind: 'จดหมายตอบรับ', title: 'Dear Mr. Suzuki,',
      text: 'Thank you for your {1} in the position of sales coordinator at Horizon Travel. We were very impressed by your experience in the tourism industry. We would like to invite you to an interview on Tuesday, May 14, at 10 a.m. The interview {2} about one hour and will include a short presentation. {3} Please bring a copy of your work certificates. If this time is not convenient, please call me so that we can {4} another date.\nSincerely,\nNadia Rahman, Human Resources',
      qs: [
        { opts: ['interest', 'interested', 'interesting', 'interests'], ans: 0, why: 'your + คำนาม: your interest in the position = ความสนใจในตำแหน่ง' },
        { opts: ['lasted', 'will last', 'has lasted', 'lasting'], ans: 1, why: 'การสัมภาษณ์ยังไม่เกิด เป็นอนาคต will last' },
        { opts: ['You should prepare a ten-minute talk about a travel package.', 'We have already hired someone for the job.', 'Our office was renovated last year.', 'You can pay by credit card.'], ans: 0, why: 'ประโยคก่อนหน้าพูดถึง presentation จึงต่อด้วยรายละเอียดว่าให้เตรียมพูด 10 นาที' },
        { opts: ['arrange', 'arrive', 'agree', 'apply'], ans: 0, why: 'arrange another date = นัดวันใหม่' }
      ] },
    { kind: 'บทความในจดหมายข่าว', title: 'Employee of the Month',
      text: 'This month\'s award goes to Priya Nair from the customer service team. Since joining the company two years ago, Priya {1} more than five hundred customer complaints. Her manager describes her as patient and {2}. {3} Priya also volunteered to train six new team members this spring. Please join us in {4} Priya at the staff lunch on Friday.',
      qs: [
        { opts: ['resolves', 'resolved', 'has resolved', 'will resolve'], ans: 2, why: 'Since joining ... two years ago บอกช่วงจากอดีตถึงตอนนี้ ใช้ present perfect has resolved' },
        { opts: ['rely', 'reliable', 'reliably', 'reliability'], ans: 1, why: 'patient and ___ เชื่อมคุณศัพท์สองคำ ใช้ reliable' },
        { opts: ['Customer complaints have doubled this year.', 'In addition to her regular duties,', 'She will retire next month.', 'The lunch will be held outdoors.'], ans: 1, why: 'ประโยคถัดไปมี also บอกงานเพิ่มเติม ช่องนี้ต้องเชื่อมเข้าประโยคนั้น In addition to her regular duties, Priya also volunteered...' },
        { opts: ['congratulate', 'congratulating', 'congratulation', 'congratulated'], ans: 1, why: 'join us in + V-ing: join us in congratulating' }
      ] }
  ];

  T.p7 = [
    { kind: 'ประกาศรับสมัครงาน', docs: [{ title: 'Job opening: Administrative Assistant', text: 'Bluewave Logistics is seeking a full-time administrative assistant for its Bangkok office. Responsibilities include answering phone calls, scheduling meetings, and ordering office supplies. Candidates should have at least one year of office experience and good computer skills. Knowledge of Thai and English is required; Chinese is a plus. To apply, send your résumé and a cover letter to jobs@bluewave.example.com by June 30. Only shortlisted candidates will be contacted.' }],
      qs: [
        { q: 'What is NOT mentioned as a responsibility of the job?', opts: ['Answering the phone.', 'Arranging meetings.', 'Ordering supplies.', 'Training new staff.'], ans: 3, why: 'ประกาศพูดถึงรับโทรศัพท์ นัดประชุม สั่งของ แต่ไม่ได้พูดถึงการฝึกพนักงานใหม่' },
        { q: 'Which language is described as an advantage but not required?', opts: ['Thai.', 'English.', 'Chinese.', 'Japanese.'], ans: 2, why: 'Chinese is a plus = ภาษาจีนเป็นข้อได้เปรียบ' },
        { q: 'What will happen after June 30?', opts: ['All applicants will be called.', 'Some applicants will be contacted.', 'The office will move.', 'A training course will start.'], ans: 1, why: 'Only shortlisted candidates will be contacted = จะติดต่อเฉพาะผู้ที่ผ่านการคัดเลือก' }
      ] },
    { kind: 'แชตข้อความ', docs: [{ title: 'Text message chain', text: 'Mark Ellis (9:12): Hi Jenny, are you at the trade fair yet?\nJenny Cho (9:14): Yes, I\'m at our booth. The banner arrived, but the brochures didn\'t.\nMark Ellis (9:15): That\'s strange. The printer said they were delivered yesterday.\nJenny Cho (9:16): Maybe they went to the main office.\nMark Ellis (9:18): I\'ll check with reception. If they\'re here, I\'ll bring them over by eleven.\nJenny Cho (9:19): Thanks. That works. The fair doesn\'t get busy until lunchtime.' }],
      qs: [
        { q: 'What problem does Ms. Cho mention?', opts: ['The booth is too small.', 'Some materials are missing.', 'The banner is damaged.', 'The fair was cancelled.'], ans: 1, why: 'the brochures didn\'t (arrive) = เอกสารแนะนำยังมาไม่ถึง' },
        { q: 'At 9:19, what does Ms. Cho mean when she writes, "That works"?', opts: ['The printer is working again.', 'She agrees with Mr. Ellis\'s plan.', 'She has finished her work.', 'The banner looks good.'], ans: 1, why: 'Mark เสนอจะเอามาให้ก่อน 11 โมง Jenny ตอบ That works = ได้ เห็นด้วยกับแผนนั้น' },
        { q: 'What will Mr. Ellis probably do next?', opts: ['Call the printer.', 'Ask the reception desk.', 'Print new brochures.', 'Go to lunch.'], ans: 1, why: 'I\'ll check with reception' }
      ] },
    { kind: 'ใบแจ้งหนี้', docs: [{ title: 'Invoice No. 4471 / Sunrise Catering', text: 'Customer: Tera Engineering Co.\nEvent date: March 18\nLunch boxes (120 x 150 baht): 18,000 baht\nCoffee and tea service: 3,500 baht\nDelivery: free (orders over 15,000 baht)\nTotal: 21,500 baht\nPayment is due within 14 days of the event. A 5% late fee will be added to payments received after the due date. For questions, contact accounts@sunrise.example.com.' }],
      qs: [
        { q: 'How many people was the lunch most likely ordered for?', opts: ['15.', '120.', '150.', '180.'], ans: 1, why: 'Lunch boxes (120 x 150 baht) คือ 120 กล่อง ราคากล่องละ 150 บาท' },
        { q: 'Why was there no delivery charge?', opts: ['The customer picked up the food.', 'The order was larger than a certain amount.', 'It was the customer\'s first order.', 'The event was cancelled.'], ans: 1, why: 'free (orders over 15,000 baht) ส่งฟรีเพราะยอดเกิน 15,000 บาท' },
        { q: 'What will happen if Tera Engineering pays on April 10?', opts: ['It will receive a discount.', 'It will pay an additional fee.', 'The order will be cancelled.', 'Delivery will be charged.'], ans: 1, why: 'ต้องจ่ายภายใน 14 วันหลัง 18 มีนาคม (คือ 1 เมษายน) จ่าย 10 เมษายนจึงเลยกำหนด ต้องจ่ายค่าปรับ 5%' }
      ] },
    { kind: 'บทความ', docs: [{ title: 'Local firm goes green', text: 'Chiang Mai furniture maker Teak & Oak announced last week that it now uses only wood from certified sustainable forests. The change took three years to complete, according to company founder Arun Wongsa. "Some of our suppliers could not meet the new standards at first," he said, "so we worked with them to improve their practices." The company also replaced its old delivery trucks with electric vehicles in January. Mr. Wongsa says that customers, especially those overseas, have responded positively, and export orders rose by 30 percent last quarter. The company plans to open a showroom in Singapore next year.' }],
      qs: [
        { q: 'What is the article mainly about?', opts: ['A new furniture design.', 'A company\'s environmental changes.', 'The history of teak wood.', 'A problem with delivery trucks.'], ans: 1, why: 'ทั้งบทพูดถึงไม้จากป่าที่ยั่งยืนและรถไฟฟ้า = การเปลี่ยนแปลงด้านสิ่งแวดล้อม' },
        { q: 'Why did the change take a long time?', opts: ['Some suppliers needed help to meet standards.', 'The company had no money.', 'The government did not allow it.', 'Customers did not want it.'], ans: 0, why: 'Some of our suppliers could not meet the new standards at first, so we worked with them' },
        { q: 'In the article, the word "responded" is closest in meaning to', opts: ['answered a letter', 'reacted', 'paid', 'complained'], ans: 1, why: 'responded positively ในบริบทนี้คือ ตอบรับ หรือมีปฏิกิริยาในทางที่ดี = reacted' },
        { q: 'What is indicated about Teak & Oak?', opts: ['It plans to expand abroad.', 'It was founded last year.', 'It sells only in Thailand.', 'It closed a factory.'], ans: 0, why: 'plans to open a showroom in Singapore = จะขยายไปต่างประเทศ ข้อ C ผิดเพราะมีออร์เดอร์ส่งออก' }
      ] },
    { kind: 'อีเมลกับตาราง (สองเรื่อง)', docs: [
        { title: 'Schedule: Leadership Workshop, Riverside Hotel', text: '9:00 Welcome and introductions (Room A)\n9:30 Effective communication / Speaker: Dr. Helen Ford (Room A)\n11:00 Managing remote teams / Speaker: Raj Patel (Room B)\n12:30 Lunch (Garden Terrace)\n14:00 Planning for growth / Speaker: Kim Soo-jin (Room B)\n15:30 Closing remarks (Room A)' },
        { title: 'Email / From: Dana Lopez / To: Workshop participants', text: 'Dear participants,\nPlease note one change to the workshop schedule. Mr. Patel\'s flight has been delayed, so he will now give his session in the afternoon, at the time originally planned for Ms. Kim. Ms. Kim has kindly agreed to give her session in the morning instead. Rooms will not change. Lunch will be served as planned.\nBest regards,\nDana Lopez, Event Coordinator' }],
      qs: [
        { q: 'Why was the email sent?', opts: ['To cancel the workshop.', 'To announce a schedule change.', 'To introduce a new speaker.', 'To change the hotel.'], ans: 1, why: 'Please note one change to the workshop schedule' },
        { q: 'What time will Mr. Patel give his session?', opts: ['9:30.', '11:00.', '14:00.', '15:30.'], ans: 2, why: 'ต้องรวมสองเอกสาร: อีเมลบอกว่าเขาจะพูดในเวลาเดิมของ Ms. Kim และตารางบอกว่า Ms. Kim อยู่ 14:00' },
        { q: 'Where will Ms. Kim give her session?', opts: ['Room A.', 'Room B.', 'The Garden Terrace.', 'The hotel lobby.'], ans: 1, why: 'Rooms will not change และตารางเดิมของ Ms. Kim อยู่ Room B' },
        { q: 'Why did the schedule change?', opts: ['A speaker\'s travel was delayed.', 'A room was not available.', 'Lunch was moved.', 'A speaker was ill.'], ans: 0, why: 'Mr. Patel\'s flight has been delayed' }
      ] },
    { kind: 'เว็บไซต์กับรีวิว (สองเรื่อง)', docs: [
        { title: 'Web page: CleanPro Office Cleaning', text: 'Basic plan: 3,000 baht per month, cleaning twice a week.\nStandard plan: 5,000 baht per month, cleaning four times a week, includes window cleaning.\nPremium plan: 8,000 baht per month, daily cleaning, includes window and carpet cleaning.\nAll plans include a free first visit. Sign a 12-month contract and get 10% off.' },
        { title: 'Customer review / by Ploy S.', text: 'We have used CleanPro for six months at our small design studio. The staff are friendly and always on time. Our plan includes window cleaning, which makes a big difference because our office has large windows. We do not need carpet cleaning since our floors are wooden. My only complaint is that they sometimes forget to empty the recycling bins. Overall, I would recommend them.' }],
      qs: [
        { q: 'What do all the cleaning plans include?', opts: ['Carpet cleaning.', 'A free first visit.', 'Daily cleaning.', 'A 10% discount.'], ans: 1, why: 'All plans include a free first visit (ส่วนลด 10% ต้องเซ็นสัญญา 12 เดือนก่อน)' },
        { q: 'Which plan does Ploy most likely use?', opts: ['Basic.', 'Standard.', 'Premium.', 'A custom plan.'], ans: 1, why: 'ต้องรวมสองเรื่อง: รีวิวบอกว่าแผนที่ใช้มีทำความสะอาดกระจกแต่ไม่ต้องทำพรม ตรงกับ Standard แผนเดียว (Basic ไม่มีกระจก Premium มีพรมด้วย)' },
        { q: 'What problem does Ploy mention?', opts: ['The staff are often late.', 'The price is too high.', 'Recycling bins are not always emptied.', 'The windows are not cleaned well.'], ans: 2, why: 'they sometimes forget to empty the recycling bins' },
        { q: 'In the review, the word "difference" is closest in meaning to', opts: ['change in quality', 'disagreement', 'distance', 'price'], ans: 0, why: 'makes a big difference = ทำให้ดีขึ้นมาก ความแตกต่างในเชิงคุณภาพ' }
      ] },
    { kind: 'ประกาศ แบบฟอร์ม และอีเมล (สามเรื่อง)', docs: [
        { title: 'Notice: Annual Health Check', text: 'The annual health check for all employees will take place on August 6 and 7 in the training room on the 5th floor. Each check takes about 30 minutes. Employees in the production department should attend on August 6; all other departments on August 7. Please register by July 25 using the online form.' },
        { title: 'Online registration form', text: 'Name: Somsak Phrom\nDepartment: Production\nPreferred date: August 7\nPreferred time: 10:00\nNote: I will be at a supplier meeting all day on August 6.' },
        { title: 'Email / From: HR / To: Somsak Phrom', text: 'Dear Mr. Phrom,\nThank you for registering. Normally, production staff attend on the first day, but we understand that you have a meeting. We have booked you for 10:30 on August 7, as 10:00 is already full. Please bring your employee ID card.\nHR Department' }],
      qs: [
        { q: 'Where will the health check take place?', opts: ['At a hospital.', 'In the training room.', 'In the production area.', 'At a supplier\'s office.'], ans: 1, why: 'in the training room on the 5th floor' },
        { q: 'Why did Mr. Phrom choose August 7?', opts: ['He will be busy on August 6.', 'He works in a different department.', 'The first day was full.', 'He prefers the afternoon.'], ans: 0, why: 'I will be at a supplier meeting all day on August 6' },
        { q: 'What is suggested about Mr. Phrom\'s registration?', opts: ['It was submitted late.', 'It did not follow the usual department schedule.', 'It was rejected.', 'It was for a family member.'], ans: 1, why: 'ประกาศให้ฝ่ายผลิตมาวันที่ 6 แต่เขาเลือกวันที่ 7 อีเมลจึงบอกว่า Normally, production staff attend on the first day' },
        { q: 'At what time will Mr. Phrom have his health check?', opts: ['10:00.', '10:30.', '11:00.', 'He has not been given a time.'], ans: 1, why: 'We have booked you for 10:30 on August 7 เพราะ 10:00 เต็มแล้ว' }
      ] }
  ];
})();
