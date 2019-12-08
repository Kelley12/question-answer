const request = require('supertest');
const app = require('../src/app');

test('Should ask a question and get an answer', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "What do you do?" })
        .send()
        .expect(200);
    expect(response.text).not.toBeNull();
});

test('Should answer: PING', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "PING" })
        .send()
        .expect(200);
    expect(response.text).toBe("PONG");
});

test('Should answer: What is your name?', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "What is your name?" })
        .send()
        .expect(200);
    expect(response.text).toBe("Blake Kelley");
});

test('Should answer: What is your quest?', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "What is your quest?" })
        .send()
        .expect(200);
    expect(response.text).toBe("coding");
});

test('Should answer: 1111 + 1369 + 936 + 982 = ?', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "1111 + 1369 + 936 + 982 = ?" })
        .send()
        .expect(200);
    expect(response.text).toBe("4398");
});

test('Should answer: 1341 + 704 + 1150 + 188 = ?', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "1341 + 704 + 1150 + 188 = ?" })
        .send()
        .expect(200);
    expect(response.text).toBe("3383");
});

test('Should answer: 590 + 367 + 28 = ?', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "590 + 367 + 28 = ?" })
        .send()
        .expect(200);
    expect(response.text).toBe("985");
});

test('Should answer: redwood worm jentacular ratoon', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "redwood worm jentacular ratoon" })
        .send()
        .expect(200);
    expect(response.text).toBe("4-16-11");
});

test('Should answer: ethereal gale fort sunset', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "ethereal gale fort sunset" })
        .send()
        .expect(200);
    expect(response.text).toBe("4-13-9");
});

test('Should answer: swing fancy', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "swing fancy" })
        .send()
        .expect(200);
    expect(response.text).toBe("2-8-2");
});

test('Should answer: < 55 36 20 13 6 20 49 49 28 45 >', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "< 55 36 20 13 6 20 49 49 28 45 >" })
        .send()
        .expect(200);
    expect(response.text).toBe("49 73 69 69 61");
});

test('Should answer: < 20 39 32 53 55 58 19 59 14 10 >', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "< 20 39 32 53 55 58 19 59 14 10 >" })
        .send()
        .expect(200);
    expect(response.text).toBe("77 71 73 69 69");
});

test('Should answer: < 13 8 53 41 18 14 44 9 46 17 >', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "< 13 8 53 41 18 14 44 9 46 17 >" })
        .send()
        .expect(200);
    expect(response.text).toBe("55 57 35 55 61");
});

test('Should answer: ABCDE A-<--> B-=--- C--=-- D-><-- E----=', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: ` ABCDE\r\nA-<-->\r\nB-=---\r\nC--=--\r\nD-><--\r\nE----=` })
        .send()
        .expect(200);
    expect(response.text).toBe("EABDC");
});

test('Should answer: ABCD A=--- B---< C>--- D<---', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: ` ABCD\r\nA=---\r\nB---<\r\nC>---\r\nD<---` })
        .send()
        .expect(200);
    expect(response.text).toBe("BDAC");
});

test('Should answer: ABCD A=--- B<--- C-<-- D--<-', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: ` ABCD\r\nA=---\r\nB<---\r\nC-<--\r\nD--<-` })
        .send()
        .expect(200);
    expect(response.text).toBe("DCBA");
});

test('Should answer: Source code for this exercise?', async () => {
    const response = await request(app)
        .get('/question')
        .query({ q: "Source code for this exercise?" })
        .send()
        .expect(200);
    expect(response.text).toBe("https://github.com/Kelley12/question-answer");
});

test('Should send bad request', async () => {
    const response = await request(app)
        .get('/question')
        .expect(400);
    expect(response.text).toBe("Please provide a question.")
});