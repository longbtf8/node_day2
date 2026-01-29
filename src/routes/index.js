const express = require("express");
const router = express.Router();
const postRouter = require("./posts.route");

router.all("/posts", postRouter);

module.exports = router;
