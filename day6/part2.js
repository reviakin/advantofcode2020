document.body.textContent
  .trim()
  .split("\n\n")
  .map(
    (code) => code.split("\n")
    //   .sort((a, b) => a.length - b.length)
  )
  .map((code) =>
    code[0]
      .split("")
      .filter((letter) =>
        code.slice(1).every((_code) => _code.includes(letter))
      )
  )
  .reduce((a, b) => a + b.length, 0);
