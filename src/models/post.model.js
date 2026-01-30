const { loadDB } = require("../../utils/jsonDB");

const resource = "posts";
const getAll = () => {
  loadDB(resource);
};
module.exports = { getAll };
