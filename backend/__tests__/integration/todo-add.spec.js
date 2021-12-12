const httpStatus = require('http-status');
const request = require('supertest');

const app = require('../../app');
const { connectDB, disconnectDB } = require('../../config/test-db');

beforeAll(async () => await connectDB());
afterAll(async () => await disconnectDB());

describe('POST /api/v1/todo/add', () => {
    let newTodo;
    beforeEach(async () => {
        jest.setTimeout(10000);
        newTodo = {
            _id: require("mongoose").Types.ObjectId(),
            content: "Drink water"
        }
    });

    it('Should be return HTTP-201 and success message when todo added successfuly', async () => {
        let error = null;
        try {
            const res = await request(app)
                .post('/api/v1/todo/add')
                .send(newTodo)
                .expect(httpStatus.CREATED);

            const body = res.body;
            expect(body).toEqual({
                _id: newTodo._id.toHexString(),
                content: newTodo.content,
                isDone: false,
                __v: 0
            });
        } catch (err) {
            console.log(err);
            error = err;
        }
        expect(error).toBe(null);
    });

    it('Should be return HTTP-201 and success message when todo added successfuly', async () => {
        let error = null;
        try {
            const res = await request(app)
                .post('/api/v1/todo/add')
                .send(newTodo)
                .expect(httpStatus.CREATED);

            const body = res.body;
            expect(body).toEqual({
                _id: newTodo._id.toHexString(),
                content: newTodo.content,
                isDone: false,
                __v: 0
            });
        } catch (err) {
            console.log(err);
            error = err;
        }
        expect(error).toBe(null);
    });
    it("Should return 400 if request is invalid", async () => {
        let error = null;
        try {
            const res = await request(app)
                .post(`/api/v1/todo/add`)
                .send({ something: "wrong" })
                .expect(httpStatus.BAD_REQUEST);

            const body = res.body;
            expect(body).toEqual({
                status: 400,
                message: "Todo content is required"
            })
        } catch (err) {
            console.log(err);
            error = err;
        }
        expect(error).toBe(null);

    });
    it("Should return 400 if content is null", async () => {
        let error = null;
        newTodo.content = "";
        try {
            const res = await request(app)
                .post(`/api/v1/todo/add`)
                .send(newTodo)
                .expect(httpStatus.BAD_REQUEST);

            const body = res.body;
            expect(body).toEqual({
                status: 400,
                message: "Todo content is required"
            });
        } catch (err) {
            console.log(err);
            error = err;
        }
        expect(error).toBe(null);
    });
});