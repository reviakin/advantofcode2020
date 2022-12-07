let fs = require("fs");

let isStartOfPacketMarket = (length) => (_, index, chars) => {
  if (index < length - 1) return false;

  let charSet = new Set(chars.slice(index - (length - 1), index + 1));

  if (charSet.size === length) return true;

  return false;
};

let p1 = (err, data) => {
  if (err) return console.log(err);
  console.log(
    "part 1:",
    data.split("").findIndex(isStartOfPacketMarket(4)) + 1
  );
};

let p2 = (err, data) => {
  if (err) return console.log(err);
  console.log(
    "part 2:",
    data.split("").findIndex(isStartOfPacketMarket(14)) + 1
  );
};

fs.readFile("./input.txt", "utf8", p2);
fs.readFile("./input.txt", "utf8", p1);
