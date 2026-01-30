const express = require("express");
const router = express.Router();
const controller = require("../controllers/post.controller");
router.get("/", controller.getAll);
router.get("/:id", (req, res) => {
  res.json({
    title: "chi tiet bai dang",
  });
});

module.exports = router;
