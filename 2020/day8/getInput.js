const fs = require("fs/promises");

const getInput = async () => {
  try {
    return await fs.readFile("./2020/day8/input.txt", "utf8");
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { getInput };
