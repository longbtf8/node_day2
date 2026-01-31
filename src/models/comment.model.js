const { loadDB, save } = require("../../utils/jsonDB");

const resource = "comments";

const getAll = async () => {
  return await loadDB(resource);
};
const getOne = async (id) => {
  const comments = await loadDB(resource);

  const comment = comments.map((comment) => {
    String(comment.id) === String(id);
    return comment;
  });
  return comment;
};

const create = async (data) => {
  const comments = await loadDB(resource);
  const id =
    comments.length > 0
      ? Math.max(...comments.map((comment) => comment.id)) + 1
      : 1;
  const newComment = {
    id: id,
    postId: data.postId,
    content: data.content,
  };
  comments.push(newComment);
  await save(resource, comments);
  return newComment;
};

const update = async (id, data) => {
  const comments = await loadDB(resource);
  const index = comments.findIndex(
    (comment) => String(comment.id) === String(id),
  );
  if (index === -1) {
    return { message: "Not Found" };
  }
  comments[index] = {
    ...comments[index],
    content: data.content,
  };
  await save(resource, comments);
  return comments[index];
};
const remove = async (id) => {
  const comments = await loadDB(resource);
  const index = comments.findIndex(
    (comment) => String(comment.id) === String(id),
  );
  if (index === -1) {
    return false;
  }
  comments.splice(index, 1);
  await save(resource, comments);
  return true;
};
module.exports = { getAll, getOne, create, update, remove };
