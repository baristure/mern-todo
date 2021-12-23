require("dotenv").config();

module.exports = {
  env: process.env.NODE_ENV,
  port: 5000,
  mongoose: {
    url: "mongodb+srv://baris:15635123c@cluster0.lewgd.mongodb.net/todo" + (process.env.NODE_ENV === "asda" ? "-dev" : ""),
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  },
};