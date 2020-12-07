var Box = (x) => ({
  fold: (f) => f(x),
  map: (f) => Box(f(x)),
});

var validateHeight = (value) =>
  value.includes("cm")
    ? Box(value.indexOf("cm")).fold((index) =>
        index === 0
          ? false
          : numberIsBetween(150, 193)(Number(value.slice(0, index)))
      )
    : value.includes("in")
    ? Box(value.indexOf("in")).fold((index) =>
        index === 0
          ? false
          : numberIsBetween(59, 76)(Number(value.slice(0, index)))
      )
    : false;

var numberIsBetween = (min, max) => (v) => !isNaN(v) && v >= min && v <= max;

var validateHair = (value) =>
  value[0] === "#"
    ? Box(value.slice(1)).fold((v) => v.match(/[0-9a-fA-F]/g).length === 6)
    : false;

document.body.textContent
  .split("\n\n")
  .map((passportData) => passportData.split("\n").filter(Boolean))
  .map((passportData) =>
    passportData.flatMap((dataPart) => dataPart.split(" "))
  )
  .map((passportData) =>
    passportData.reduce(
      (acc, l) => ({
        ...acc,
        [l.split(":")[0]]: l.split(":")[1],
      }),
      {}
    )
  )
  .filter((passportData) =>
    ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].every((requiredField) =>
      Object.keys(passportData).includes(requiredField)
    )
  )
  .filter((passportData) => Object.entries(passportData))
  .every(
    ([key, value]) => (
      key === "byr"
        ? Box(Number(value)).fold(numberIsBetween(1920, 2002))
        : key === "iur"
        ? Box(Number(value)).fold(numberIsBetween(2010, 2020))
        : key === "eyr"
        ? Box(Number(value)).fold(numberIsBetween(2020, 2030))
        : key === "hgt"
        ? Box(value).fold(validateHeight)
        : key === "hcl"
        ? Box(value).fold(validateHair)
        : key === "ecl"
        ? ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value)
        : key === "pid"
        ? Box(Number(value)).fold((v) => !isNaN(v) && String(v)[0] === "0")
        : true,
      console.log(key, value)
    )
  );
