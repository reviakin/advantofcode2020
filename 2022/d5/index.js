const fs = require("fs");

const parse_crates = (input) => {
  // perfect var name
  const c_a_s = input.split("\n");
  c_a_s.pop();

  let r_c = /\]|\[/gi;
  const clean_c_a_s = c_a_s
    .map((row) => {
      const row_chars = row.split("");

      const output = [];
      for (let i = 0; i < row_chars.length; i++) {
        if (row_chars[i] === " " && i !== row_chars.length - 2) {
          const next_chars = row_chars.slice(i + 1, i + 4);
          if (next_chars.every((char) => char === " ")) {
            output.push(..."[-]".split(""));
            i += 3;
          }
        } else {
          output.push(row_chars[i]);
        }
      }
      return output;
    })
    .map((row) => row.join("").replaceAll(r_c, ""));

  const height = clean_c_a_s.length;
  const width = clean_c_a_s[0].length;

  const crates = Array(width).fill([]);

  for (let i = height - 1; i >= 0; i--) {
    let row = clean_c_a_s[i];
    //console.log("row", row);
    row.split("").forEach((c, index) => {
      if (c !== "-") {
        // crates[index].push(c); WTF why it doesnt work???
        crates[index] = [...crates[index], c];
      }
    });
  }
  return crates;
};

const parse_moves = (input) => {
  // parse movements
  let r_m = /move |from |to /gi;
  const moves = input
    .split("\n")
    .filter(Boolean)
    .map((s) =>
      //console.log(s),
      s.replaceAll(r_m, "").split(" ")
    );
  return moves;
};

const p1 = (err, data) => {
  if (err) return console.log(err);
  const [crates_s, moves_s] = data.split("\n\n");
  const crates = parse_crates(crates_s);
  const moves = parse_moves(moves_s);
  //console.log("befor moves:", crates);

  moves.forEach(([move, from, to]) => {
    from--;
    to--;
    let moved = crates[from].slice(-move).reverse();
    crates[from] = crates[from].slice(0, crates[from].length - move);
    crates[to] = [...crates[to], ...moved];
    //console.log("after move:", crates, { move, from, to, moved });
  });

  //console.log("after moves:", crates);
  console.log(
    "part1:",
    crates
      .map((c) => c.slice(-1))
      .flat()
      .join("")
  );
};
const p2 = (err, data) => {
  if (err) return console.log(err);
  const [crates_s, moves_s] = data.split("\n\n");

  const crates = parse_crates(crates_s);
  const moves = parse_moves(moves_s);
  //console.log("befor moves:", crates);

  moves.forEach(([move, from, to]) => {
    from--;
    to--;
    let moved = crates[from].slice(-move);
    crates[from] = crates[from].slice(0, crates[from].length - move);
    crates[to] = [...crates[to], ...moved];
    //console.log("after move:", crates, { move, from, to, moved });
  });

  //console.log("after moves:", crates);
  console.log(
    "part2:",
    crates
      .map((c) => c.slice(-1))
      .flat()
      .join("")
  );
};
fs.readFile("./input.txt", "utf8", p2);
fs.readFile("./input.txt", "utf8", p1);
