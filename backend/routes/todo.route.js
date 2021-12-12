const express = require('express');
const { todoController } = require('../controllers/index');
// routes
const todoRouter = express.Router();
todoRouter.post("/add", todoController.addTodo);

module.exports = todoRouter;