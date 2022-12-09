let input = require("fs")
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => {
    let [direction, moves] = line.split(" ");
    return { direction, moves };
  });

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  setPosiion({ x, y }) {
    if (x !== undefined) {
      this.x = x;
    }
    if (y !== undefined) {
      this.y = y;
    }
  }

  follow(point) {
    const delta = Math.max(
      Math.abs(this.x - point.x),
      Math.abs(this.y - point.y)
    );
    if (delta > 1) {
      const deltaX = point.x - this.x;
      const deltaY = point.y - this.y;
      // this.x += Math.abs(deltaX) === 2 ? deltaX / 2 : deltaX;
      this.x += 1;
      this.y += Math.abs(deltaY) === 2 ? deltaY / 2 : deltaY;
    }
  }

  move(direction) {
    if (direction == "R") {
      this.setPosiion({ x: this.x + 1 });
    }
    if (direction == "L") {
      this.setPosiion({ x: this.x - 1 });
    }
    if (direction == "U") {
      this.setPosiion({ y: this.y - 1 });
    }
    if (direction == "D") {
      this.setPosiion({ y: this.y + 1 });
    }
  }

  getState() {
    return [this.x, this.y];
  }
}

let p1 = () => {
  let head = new Point(0, 0);
  let tail = new Point(0, 0);
  let positions = new Set();
  let addPosition = (x, y) => positions.add(`${x} - ${y}`);
  input.forEach(({ direction, moves }) => {
    for (let i = 0; i < moves; i++) {
      head.move(direction);
      tail.follow(head);
      addPosition(...tail.getState());
    }
  });

  console.log(positions.size);
};

p1();
