const httpStatus = require('http-status');
const { Todo } = require('../models');

/**
 * Create a todo
 * @param {Object} todoBody
 * @returns {Promise<Todo>}
 */
const createTodo = async (todoBody) => {
    const todo = await Todo.create(todoBody)
    return todo;
};

module.exports = { createTodo };