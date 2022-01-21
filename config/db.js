const mongoose = require("mongoose");
require("dotenv").config();
connectDB = () => {
  //sbkuch priv ke liye
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const connect = mongoose.connection;

  mongoose.connection.once("open", () => {
    console.log("Ah, we have our first user!");
  });
  //error
};
//export this module
module.exports = connectDB;
