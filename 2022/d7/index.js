let fs = require("fs");

const SIZE_LIMIT = 100000;

let p1 = (err, data) => {
  if (err) return console.log(err);
  let inputLines = data.split("\n").filter(Boolean);
  let pathNames = ["root"];
  let currentPath = `${pathNames[0]}/`;
  let fileTree = {
    [currentPath]: { size: 0, parent: null, path: currentPath },
  };

  // exclue first cd / and ls commands
  inputLines.slice(2).forEach((command) => {
    let [f, s, t] = command.split(" ");

    if (f === "dir") {
      let path = currentPath + s + "/";
      fileTree[path] = {
        path,
        size: 0,
        parent: fileTree[currentPath],
      };
    }
    if (!Number.isNaN(Number(f))) {
      let dir = fileTree[currentPath];
      dir.size = dir.size + Number(f);
    }
    if (f === "$" && s === "cd") {
      if (t === "..") {
        let prevPathName = pathNames.pop();
        let newPath = currentPath.slice(
          0,
          currentPath.length - (prevPathName.length + 1)
        );
        currentPath = newPath;
      } else {
        pathNames.push(t);
        currentPath = currentPath + `${t}/`;
      }
    }
  });

  const treeKeys = Object.keys(fileTree);
  const sortedKeys = [...treeKeys].sort((a, b) => a.includes(b));
  let reversedKeys = [...sortedKeys].reverse();
  reversedKeys.reverse().forEach((key) => {
    let { parent, size } = fileTree[key];
    while (parent) {
      parent.size = parent.size + size;
      parent = parent.parent;
    }
  });

  const myTreasures = Object.values(fileTree)
    .filter(({ size }) => size <= SIZE_LIMIT)
    .reduce((acc, { size }) => acc + size, 0);

  console.log(myTreasures);
};
let p2 = (err, data) => {
  if (err) return console.log(err);
};

fs.readFile("./input.txt", "utf8", p1);
//fs.readFile("./test.txt", "utf8", p2);
