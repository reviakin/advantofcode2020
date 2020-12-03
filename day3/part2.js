var getStepPosition = (step) => (index) => index * step;

var inFramePosition = (frameLength) => (position) =>
  position > frameLength - 1 ? position % frameLength : position;

var foo = (step) => (acc, a, index) =>
  a[inFramePosition(a.length)(getStepPosition(step)(index))] === "#"
    ? acc + 1
    : acc;

var Box = (x) => ({
  fold: (f) => f(x),
  map: (f) => Box(f(x)),
});

Box(document.body.textContent.split("\n").filter(Boolean)).fold(
  (list) =>
    list.reduce(foo(1), 0) *
    list.reduce(foo(3), 0) *
    list.reduce(foo(5), 0) *
    list.reduce(foo(7), 0) *
    list.filter((_, index) => index % 2 === 0 || index === 0).reduce(foo(1), 0)
);
