const mongoose = require("mongoose");
const config = require("./config");

async function main() {
  await mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
      console.log("MongoDB database connection established successfully");
    });
}

main();