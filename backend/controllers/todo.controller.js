const httpStatus = require('http-status');
const { todoService } = require('../services');


const addTodo = async (req, res) => {
    if (!req.body.content) return res.status(httpStatus.BAD_REQUEST).send({ status: 400, message: "Todo content is required" });  
    const todo = await todoService.createTodo(req.body);
    return res.status(httpStatus.CREATED).send(todo);
}

module.exports = { addTodo };