function getMatchLength(match) {
  if (match == null) return null;
  return match.length;
}

document.body.textContent
  .split("\n")
  .filter((x) => !!x)
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
  .map(({ rule, value }) => ({
    value: [
      value[rule.min === 1 ? 0 : rule.min - 1],
      value[rule.max === 1 ? 0 : rule.max - 1],
    ],
    letter: rule.letter,
  }))
  .filter(({ value, letter }) =>
    getMatchLength(value.join("").match(new RegExp(letter, "gi"))) === 1
      ? true
      : false
  );
