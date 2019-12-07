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

test('Should send bad request', async () => {
    const response = await request(app)
        .get('/question')
        .expect(400);
    expect(response.text).toBe("Please provide a question.")
});