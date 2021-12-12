const { Todo } = require('../../models');
const { connectDB, disconnectDB } = require('../../config/test-db');
describe('Todo model test', () => {
    let newTodo;
    beforeEach(async () => {
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
    it('Should correctly new todo', async () => {
        let error = null;
        try {
            const todo = await Todo.create(newTodo);
            expect(todo._id).toBe(newTodo._id);
            expect(todo.content).toBe(newTodo.content);
            expect(todo.isDone).toEqual(false);
        } catch (err) {
            error = err;
        }
        expect(error).toBeNull();
    })

})