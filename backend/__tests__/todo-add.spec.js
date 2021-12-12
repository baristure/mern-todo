const request = require('supertest');

const app = require('../app');

describe('POST /api/v1/todo/add', () => {
    it('Should be return HTTP-201 and success message when todo added successfuly', (done) => {
        request(app).post('/api/v1/todo/add').send().then(response => {
            expect(response.status).toBe(201);
            expect(response.body.message).toBe("Todo created");
            done();
        });
    });
});