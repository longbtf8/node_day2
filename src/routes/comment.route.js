const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    title: "noi dung 1",
  });
});
module.exports = router;
