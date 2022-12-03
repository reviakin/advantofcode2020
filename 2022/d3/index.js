const fs = require("fs");

const get_p = (i) => parseInt(i, 36) - (i == i.toUpperCase() ? -17 : 9);

const p2 = (err, data) => {
  if (err) return console.log(err);

  const rucksacks = data.split("\n").filter(Boolean);
  const p_g = [];
  for (let i = 0; i < rucksacks.length; i += 3) {
    p_g.push(
      [...new Set(rucksacks[i].split(""))].filter(
        (l) => rucksacks[i + 1].includes(l) && rucksacks[i + 2].includes(l)
      )[0]
    );
  }
  console.log(p_g.map(get_p).reduce((acc, i) => acc + i));
};

const p1 = (err, data) => {
  if (err) return console.log(err);

  const rucksacks = data.split("\n").filter(Boolean);
  const r_p = rucksacks
    .map((r) => [r.slice(0, r.length / 2), r.slice(r.length / 2)])
    .map((s) => [...new Set(s[0].split(""))].filter((l) => s[1].includes(l))[0])
    //.map((a) => (console.log(a), a))
    .map(get_p)
    .reduce((acc, i) => acc + i);
  console.log(r_p);
};
fs.readFile("./input.txt", "utf8", p1);
fs.readFile("./input.txt", "utf8", p2);
