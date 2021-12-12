const httpStatus = require('http-status');
const { todoService } = require('../services');

const addTodo = async (req, res) => {
    try {
        if (!req.body.content) res.status(httpStatus.NOT_FOUND).send({ message: "Todo content is required." });
        if (!req.body.content.length) res.status(httpStatus.NOT_FOUND).send({ message: "Todo content can not be null" });
        const todo = await todoService.createTodo(req.body);
        res.status(httpStatus.CREATED).send(todo);
    } catch (err) {
        console.log(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
}

module.exports = addTodo;