const { Todo } = require('../../models');
const { connectDB, disconnectDB } = require('../../config/test-db');

beforeAll(async () => await connectDB());
afterAll(async () => await disconnectDB());

describe('Todo model test', () => {
    let newTodo;
    beforeEach(() => {
        newTodo = {
            _id: require("mongoose").Types.ObjectId(),
            content: "Drink water"
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

    });

    it('Should not validate a todo with empty content', async () => {
        let error = null;
        newTodo.content = null;
        try {
            const todo = new Todo(newTodo);
            await todo.validate();
        } catch (err) {
            error = err;
        }
        expect(error).not.toBeNull();

    });
})