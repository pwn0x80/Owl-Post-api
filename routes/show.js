const router = require("express").Router();

const File = require("../models/file");
//dynamic generator download link
router.get("/:uuid", async (req, res) => {
  try {
    //database search by uuid
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) {
      return res.render("download", { error: "link not found" });
    }
    //no error
    return res.render("download", {
      uuid: file.uuid,
      fileName: file.filename,
      fileSize: file.size,
      downloadLink: `${process.env.APP_BASE_URL}/mail/d/${file.uuid}`,
    });
    // something went wrong at database search
  } catch (err) {
    return res.render("download", { error: "something went wrong" });
  }
});

module.exports = router;
