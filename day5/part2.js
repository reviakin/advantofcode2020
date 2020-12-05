var Box = (x) => ({
  fold: (f) => f(x),
  map: (f) => Box(f(x)),
});

function* createRange(start, end) {
  yield start;
  if (start === end) return;
  yield* createRange(start + 1, end);
}

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
        [...createRange(0, 127)],
        row.replaceAll("F", 0).replaceAll("B", 1).split("").map(Number)
      ),
      column: foo(
        [...createRange(0, 7)],
        column.replaceAll("L", 0).replaceAll("R", 1).split("").map(Number)
      ),
    }))
  )
  .map((chars) => chars.map(({ row, column }) => row * 8 + column))
  .map((chars) => chars.sort((a, b) => a - b))
  .map((ids) =>
    Box([...createRange(ids[0], ids[ids.length - 1])]).fold((r) =>
      r.find((n) => !ids.includes(n))
    )
  )
  .fold((id) => id);
