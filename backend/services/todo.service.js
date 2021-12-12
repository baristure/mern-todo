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


module.exports = { createTodo, getTodos };