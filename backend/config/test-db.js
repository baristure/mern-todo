const mongoose = require("mongoose");
const config = require("./config");
const { MongoMemoryServer } = require("mongodb-memory-server");

const connectDB = async () => {
  try {
    const mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    await mongoose.connect(uri, config.mongoose.options)
  } catch (err) {
    console.error(err.message);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { connectDB, disconnectDB };