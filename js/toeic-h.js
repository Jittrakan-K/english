/* Speakeasy: ติว TOEIC ชุดเพิ่ม: Part 5 และ Part 6 */
(function () {
  var T = window.TOEIC = window.TOEIC || {};

  T.p5 = (T.p5 || []).concat([
    { q: 'The new accounting software will allow staff to process invoices more -------.', opts: ['quick', 'quickly', 'quickness', 'quicker'], ans: 1, tag: 'form', why: 'ขยายกริยา process ใช้กริยาวิเศษณ์ quickly (more quickly = เร็วขึ้น)' },
    { q: 'Mr. Silva has been ------- to regional sales director.', opts: ['promoted', 'promoting', 'promotion', 'promote'], ans: 0, tag: 'verb', why: 'has been + V3 เป็น passive: ได้รับการเลื่อนตำแหน่ง' },
    { q: 'Please keep all receipts ------- you can be reimbursed for your expenses.', opts: ['so that', 'even if', 'as if', 'in case of'], ans: 0, tag: 'conj', why: 'so that + ประโยค = เพื่อที่จะ ส่วน in case of ตามด้วยคำนาม' },
    { q: 'The hotel offers free shuttle service ------- the airport and the city center.', opts: ['among', 'between', 'through', 'within'], ans: 1, tag: 'prep', why: 'between A and B = ระหว่างสองที่' },
    { q: 'Ms. Hall prefers to review contracts ------- rather than ask her assistant.', opts: ['she', 'her', 'herself', 'hers'], ans: 2, tag: 'pron', why: 'ทำเอง ใช้ reflexive herself เน้นว่าทำด้วยตัวเอง' },
    { q: 'Sales of electric scooters have grown ------- since the government lowered taxes.', opts: ['steady', 'steadily', 'steadiness', 'steadied'], ans: 1, tag: 'form', why: 'ขยายกริยา have grown ใช้กริยาวิเศษณ์ steadily' },
    { q: 'The factory will ------- production of the old model at the end of the year.', opts: ['discontinue', 'disconnect', 'dismiss', 'distribute'], ans: 0, tag: 'vocab', why: 'discontinue production = หยุดผลิต' },
    { q: 'Ms. Yamada ------- in Tokyo when she was offered the job in Bangkok.', opts: ['lives', 'was living', 'has lived', 'will live'], ans: 1, tag: 'tense', why: 'เหตุการณ์ยาวในอดีตที่ถูกแทรกด้วย when + past simple ใช้ past continuous was living' },
    { q: 'All visitors must wear a badge ------- they are in the building.', opts: ['while', 'during', 'since', 'unless'], ans: 0, tag: 'conj', why: 'while + ประโยค = ขณะที่ ส่วน during ต้องตามด้วยคำนาม' },
    { q: 'Our customer service team responds to most emails ------- 24 hours.', opts: ['within', 'until', 'since', 'along'], ans: 0, tag: 'prep', why: 'within 24 hours = ภายใน 24 ชั่วโมง' },
    { q: 'The proposal was rejected because the costs were ------- high.', opts: ['too', 'very much', 'enough', 'such'], ans: 0, tag: 'comp', why: 'too + คุณศัพท์ = มากเกินไป เข้ากับเหตุผลที่ถูกปฏิเสธ' },
    { q: 'The company ------- profits rose last year plans to hire 200 new workers.', opts: ['who', 'which', 'whose', 'whom'], ans: 2, tag: 'rel', why: 'whose + คำนาม แสดงความเป็นเจ้าของ: บริษัทที่กำไรของมันเพิ่มขึ้น' },
    { q: 'Neither of the candidates ------- enough experience for the position.', opts: ['have', 'has', 'are having', 'were'], ans: 1, tag: 'agree', why: 'Neither of ... ใช้กริยาเอกพจน์ has' },
    { q: 'Mr. Lopez recommended ------- the meeting to a larger room.', opts: ['move', 'to move', 'moving', 'moved'], ans: 2, tag: 'verb', why: 'recommend ตามด้วย V-ing' },
    { q: 'The ------- of the new safety rules has reduced accidents in the warehouse.', opts: ['introduce', 'introduced', 'introduction', 'introductory'], ans: 2, tag: 'form', why: 'หลัง The ต้องเป็นคำนาม introduction = การนำมาใช้' },
    { q: 'Customers can track their orders online ------- calling our help line.', opts: ['instead of', 'because', 'although', 'in order that'], ans: 0, tag: 'conj', why: 'instead of + V-ing = แทนที่จะ' },
    { q: 'The renovation was finished on time and ------- budget.', opts: ['under', 'below of', 'down', 'beneath to'], ans: 0, tag: 'prep', why: 'under budget = ใช้เงินไม่เกินงบ (สำนวนคู่กับ on time)' },
    { q: 'Please ------- that all lights are turned off before leaving the office.', opts: ['ensure', 'assure', 'insure', 'reassure'], ans: 0, tag: 'vocab', why: 'ensure that = ทำให้แน่ใจว่า ส่วน assure ต้องมีกรรมเป็นคน (assure you that)' },
    { q: 'This is the ------- sales result the company has achieved in ten years.', opts: ['good', 'better', 'best', 'well'], ans: 2, tag: 'comp', why: 'the + ขั้นสุด และมี in ten years ใช้ best' },
    { q: 'The workshop is designed for employees ------- want to improve their presentation skills.', opts: ['who', 'which', 'whose', 'what'], ans: 0, tag: 'rel', why: 'ขยายคน employees และเป็นประธานของ want ใช้ who' },
    { q: 'Mr. Chang ------- the report by the time the manager arrived.', opts: ['finishes', 'has finished', 'had finished', 'will finish'], ans: 2, tag: 'tense', why: 'เสร็จก่อนอีกเหตุการณ์ในอดีต (arrived) ใช้ past perfect had finished' },
    { q: 'Employees who work overtime are ------- to an extra day of leave.', opts: ['entitled', 'entitle', 'entitlement', 'entitling'], ans: 0, tag: 'verb', why: 'be entitled to = มีสิทธิ์ได้รับ' },
    { q: 'The new branch has attracted ------- customers than we expected.', opts: ['much', 'more', 'most', 'many'], ans: 1, tag: 'comp', why: 'มี than ใช้ more' },
    { q: 'Ms. Kim spoke ------- about the company\'s plans for the future.', opts: ['confident', 'confidence', 'confidently', 'confide'], ans: 2, tag: 'form', why: 'ขยายกริยา spoke ใช้ confidently' },
    { q: 'The museum will be closed to the public ------- further notice.', opts: ['until', 'by', 'for', 'since'], ans: 0, tag: 'prep', why: 'until further notice = จนกว่าจะมีประกาศเพิ่มเติม (สำนวนตายตัว)' },
    { q: 'Every manager and supervisor ------- required to attend the safety training.', opts: ['is', 'are', 'be', 'were'], ans: 0, tag: 'agree', why: 'Every A and B ใช้กริยาเอกพจน์ is' },
    { q: 'The marketing team is working on a campaign to ------- younger customers.', opts: ['attract', 'attraction', 'attractive', 'attractively'], ans: 0, tag: 'form', why: 'หลัง to ใช้กริยาช่องหนึ่ง attract' },
    { q: 'Applications submitted after the deadline will not be -------.', opts: ['considered', 'considerable', 'considerate', 'consideration'], ans: 0, tag: 'verb', why: 'will not be + V3 (passive) considered = จะไม่ถูกพิจารณา ระวัง considerable (มาก) กับ considerate (มีน้ำใจ)' },
    { q: 'The CEO will give a speech, ------- which lunch will be served.', opts: ['after', 'then', 'next', 'later'], ans: 0, tag: 'prep', why: 'after which = หลังจากนั้น (บุพบท + which)' },
    { q: 'Our sales figures for the third quarter were ------- impressive.', opts: ['particular', 'particularly', 'particularity', 'particulars'], ans: 1, tag: 'form', why: 'ขยายคุณศัพท์ impressive ใช้กริยาวิเศษณ์ particularly' }
  ]);

  T.p6 = (T.p6 || []).concat([
    { kind: 'อีเมลลูกค้า', title: 'Subject: Your order #88213',
      text: 'Dear Ms. Bauer,\nThank you for shopping with HomeStyle. We regret to inform you that the lamp you ordered is {1} out of stock. We expect to receive new stock in about three weeks. {2} If you would prefer not to wait, we can offer you a similar model at the same price. {3}, you may cancel your order and receive a full refund. Please reply to this email to let us know your {4}.\nBest regards,\nHomeStyle Customer Care',
      qs: [
        { opts: ['temporary', 'temporarily', 'temporariness', 'temper'], ans: 1, why: 'ขยายคุณศัพท์ out of stock ใช้กริยาวิเศษณ์ temporarily = หมดชั่วคราว' },
        { opts: ['Your order will be shipped as soon as it arrives.', 'The lamp is our best-selling product.', 'We have opened a new store downtown.', 'Thank you for your payment.'], ans: 0, why: 'ต่อจากเรื่องรอของสามสัปดาห์ ประโยคที่ต่อได้คือ จะส่งทันทีที่ของมาถึง' },
        { opts: ['Therefore', 'Alternatively', 'Similarly', 'Meanwhile'], ans: 1, why: 'เสนอทางเลือกที่สอง ใช้ Alternatively = หรืออีกทางหนึ่ง' },
        { opts: ['decide', 'decisive', 'decision', 'decided'], ans: 2, why: 'your + คำนาม: your decision' }
      ] },
    { kind: 'ประกาศภายใน', title: 'Memo: New visitor policy',
      text: 'To all staff:\nFrom March 1, all visitors to our office must register at the front desk and wear a visitor badge {1} in the building. Employees who are expecting a guest should inform reception {2} advance. {3} This will help reception prepare badges and reduce waiting times. Thank you for helping us keep our workplace {4}.\nAdministration Office',
      qs: [
        { opts: ['during', 'while', 'when', 'for'], ans: 1, why: 'while (they are) in the building ละประธานและ be ได้ ส่วน during ต้องตามด้วยคำนาม' },
        { opts: ['in', 'on', 'at', 'by'], ans: 0, why: 'in advance = ล่วงหน้า (สำนวนตายตัว)' },
        { opts: ['Please include the guest\'s name and arrival time.', 'Visitors enjoy our new lobby.', 'The front desk opens at noon.', 'Badges may be kept as souvenirs.'], ans: 0, why: 'ต่อจากให้แจ้งต้อนรับล่วงหน้า ประโยคถัดไปบอกว่าให้แจ้งอะไร และประโยคหลังพูดถึงการเตรียมบัตร' },
        { opts: ['secure', 'security', 'securely', 'secures'], ans: 0, why: 'keep + กรรม + คุณศัพท์: keep our workplace secure' }
      ] },
    { kind: 'โฆษณาในนิตยสาร', title: 'Discover Green Valley Resort',
      text: 'Looking for a quiet place to relax? Green Valley Resort is just two hours from Bangkok, {1} beautiful mountains and rice fields. Each of our forty villas {2} a private garden and a view of the valley. {3} Guests can also enjoy our spa, cooking classes, and guided bicycle tours. Book before June 30 and receive a 15 percent discount on stays of three nights or {4}.',
      qs: [
        { opts: ['surround', 'surrounded by', 'surrounding by', 'to surround'], ans: 1, why: 'surrounded by = ถูกล้อมรอบด้วย ขยายรีสอร์ท' },
        { opts: ['have', 'has', 'having', 'are had'], ans: 1, why: 'Each of ... ใช้กริยาเอกพจน์ has' },
        { opts: ['Our restaurant serves dishes made with vegetables from our own farm.', 'The resort was sold last year.', 'Traffic in Bangkok is heavy.', 'Please return your keys at the end of your stay.'], ans: 0, why: 'ย่อหน้ากำลังพูดถึงจุดเด่นของรีสอร์ท ประโยคถัดไปมี also เพิ่มบริการอื่น จึงต้องเป็นจุดเด่นอีกข้อ' },
        { opts: ['more', 'most', 'many', 'much'], ans: 0, why: 'three nights or more = สามคืนขึ้นไป' }
      ] },
    { kind: 'จดหมายถึงผู้เช่า', title: 'Dear Tenants,',
      text: 'Please be advised that the water supply to the building will be shut off on Tuesday, May 9, from 9 a.m. to 3 p.m. This is necessary {1} we can replace the main water pipe. We recommend {2} some water in advance for drinking and cooking. {3} We apologize for any inconvenience and thank you for your {4}.\nBuilding Management',
      qs: [
        { opts: ['so that', 'such as', 'as well', 'in spite of'], ans: 0, why: 'so that + ประโยค = เพื่อที่จะ' },
        { opts: ['store', 'to store', 'storing', 'stored'], ans: 2, why: 'recommend + V-ing' },
        { opts: ['The work may finish earlier if there are no problems.', 'The building was built in 1995.', 'Rent is due on the first of each month.', 'The pool is open to all tenants.'], ans: 0, why: 'ยังพูดถึงงานปิดน้ำ ประโยคที่ต่อได้คือ อาจเสร็จเร็วกว่ากำหนด' },
        { opts: ['patient', 'patience', 'patiently', 'patients'], ans: 1, why: 'your + คำนาม: thank you for your patience ระวัง patients ที่แปลว่าคนไข้' }
      ] }
  ]);
})();
