const httpStatus = require('http-status');
const { todoService } = require('../services');


const addTodo = async (req, res) => {
    try {
        if (!req.body.content) return res.status(httpStatus.BAD_REQUEST).send({ status: 400, message: "Todo content is required" });
        const todo = await todoService.createTodo(req.body);
        return res.status(httpStatus.CREATED).send(todo);
    } catch (err) {
        console.log(err);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

const getTodos = async (req, res) => {
    try {
        const todos = await todoService.getTodos();
        return res.status(httpStatus.OK).send(todos);
    } catch (err) {
        console.log(err);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }

}
const deleteTodos = async (req, res) => {
    try {
        await todoService.deleteTodos();
        return res.status(httpStatus.NO_CONTENT).send();
    } catch (err) {
        console.log(err);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}


module.exports = { addTodo, getTodos, deleteTodos };