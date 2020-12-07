var getStepPosition = (index) => index * 3;
var inFramePosition = (frameLength) => (position) =>
  position > frameLength - 1 ? position % frameLength : position;

var foo = (acc, a, index) =>
  a[inFramePosition(a.length)(getStepPosition(index))] === "#" ? acc + 1 : acc;

document.body.textContent.split("\n").filter(Boolean).reduce(foo, 0);
