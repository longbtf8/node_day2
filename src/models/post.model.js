const { loadDB, save } = require("../../utils/jsonDB");

const resource = "posts";
const getAll = async () => {
  return await loadDB(resource);
};
const getOne = async (id) => {
  const posts = await loadDB(resource);
  return posts.find((post) => String(post.id) === String(id));
};
const create = async (data) => {
  const posts = await loadDB(resource);
  const id = posts.length ? Math.max(...posts.map((post) => post.id)) + 1 : 1;
  const newPost = {
    id: id,
    title: data.title,
    content: data.title,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  save(resource, posts);
  return newPost;
};
module.exports = { getAll, getOne, create };
