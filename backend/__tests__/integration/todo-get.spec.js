const httpStatus = require('http-status');
const request = require('supertest');

const app = require('../../app');
const { connectDB, disconnectDB } = require('../../config/test-db');

beforeAll(async () => await connectDB());
afterAll(async () => await disconnectDB());

describe('POST /api/v1/todo/add', () => {
    let todos = [];
    beforeEach(async () => {
        jest.setTimeout(10000);
        const todoOne = await request(app)
            .post('/api/v1/todo/add')
            .send({
                content: "Drink water"
            });
        todos.push(todoOne);
        const todoTwo = await request(app)
            .post('/api/v1/todo/add')
            .send({
                content: "Read a book"
            });
        todos.push(todoTwo);
    });

    it('Should be return HTTP-200 and get todo list successfuly', async () => {
        let error = null;
        try {
            const res = await request(app)
                .get('/api/v1/todo/')
                .expect(httpStatus.OK);

            const body = res.body;
            expect(body).toEqual([{
                _id: expect.anything(),
                content: "Drink water",
                isDone: false,
                __v: 0
            }, {
                _id: expect.anything(),
                content: "Read a book",
                isDone: false,
                __v: 0
            }]);
        } catch (err) {
            console.log(err);
            error = err;
        }
        expect(error).toBe(null);
    });

});