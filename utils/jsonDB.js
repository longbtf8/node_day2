const fs = require("node:fs/promises");
const path = require("path");

async function loadDB(resourceName) {
  const filePath = path.join(`${__dirname}`, "db", `${resourceName}.json`);
  try {
    const result = await fs.readFile(filePath, "utf-8");
    return JSON.parse(result);
  } catch (error) {
    if (error.code === "ENOENT") {
      const defaultDB = [];
      save(resourceName, defaultDB);
      return defaultDB;
    }
  }
}
async function save(resourceName, db) {
  const filePath = path.join(`${__dirname}`, "db", `${resourceName}.json`);
  try {
    await fs.writeFile(filePath, JSON.stringify(db), "utf-8");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { loadDB, save };
