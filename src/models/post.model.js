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
  await save(resource, posts);
  return newPost;
};

const update = async (id, updateData) => {
  const posts = await loadDB(resource);
  const index = posts.findIndex((p) => String(p.id) === String(id));
  if (index === -1) return { message: NotFound };
  posts[index] = {
    id: id,
    title: updateData.title,
    content: updateData.content,
  };
  await save(resource, posts);
  return posts[index];
};
const remove = async (id) => {
  const posts = await loadDB(resource);
  const index = posts.findIndex((p) => String(p.id) === String(id));
  if (index === -1) return false;
  posts.splice(index, 1);
  console.log(posts);
  await save(resource, posts);
  return true;
};
module.exports = { getAll, getOne, create, update, remove };
