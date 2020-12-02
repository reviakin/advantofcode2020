function isBetween(value, leftBorder, rightBorder) {
  if (value == null) return false;
  return value >= leftBorder && value <= rightBorder;
}
function getMatchLength(match) {
  if (match == null) return match;
  return match.length;
}

document.body.textContent
  .split("\n")
  .map((x) => x.split(": "))
  .map(([rule, value]) => ({ rule, value }))
  .map(({ rule, value }) => ({
    value,
    rule: {
      letter: rule.split(" ")[1],
      min: Number(rule.split(" ")[0].split("-")[0]),
      max: Number(rule.split(" ")[0].split("-")[1]),
    },
  }))
  .filter(({ rule: { letter, min, max }, value }) =>
    isBetween(getMatchLength(value.match(new RegExp(letter, "gi"))), min, max)
  );
