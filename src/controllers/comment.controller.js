const commentModel = require("../models/comment.model");
const getAll = async (req, res) => {
  try {
    const post = await commentModel.getAll();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Not Found" });
  }
};
const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (id) {
      console.log(2);
      const comment = await commentModel.getOne(id);
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error server" });
  }
};
const create = async (req, res) => {
  try {
    const { postId, content } = req.body;
    if (!postId.trim() || !content.trim()) {
      res
        .status(400)
        .json({ message: "Vui long thu lai , postId hoac content" });
    }
    const newComment = await commentModel.create({ postId, content });
    res.status(201).json(newComment);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Vui long thu lai voi postId va  content" });
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const comment = await commentModel.update(id, { content });
    res.json(comment);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error server" });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await commentModel.remove(id);
    console.log(result);
    if (!result) {
      res.status(404).json({ message: "Not Found" });
    } else {
      res.status(204).json({ message: "Delete Done" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error server" });
  }
};
module.exports = { getAll, getOne, create, update, remove };
