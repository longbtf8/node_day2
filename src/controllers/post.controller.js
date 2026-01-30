const postModel = require("../models/post.model");
const getAll = () => {
  postModel.getAll();
};
module.exports = { getAll };
