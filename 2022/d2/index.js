const fs = require("fs");

const p1 = (err, data) => {
  const item_scores = {
    A: 1, // rock
    B: 2, // paper
    C: 3, // scissors
    X: 1, // rock
    Y: 2, // paper
    Z: 3, // scissors
  };

  const case_scores = {
    win: 6,
    draw: 3,
    lost: 0,
  };

  const scenarios = {
    A: {
      X: case_scores["draw"],
      Y: case_scores["win"],
      Z: case_scores["lost"],
    },
    B: {
      X: case_scores["lost"],
      Y: case_scores["draw"],
      Z: case_scores["win"],
    },
    C: {
      X: case_scores["win"],
      Y: case_scores["lost"],
      Z: case_scores["draw"],
    },
  };

  if (err) {
    return console.log(err);
  }
  const rounds = data
    .split("\n")
    .map((r) => r.replace(" ", ""))
    .filter(Boolean);

  const scores = rounds.map(
    ([item1, item2]) => scenarios[item1][item2] + item_scores[item2]
  );
  console.log(scores.reduce((acc, s) => acc + s));
};

const p2 = (err, data) => {
  const scores_m = {
    A: 1, // rock
    B: 2, // paper
    C: 3, // scissors
    X: 0, // lost
    Y: 3, // draw
    Z: 6, // win
  };

  const my_item_by_scenario = {
    A: {
      X: scores_m["C"],
      Y: scores_m["A"],
      Z: scores_m["B"],
    },
    B: {
      X: scores_m["A"],
      Y: scores_m["B"],
      Z: scores_m["C"],
    },
    C: {
      X: scores_m["B"],
      Y: scores_m["C"],
      Z: scores_m["A"],
    },
  };

  if (err) {
    return console.log(err);
  }
  const rounds = data
    .split("\n")
    .map((r) => r.replace(" ", ""))
    .filter(Boolean);

  const scores = rounds.map(
    ([item1, result]) => my_item_by_scenario[item1][result] + scores_m[result]
  );
  console.log(scores.reduce((acc, s) => acc + s));
};

fs.readFile("./input.txt", "utf8", p1);
fs.readFile("./input.txt", "utf8", p2);
