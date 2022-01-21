const express = require("express");
const { connect } = require("mongoose");
//const router = require("./routes/files");
const app = express();

const { nanoid } = require("nanoid");
app.use(express.static("public"));

app.set("view engine", "ejs");
connectDB = require("./config/db");
connectDB();

//routes
app.use("/api/mail", require("./routes/files"));
//download page link
app.use("/mail", require("./routes/show"));
//download link
app.use("/mail/d", require("./routes/download"));
app.listen(process.env.PORT || 2000, function () {
  console.log("server is running on port 2000");
});


