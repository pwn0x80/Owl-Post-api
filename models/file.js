const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema(
  {
    filename: { type: String, required: true },
    path: { type: String, required: false },
    size: { type: Number, required: false },
    uuid: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
