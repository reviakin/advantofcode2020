const fs = require("fs");

fs.readFile("./input.txt", "utf8", (_, data) => {
  const reindeer_colories = data.split("\n\n").map((r) =>
    r
      .split("\n")
      .map(Number)
      .reduce((acc, c) => acc + c, 0)
  );

  const dec_colories = reindeer_colories.sort((a, b) => b - a);
  const the_most = dec_colories[0];
  console.log(the_most);
  dec_colories.length = 3;
  const sum = dec_colories.reduce((acc, c) => acc + c, 0);
  console.log(sum);
});
