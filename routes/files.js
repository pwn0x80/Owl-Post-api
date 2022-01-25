const router = require("express").Router();
const multer = require("multer");
const { nanoid } = require("nanoid");
const path = require("path");
const File = require("../models/file");
const { v4: uuidv4 } = require("uuid");

let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${nanoid()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});
//100mb
let upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } }).single(
  "u"
); //20mb

router.post("/", (req, res) => {
  let a = upload(req, res, async (err) => {
    console.log(req);
    const file = new File({
      filename: req.file.filename,
      uuid: uuidv4(),
      path: req.file.path,
      size: req.file.size,
    });

    const response = await file.save();
    return res.json({
      file: `${process.env.APP_BASE_URL}/mail/${response.uuid}`,
    });
  });
});

module.exports = router;
