const router = require("express").Router();
require("../server.js");
//database
const File = require("../models/file");
//download file
router.get("/:uuid", async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
  console.log(file);
  if (!file) {
    return res.render("download", { error: "link has been expired." });
  }
  const filePath = `${__dirname}/../${file.path}`;
  res.download(filePath);
});

module.exports = router;
