document.body.textContent
  .trim()
  .split("\n\n")
  .map((g) => new Set(g.replace(/[\n]/g, "").split("")).size)
  .reduce((a, b) => a + b, 0);
