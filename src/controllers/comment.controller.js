const commentModel = require("../models/comment.model");
const getAll = async (req, res) => {
  try {
    const post = await commentModel.getAll();
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: "Not Found" });
  }
};
module.export = { getAll };
