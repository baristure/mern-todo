const express = require('express');
const todoRouter = require('./todo.route');

const router = express.Router();

router.use("/todo", todoRouter);

module.exports = router;
