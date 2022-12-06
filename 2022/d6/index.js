let fs = require("fs");

let p1 = (err, data) => {
  if (err) return console.log(err);
  console.log(
    data.split("").findIndex((char, index, chars) => {
      if (index < 3) return false;

      let charSet = new Set(chars.slice(index - 3, index + 1));

      if (charSet.size === 4) return true;

      return false;
    }) + 1
  );
};

fs.readFile("./input.txt", "utf8", p1);
