const httpStatus = require('http-status');
const request = require('supertest');

const app = require('../../app');
const { connectDB, disconnectDB } = require('../../config/test-db');

beforeAll(async () => await connectDB());
afterAll(async () => await disconnectDB());

describe('Delete All', () => {
    let newTodo;
    beforeEach(async () => {
        jest.setTimeout(10000);
        newTodo = {
            _id: require("mongoose").Types.ObjectId(),
            content: "Drink water"
        }
    });

    it('Should be return HTTP-204 and no content message when todos deleted successfuly', async () => {
        let error = null;
        try {
            // const res = await request(app)
            //     .post('/api/v1/todo/add')
            //     .send(newTodo)
            //     .expect(httpStatus.CREATED);
            // const body = res.body;
            await request(app)
                .delete('/api/v1/todo')
                .expect(httpStatus.NO_CONTENT);

        } catch (err) {
            console.log(err);
            error = err;
        }
        expect(error).toBe(null);
    });

})