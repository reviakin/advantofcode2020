var lines = document.body.textContent
  .trim()
  .split("\n")
  .map((rule) => ({
    parent: rule.split(" bags contain ")[0],
    children: rule
      .split(" bags contain ")[1]
      .split(", ")
      .map((a) => a.replaceAll(/[0-9]|bags|bag|[.]/gm, "").trim()),
  }));

function foo() {
  const graph = new Map();
  for (const line of lines) {
    const { parent, children } = line;
    for (const child of children) {
      if (graph.has(child)) {
        graph.get(child).push(parent);
      } else {
        graph.set(child, [parent]);
      }
    }
  }

  const includingBags = getParentBags(graph, "shiny gold");
  return includingBags.size;
}

function getParentBags(graph, color, includingBags = new Set()) {
  const parents = graph.get(color);
  if (parents) {
    for (const parent of parents) {
      if (includingBags.has(parent)) continue;
      includingBags.add(parent);
      getParentBags(graph, parent, includingBags);
    }
  }
  return includingBags;
}

foo();
