const httpStatus = require('http-status');

const addTodo = (req, res) => {
    res.status(httpStatus.CREATED).send({ message: "Todo created" });
}

module.exports = addTodo;