const { loadDB } = require("../../utils/jsonDB");

const resource = "comments";

const getAll = async () => {
  return await loadDB(resource);
};

module.export = { getAll };
