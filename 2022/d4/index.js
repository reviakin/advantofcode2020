const fs = require("fs");

const p1 = (err, data) => {
  if (err) return console.log(err);
  const input = data
    .split("\n")
    .filter(Boolean)
    .map((p) => p.split(","))
    .map(([p1, p2]) => [p1.split("-").map(Number), p2.split("-").map(Number)])
    .reduce((acc, [p1, p2]) => {
      if (
        (p1[0] >= p2[0] && p1[1] <= p2[1]) ||
        (p2[0] >= p1[0] && p2[1] <= p1[1])
      ) {
        acc++;
      }
      return acc;
    }, 0);

  console.log(input);
};

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const p2 = (err, data) => {
  if (err) return console.log(err);
  const input = data
    .split("\n")
    .filter(Boolean)
    .map((p) => p.split(","))
    .map(([p1, p2]) => [p1.split("-").map(Number), p2.split("-").map(Number)])
    .reduce((acc, [p1, p2]) => {
      const [i1_s, i1_e] = p1;
      const [i2_s, i2_e] = p2;

      const f_r = [...range(i1_s, i1_e)];
      const s_r = [...range(i2_s, i2_e)];

      if (
        s_r.includes(i1_s) ||
        s_r.includes(i1_e) ||
        f_r.includes(i2_s) ||
        f_r.includes(i2_e)
      ) {
        acc++;
      }
      return acc;
    }, 0);

  console.log(input);
};

fs.readFile("./input.txt", "utf8", p2);
fs.readFile("./input.txt", "utf8", p1);
