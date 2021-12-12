const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;