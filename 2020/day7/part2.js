function parse(line) {
  const [parent, ...rest] = line
    .replace(/ bags?|\./g, "")
    .split(/ contain |, /g);

  const children = rest
    .filter((child) => child !== "no other")
    .map((child) => {
      const [, count, color] = child.match(/(\d+) (.*)/);
      return {
        color,
        count: parseInt(count, 10),
      };
    });

  return {
    parent,
    children,
  };
}

var lines = document.body.textContent.trim().split("\n").map(parse);

function foo() {
  const graph = new Map();
  for (const line of lines) {
    const { parent, children } = line;

    graph.set(parent, children);
  }

  return baz(graph);
}

function baz(graph, _color = "shiny gold") {
  let _count = 0;
  const children = graph.get(_color);
  if (children) {
    for (const { count, color } of children) {
      _count += count + count * baz(graph, color);
    }
  }
  return _count;
}

foo();
