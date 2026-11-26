/* Fluent: หัวข้อพูดจับเวลา และคลังวลีช่วยให้พูดลื่น
   TOPICS: q คำถาม/หัวข้อ, th คำแปล, help วลีช่วยเริ่ม, sample ตัวอย่างคำตอบ (อ่านหลังพูดเสร็จ) */
window.TOPICS = [
  { lvl: 'A1', q: 'Introduce yourself.', th: 'แนะนำตัวเอง', help: ['My name is ...', 'I am ... years old.', 'I live in ...', 'I like ...'], sample: 'Hi, my name is Nok. I am twenty-five years old and I live in Bangkok. I am a nurse. I like music and cooking. I have one sister.' },
  { lvl: 'A1', q: 'Describe your family.', th: 'เล่าเรื่องครอบครัวของคุณ', help: ['There are ... people in my family.', 'My father is ...', 'I have ...'], sample: 'There are four people in my family: my father, my mother, my brother and me. My father is a farmer and my mother is a teacher. My brother is younger than me. We love eating together.' },
  { lvl: 'A1', q: 'What do you do every morning?', th: 'ทุกเช้าคุณทำอะไรบ้าง', help: ['I get up at ...', 'Then I ...', 'After that, I ...'], sample: 'I get up at six o\'clock. Then I take a shower and get dressed. I have coffee and bread for breakfast. After that, I go to work by bus.' },
  { lvl: 'A1', q: 'Talk about your favorite food.', th: 'พูดถึงอาหารที่ชอบที่สุด', help: ['My favorite food is ...', 'It is ...', 'I eat it ...'], sample: 'My favorite food is green curry. It is spicy and a little sweet. I eat it with rice. My mother cooks it very well, so I eat it every Sunday.' },
  { lvl: 'A1', q: 'Describe your room.', th: 'บรรยายห้องของคุณ', help: ['My room is ...', 'There is ...', 'There are ...'], sample: 'My room is small but nice. There is a bed, a desk and a big window. There are many books on the shelf. I like my room because it is quiet.' },
  { lvl: 'A2', q: 'What did you do last weekend?', th: 'สุดสัปดาห์ที่แล้วคุณทำอะไร', help: ['On Saturday, I ...', 'In the evening, we ...', 'It was ...'], sample: 'Last weekend was great. On Saturday, I went to the market with my friend and we bought some clothes. In the evening, we watched a movie. On Sunday, I stayed at home and cleaned my apartment.' },
  { lvl: 'A2', q: 'Describe your hometown.', th: 'บรรยายบ้านเกิดของคุณ', help: ['I come from ...', 'It is famous for ...', 'There are ...', 'The best thing is ...'], sample: 'I come from Chiang Rai, in the north of Thailand. It is a small city with beautiful mountains. It is famous for tea and coffee. The weather is cool in winter. The best thing about it is the people. They are very friendly.' },
  { lvl: 'A2', q: 'Tell me about a trip you remember.', th: 'เล่าทริปที่จำได้', help: ['A few years ago, I went to ...', 'We stayed ...', 'The best part was ...'], sample: 'Two years ago, I went to Japan with my family. We stayed in Tokyo for five days. We visited temples and ate a lot of sushi. The best part was seeing the snow for the first time.' },
  { lvl: 'A2', q: 'What do you usually do after work or school?', th: 'หลังเลิกงานหรือเลิกเรียนคุณทำอะไร', help: ['I usually ...', 'Sometimes I ...', 'I never ...'], sample: 'I usually go home and rest for an hour. Then I cook dinner. Sometimes I go to the gym with my friend. I never stay up late because I get up early.' },
  { lvl: 'A2', q: 'Describe your best friend.', th: 'บรรยายเพื่อนสนิทของคุณ', help: ['My best friend is ...', 'He/She is very ...', 'We met ...', 'We often ...'], sample: 'My best friend is Ploy. We met at university ten years ago. She is very funny and kind. We often go to cafés together and talk for hours. She always helps me when I have a problem.' },
  { lvl: 'A2', q: 'What are your plans for next year?', th: 'ปีหน้าคุณมีแผนอะไร', help: ['Next year, I\'m going to ...', 'I want to ...', 'I hope ...'], sample: 'Next year, I\'m going to study English every day because I want to get a better job. I also want to save money for a trip to Korea. I hope I can speak English well by the end of the year.' },
  { lvl: 'B1', q: 'Is it better to live in the city or the countryside?', th: 'อยู่เมืองหรืออยู่ชนบทดีกว่ากัน', help: ['In my opinion, ...', 'On the one hand, ...', 'On the other hand, ...', 'That\'s why ...'], sample: 'In my opinion, it depends on your age. On the one hand, the city has more jobs, better hospitals and more things to do. On the other hand, the countryside is quieter, cheaper and the air is cleaner. When I\'m young, I prefer the city, but I would like to retire in the countryside.' },
  { lvl: 'B1', q: 'Talk about a problem you solved.', th: 'เล่าปัญหาที่คุณเคยแก้ได้', help: ['Once, I had a problem with ...', 'At first, I ...', 'In the end, ...', 'I learned that ...'], sample: 'Once, I had a problem with a customer who was very angry because his order was late. At first, I didn\'t know what to say. Then I listened carefully and apologized. I offered a discount and called him the next day. In the end, he became a regular customer. I learned that listening is the most important skill.' },
  { lvl: 'B1', q: 'How do you deal with stress?', th: 'คุณจัดการความเครียดอย่างไร', help: ['When I feel stressed, I ...', 'It helps me ...', 'I also try to ...'], sample: 'When I feel stressed, I usually go for a run or a long walk. It helps me clear my mind. I also try to sleep early and stay away from my phone at night. If the problem is big, I talk to my friends about it.' },
  { lvl: 'B1', q: 'Describe a job you would love to have.', th: 'งานในฝันของคุณคืออะไร', help: ['I would love to be ...', 'because ...', 'The most exciting part would be ...', 'I would need to ...'], sample: 'I would love to be a travel photographer because I enjoy taking pictures and visiting new places. The most exciting part would be meeting people from different cultures. I would need to improve my English and learn more about cameras.' },
  { lvl: 'B1', q: 'What are the advantages and disadvantages of social media?', th: 'ข้อดีข้อเสียของโซเชียลมีเดีย', help: ['One advantage is ...', 'Another benefit is ...', 'However, ...', 'Overall, ...'], sample: 'One advantage of social media is that we can stay in touch with friends easily. Another benefit is that we can learn new things for free. However, people spend too much time on their phones, and there is a lot of fake news. Overall, I think it is useful if we use it carefully.' },
  { lvl: 'B1', q: 'Tell me about something you learned recently.', th: 'เล่าสิ่งที่คุณเพิ่งได้เรียนรู้', help: ['Recently, I learned ...', 'I found out that ...', 'It was interesting because ...'], sample: 'Recently, I learned how to make bread at home. I watched some videos and practiced every weekend. At first, my bread was too hard, but now it is soft and delicious. It was interesting because I found out that patience is the secret ingredient.' },
  { lvl: 'B2', q: 'Should university education be free?', th: 'การศึกษามหาวิทยาลัยควรฟรีไหม', help: ['I\'d argue that ...', 'The main reason is ...', 'Critics might say ...', 'Having said that, ...'], sample: 'I\'d argue that university should be free, or at least much cheaper. The main reason is that talented students from poor families can\'t afford it, which wastes their potential. Critics might say that taxpayers shouldn\'t pay for it. Having said that, a better-educated population benefits the whole economy in the long run.' },
  { lvl: 'B2', q: 'How has technology changed the way we work?', th: 'เทคโนโลยีเปลี่ยนวิธีการทำงานอย่างไร', help: ['Over the past decade, ...', 'For instance, ...', 'As a result, ...', 'Looking ahead, ...'], sample: 'Over the past decade, technology has completely changed the way we work. For instance, many people now work remotely and hold meetings online. As a result, we save time on commuting, but it\'s harder to separate work from personal life. Looking ahead, I think AI will take over many repetitive tasks.' },
  { lvl: 'B2', q: 'Describe a decision that changed your life.', th: 'เล่าการตัดสินใจที่เปลี่ยนชีวิตคุณ', help: ['A few years ago, I decided to ...', 'It wasn\'t easy because ...', 'Looking back, ...'], sample: 'A few years ago, I decided to quit a stable job and start my own small business. It wasn\'t easy because I had to take a big financial risk, and my family was worried. Looking back, it was the best decision I\'ve ever made. I learned more in one year than in five years at my old job.' },
  { lvl: 'B2', q: 'What makes a good leader?', th: 'ผู้นำที่ดีควรเป็นอย่างไร', help: ['First and foremost, ...', 'Equally important is ...', 'A good example is ...', 'To sum up, ...'], sample: 'First and foremost, a good leader listens to the team before making decisions. Equally important is the ability to stay calm under pressure. A good example is my first manager, who always took responsibility when things went wrong. To sum up, leadership is more about trust than authority.' },
  { lvl: 'B2', q: 'Is it important to learn a second language?', th: 'การเรียนภาษาที่สองสำคัญไหม', help: ['Absolutely, because ...', 'Not only ..., but also ...', 'From my own experience, ...'], sample: 'Absolutely, because a second language opens doors that would otherwise stay closed. Not only does it help your career, but it also lets you understand other cultures from the inside. From my own experience, learning English has given me access to information, friends and opportunities I could never have had otherwise.' },
  { lvl: 'B2', q: 'What would you change about your city?', th: 'อยากเปลี่ยนอะไรในเมืองของคุณ', help: ['If I could change one thing, ...', 'This would ...', 'Another thing I\'d like to see is ...'], sample: 'If I could change one thing about my city, it would be public transport. More trains and buses would reduce traffic and pollution. Another thing I\'d like to see is more parks and green spaces, because people need places to relax and exercise.' },
  { lvl: 'C1', q: 'Does social media do more harm than good?', th: 'โซเชียลมีเดียมีโทษมากกว่าประโยชน์ไหม', help: ['It\'s a nuanced issue.', 'Admittedly, ...', 'That said, ...', 'Ultimately, ...'], sample: 'It\'s a nuanced issue. Admittedly, social media has given ordinary people a voice and helped communities organize. That said, its business model rewards outrage and keeps us scrolling far longer than is healthy. Ultimately, I think the harm outweighs the good unless platforms are held accountable and users become more deliberate about how they use them.' },
  { lvl: 'C1', q: 'What is the role of failure in success?', th: 'ความล้มเหลวมีบทบาทอย่างไรต่อความสำเร็จ', help: ['Paradoxically, ...', 'Take ... for example.', 'The key distinction is ...'], sample: 'Paradoxically, failure is often the most reliable teacher of success. Take inventors, for example: most of them went through dozens of prototypes before anything worked. The key distinction is between failing and failing to learn. Failure only becomes valuable when we reflect on it honestly and adjust our approach.' },
  { lvl: 'C1', q: 'Should governments regulate artificial intelligence?', th: 'รัฐบาลควรควบคุม AI ไหม', help: ['There\'s a strong case for ...', 'The challenge lies in ...', 'A balanced approach would ...'], sample: 'There\'s a strong case for regulation, given how quickly AI is being deployed in areas like hiring, healthcare and policing. The challenge lies in writing rules that protect people without stifling innovation. A balanced approach would focus on transparency and accountability for high-risk uses, while leaving low-risk applications relatively free.' },
  { lvl: 'C1', q: 'How do you think work will look in twenty years?', th: 'คิดว่าอีกยี่สิบปีการทำงานจะเป็นอย่างไร', help: ['It\'s hard to predict, but ...', 'I suspect that ...', 'What worries me is ...'], sample: 'It\'s hard to predict, but I suspect that the idea of a single lifelong career will have largely disappeared. People will move between projects and keep retraining as technology evolves. What worries me is that those without access to good education may be left behind, which could widen inequality.' },
  { lvl: 'C1', q: 'Talk about a book, film or idea that changed how you think.', th: 'หนังสือ ภาพยนตร์ หรือแนวคิดที่เปลี่ยนวิธีคิดของคุณ', help: ['One idea that really stuck with me is ...', 'What struck me was ...', 'Since then, ...'], sample: 'One idea that really stuck with me is that small habits compound over time. What struck me was how ordinary the advice sounded, yet how rarely people apply it. Since then, I\'ve stopped waiting for motivation and instead focus on doing a little every day, which is exactly how I\'m approaching English.' }
];

/* คลังวลีช่วยให้พูดลื่น: โหลดเข้าคลังศัพท์เป็นชุดคำ ฝึกและเข้าคิวทวนได้เหมือนชุดอื่น */
(window.VOCAB = window.VOCAB || []).push({ lvl: 'A2', text: `
@ fl-time | วลีถ่วงเวลาเมื่อคิดไม่ทัน | Buying time
Let me think.|phr|ขอคิดก่อนนะ
Just a moment.|phr|รอสักครู่
How can I put it?|phr|จะพูดยังไงดีนะ
That's a good question.|phr|เป็นคำถามที่ดีนะ
Well, ...|phr|อืม... (เปิดประโยคขณะคิด)
You know, ...|phr|คือแบบว่า... (ภาษาพูด)
I mean, ...|phr|หมายถึงว่า... (ขยายความ)
Let me see.|phr|ขอดูก่อน / ขอนึกก่อน
Give me a second.|phr|ขอเวลาแป๊บนึง
It's hard to say.|phr|ตอบยากเหมือนกัน
I've never thought about that.|phr|ไม่เคยคิดเรื่องนี้มาก่อนเลย
What's the word?|phr|คำว่าอะไรนะ
I'm not sure how to say this.|phr|ไม่แน่ใจว่าจะพูดยังไง
So, basically, ...|phr|สรุปง่าย ๆ คือ...
Anyway, ...|phr|เอาเถอะ / ยังไงก็ตาม
Where was I?|phr|เมื่อกี้พูดถึงไหนแล้วนะ
As I was saying, ...|phr|อย่างที่พูดไปเมื่อกี้...
Let me start again.|phr|ขอเริ่มใหม่นะ
In other words, ...|phr|พูดอีกอย่างก็คือ...
What I'm trying to say is ...|phr|สิ่งที่ฉันพยายามจะบอกคือ...

@ fl-describe | อธิบายเมื่อนึกคำไม่ออก | When you don't know the word
It's a kind of ...|phr|มันเป็น...ชนิดหนึ่ง
It's like a ...|phr|มันคล้าย ๆ กับ...
It's something you use to ...|phr|เป็นของที่ใช้สำหรับ...
It's a person who ...|phr|เป็นคนที่...
It's a place where ...|phr|เป็นที่ที่...
It looks like ...|phr|หน้าตาเหมือน...
It's the opposite of ...|phr|เป็นคำตรงข้ามกับ...
It's similar to ...|phr|คล้ายกับ...
It's made of ...|phr|ทำจาก...
You use it when ...|phr|ใช้ตอนที่...
What do you call ...?|phr|...เรียกว่าอะไร
How do you say ... in English?|phr|...ภาษาอังกฤษพูดว่ายังไง
What's it called?|phr|มันเรียกว่าอะไรนะ
the thing that ...|phr|ไอ้สิ่งที่...
sort of|phr|ประมาณว่า / ค่อนข้าง
something like that|phr|อะไรประมาณนั้น
roughly|adv|คร่าว ๆ / ประมาณ
I can't remember the name.|phr|จำชื่อไม่ได้
It's on the tip of my tongue.|phr|ติดอยู่ที่ปลายลิ้นแล้ว
Do you know what I mean?|phr|เข้าใจที่ฉันหมายถึงไหม

@ fl-keep | ต่อบทสนทนาไม่ให้เงียบ | Keeping a conversation going
What about you?|phr|แล้วคุณล่ะ
How about you?|phr|แล้วคุณล่ะ (ถามกลับ)
Really? Tell me more.|phr|จริงเหรอ เล่าอีกสิ
That sounds interesting.|phr|ฟังดูน่าสนใจนะ
What happened next?|phr|แล้วเกิดอะไรขึ้นต่อ
How did you feel?|phr|ตอนนั้นรู้สึกยังไง
Why do you say that?|phr|ทำไมถึงพูดแบบนั้น
Have you ever ...?|phr|คุณเคย...ไหม
By the way, ...|phr|ว่าแต่...
Speaking of ...|phr|พูดถึง...
That reminds me, ...|phr|พูดแล้วนึกขึ้นได้...
Me too.|phr|ฉันด้วย
Me neither.|phr|ฉันก็ไม่เหมือนกัน
Same here.|phr|เหมือนกันเลย
No way!|phr|ไม่จริงน่า
You're kidding!|phr|ล้อเล่นน่า
Good for you!|phr|ดีจังเลย
That's too bad.|phr|แย่จัง
Oh, I see.|phr|อ๋อ เข้าใจแล้ว
It was nice talking to you.|phr|ดีใจที่ได้คุยด้วย
`});
(window.VOCAB = window.VOCAB || []).push({ lvl: 'B1', text: `
@ fl-agree | เห็นด้วยและแย้งอย่างสุภาพ | Agreeing and disagreeing
I totally agree.|phr|เห็นด้วยทุกอย่าง
You're absolutely right.|phr|คุณพูดถูกเลย
That's exactly what I think.|phr|ตรงกับที่ฉันคิดเป๊ะ
I see your point, but ...|phr|เข้าใจประเด็นนะ แต่...
I'm not so sure about that.|phr|ไม่ค่อยแน่ใจเรื่องนั้นนะ
I see it a bit differently.|phr|ฉันมองต่างออกไปนิดหน่อย
That's true to some extent.|phr|ก็จริงในระดับหนึ่ง
I agree up to a point.|phr|เห็นด้วยบางส่วน
I'm afraid I disagree.|phr|ขอโทษนะ ฉันไม่เห็นด้วย
Fair point.|phr|ก็มีเหตุผล
Maybe, but have you considered ...?|phr|อาจจะใช่ แต่เคยคิดถึง...ไหม
It depends.|phr|ขึ้นอยู่กับสถานการณ์
That's one way to look at it.|phr|ก็เป็นมุมมองหนึ่ง
I couldn't agree more.|phr|เห็นด้วยที่สุด
Not necessarily.|phr|ไม่จำเป็นเสมอไป
I'd go along with that.|phr|เอาด้วยกับความคิดนั้น
Let's agree to disagree.|phr|เราต่างคนต่างคิดก็แล้วกัน
You have a point there.|phr|ตรงนั้นคุณพูดมีเหตุผล
That's not how I see it.|phr|ฉันไม่ได้มองแบบนั้น
Exactly!|int|ใช่เลย

@ fl-clarify | ขอให้พูดซ้ำและเช็กความเข้าใจ | Checking understanding
Sorry, could you say that again?|phr|ขอโทษนะ ช่วยพูดอีกครั้งได้ไหม
Could you speak a bit more slowly?|phr|ช่วยพูดช้าลงอีกนิดได้ไหม
What do you mean by ...?|phr|...ที่พูดหมายถึงอะไร
Do you mean ...?|phr|หมายถึง...ใช่ไหม
So you're saying that ...?|phr|ก็คือคุณบอกว่า...ใช่ไหม
If I understand correctly, ...|phr|ถ้าฉันเข้าใจไม่ผิด...
Could you give me an example?|phr|ช่วยยกตัวอย่างได้ไหม
Sorry, I didn't catch that.|phr|ขอโทษ ฟังไม่ทัน
Could you spell that?|phr|ช่วยสะกดหน่อยได้ไหม
Let me check I've got this right.|phr|ขอเช็กหน่อยว่าเข้าใจถูกไหม
Does that make sense?|phr|เข้าใจไหม / ฟังดูสมเหตุสมผลไหม
Are you with me?|phr|ตามทันไหม
Just to be clear, ...|phr|เพื่อความชัดเจน...
What I meant was ...|phr|ที่ฉันหมายถึงคือ...
Sorry, that came out wrong.|phr|ขอโทษ พูดออกไปผิดความหมาย
Let me rephrase that.|phr|ขอพูดใหม่อีกแบบนะ
Could you write it down?|phr|ช่วยเขียนให้หน่อยได้ไหม
I'm not following.|phr|ฉันตามไม่ทัน
Got it.|phr|เข้าใจแล้ว
That makes sense.|phr|เข้าใจแล้ว / มีเหตุผล

@ fl-react | แสดงความรู้สึกตอบรับ | Natural reactions
That's amazing!|phr|สุดยอดเลย
How exciting!|phr|น่าตื่นเต้นจัง
What a shame.|phr|น่าเสียดายจัง
I'm sorry to hear that.|phr|เสียใจด้วยนะ
That must be hard.|phr|คงลำบากน่าดู
Congratulations!|int|ยินดีด้วย
Lucky you!|phr|โชคดีจัง
Oh no!|int|ไม่นะ
Seriously?|int|จริงจังเหรอ
I can imagine.|phr|นึกภาพออกเลย
I know what you mean.|phr|เข้าใจเลยว่าหมายถึงอะไร
That's hilarious.|phr|ตลกมาก
That's a relief.|phr|โล่งอกไปที
Don't worry about it.|phr|ไม่ต้องห่วงหรอก
Good point.|phr|ประเด็นดี
Interesting!|int|น่าสนใจ
I had no idea.|phr|ไม่รู้มาก่อนเลย
Wow, that's a lot.|phr|ว้าว เยอะมาก
Sounds fun!|phr|ฟังดูสนุกนะ
Fingers crossed.|phr|ขอให้โชคดี / ภาวนาให้สำเร็จ
`});
