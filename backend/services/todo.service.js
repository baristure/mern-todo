const { Todo } = require('../models');

/**
 * Create a new todo
 * @param {Object} todoBody
 * @returns {Promise<Todo>}
 */
const createTodo = async (todoBody) => {
    const todo = await Todo.create(todoBody)
    return todo;
};

/**
 * Get all todos
 * @returns {Promise<[Todos]>}
 */
 const getTodos = async () => {
    const todos = await Todo.find();
    return todos;
};

/**
 * Delete all todos
 * @returns {Promise<bool>}
 */
 const deleteTodos = async () => {
    await Todo.deleteMany({});
    return true;
};

module.exports = { createTodo, getTodos,deleteTodos };