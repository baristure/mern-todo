const httpStatus = require('http-status');
const request = require('supertest');

const app = require('../../app');
const { connectDB, disconnectDB } = require('../../config/test-db');


describe('POST /api/v1/todo/add', () => {
    let newTodo;
    beforeEach(async () => {
        jest.setTimeout(10000);
        try {
            await connectDB();
        } catch (err) {
            console.log(err);
        }
        newTodo = {
            _id: require("mongoose").Types.ObjectId(),
            content: "Drink water"
        }
    });

    afterEach(async () => {
        try {
            await disconnectDB();
        } catch (err) {
            console.log(err);
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
});