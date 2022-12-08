const fs = require("fs");

const p1 = (err, data) => {
  if (err) return console.log(err);
  data = data
    .split("\n")
    .filter(Boolean)
    .map((l) => l.split("").map(Number));

  let visibleItems = 0;

  data.forEach((row, rowIndex) => {
    if (rowIndex == 0 || rowIndex == data.length - 1) {
      visibleItems += row.length;
      return;
    }
    row.forEach((treeHeight, treeIndex) => {
      if (treeIndex == 0 || treeIndex === row.length - 1) {
        visibleItems += 1;
        return;
      }

      let top = data.slice(0, rowIndex).map((_row) => _row[treeIndex]);
      let bottom = data.slice(rowIndex + 1).map((_row) => _row[treeIndex]);
      let left = data[rowIndex].filter(
        (_, _treeIndex) => _treeIndex < treeIndex
      );
      let right = data[rowIndex].filter(
        (_, _treeIndex) => _treeIndex > treeIndex
      );

      const isVisible = [top, bottom, left, right].some((side) =>
        side.every((_treeHeight) => treeHeight > _treeHeight)
      );
      if (isVisible) {
        visibleItems += 1;
      }
    });
  });

  console.log("p1: ", visibleItems);
};

const p2 = (err, data) => {
  if (err) return console.log(err);
  data = data
    .split("\n")
    .filter(Boolean)
    .map((l) => l.split("").map(Number));

  let highestScore = 0;

  data.forEach((row, rowIndex) => {
    if (rowIndex === 0 || rowIndex === data.length - 1) {
      return;
    }
    row.forEach((treeHeight, treeIndex) => {
      if (treeIndex === 0 || treeIndex === row.length - 1) {
        return;
      }

      let topTrees = data.slice(0, rowIndex).map((_row) => _row[treeIndex]);
      let bottomTrees = data
        .slice(rowIndex + 1)
        .map((_row) => _row[treeIndex])
        .reverse();
      let leftTrees = data[rowIndex].filter(
        (_, _treeIndex) => _treeIndex < treeIndex
      );
      let rightTrees = data[rowIndex]
        .filter((_, _treeIndex) => _treeIndex > treeIndex)
        .reverse();
      let topScore = 0;
      let bottomScore = 0;
      let leftScore = 0;
      let rightScore = 0;

      while (topTrees.length) {
        topScore += 1;
        let nextTree = topTrees.pop();
        if (nextTree >= treeHeight) {
          break;
        }
      }
      while (bottomTrees.length) {
        bottomScore += 1;
        let nextTree = bottomTrees.pop();
        if (nextTree >= treeHeight) {
          break;
        }
      }
      while (leftTrees.length) {
        leftScore += 1;
        let nextTree = leftTrees.pop();
        if (nextTree >= treeHeight) {
          break;
        }
      }
      while (rightTrees.length) {
        rightScore += 1;
        let nextTree = rightTrees.pop();
        if (nextTree >= treeHeight) {
          break;
        }
      }

      let positionScors = topScore * bottomScore * leftScore * rightScore;
      if (positionScors > highestScore) {
        highestScore = positionScors;
      }
    });
  });

  console.log("p2: ", highestScore);
};

fs.readFile("./input.txt", "utf8", p2);
fs.readFile("./input.txt", "utf8", p1);
//fs.readFile("./example.txt", "utf8", p1);
