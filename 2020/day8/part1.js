const { getInput } = require("./getInput");

const parseInput = async () => {
  const input = await getInput();

  return input
    .trim()
    .split("\n")
    .map((operator) => {
      const [type, value] = operator.split(" ");
      return { type, value };
    });
};

const solve = async () => {
  const operators = await parseInput();
  const operatorsMap = new Map();
  operators.forEach((operator, id) => operatorsMap.set(id, operator));

  return foo(operatorsMap);
};

const foo = (operators = new Map(), position = 0, ids = new Set(), sum = 0) => {
  // The base case of recursion.
  if (ids.has(position)) {
    return sum;
  }

  ids.add(position);

  const operator = operators.get(position);
  if (!operator) {
    return sum;
  }

  const { type, value } = operator;

  if (type === "nop") {
    return foo(operators, position + 1, ids, sum);
  }

  if (type === "acc") {
    let [sign, ...num] = value;
    num = num.join("");
    if (sign === "-") {
      sum = sum - Number(num);
    } else {
      sum = sum + Number(num);
    }
    return foo(operators, position + 1, ids, sum);
  }
  if (type === "jmp") {
    let [sign, ...num] = value;
    num = num.join("");
    if (sign === "-") {
      position = position - Number(num);
    } else {
      position = position + Number(num);
    }
    return foo(operators, position, ids, sum);
  }

  return sum;
};

solve().then(console.log).catch(console.log);
