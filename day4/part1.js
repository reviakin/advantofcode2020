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
  );
