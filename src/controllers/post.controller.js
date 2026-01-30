const postModel = require("../models/post.model");

const getAll = async (req, res) => {
  try {
    const posts = await postModel.getAll();
    res.json(posts);
  } catch (error) {
    res.status(404).json({ message: "Not Found" });
  }
};
const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const post = await postModel.getOne(id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: "Not Found" });
  }
};
const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(req.body);

    if (!title || !content) {
      return res.status(400).json({ message: "Thiếu tiêu đề hoặc nội dung" });
    }
    const newPost = await postModel.create({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: "Create Error" });
  }
};
const update = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(req.body);
    const { id } = req.params();
    console.log(id);
    const post = await postModel.update(id, { title, content });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: "Not Found" });
  }
};
module.exports = { getAll, getOne, create, update };
