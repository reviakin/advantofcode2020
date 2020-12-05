var Box = (x) => ({
  fold: (f) => f(x),
  map: (f) => Box(f(x)),
});

var getMiddle = (left, right) => Math.floor((left + right) / 2);

var foo = (range, path) =>
  range.length === 2
    ? range[path]
    : Box(getMiddle(-1, range.length)).fold((mid) =>
        path[0]
          ? foo(range.slice(mid + 1), path.slice(1))
          : foo(range.slice(0, mid + 1), path.slice(1))
      );

Box(document.body.textContent)
  .map((content) => content.split("\n"))
  .map((content) => content.filter(Boolean))
  .map((chars) =>
    chars.map((char) => ({
      row: char.slice(0, 7),
      column: char.slice(7),
    }))
  )
  .map((chars) =>
    chars.map(({ row, column }) => ({
      row: foo(
        [...Array(128).keys()],
        row.replaceAll("F", 0).replaceAll("B", 1).split("").map(Number)
      ),
      column: foo(
        [...Array(8).keys()],
        column.replaceAll("L", 0).replaceAll("R", 1).split("").map(Number)
      ),
    }))
  )
  .map((chars) => chars.map(({ column, row }) => row * 8 + column))
  .fold((result) => Math.max(...result));
