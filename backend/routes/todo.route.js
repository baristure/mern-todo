const express = require('express');
const { todoController } = require('../controllers/index');
// routes
const todoRouter = express.Router();

/**
 * @route  POST /add
 * @desc  Create a new todo
 * @access Public
 */
todoRouter.post("/add", todoController.addTodo);
/**
 * @route  GET /
 * @desc  Get All Todos
 * @access Public
 */
todoRouter.get("/", todoController.getTodos);


module.exports = todoRouter;