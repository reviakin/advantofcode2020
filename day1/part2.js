document.body.textContent
  .split("\n")
  .filter(Boolean)
  .map(Number)
  .filter((x, _, xs) => xs.find((y) => xs.find((z) => z === 2020 - x - y)))
  .reduce((a, b) => a * b);
