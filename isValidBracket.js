var isValidBracket = function (s) {
  const stacks = [];
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let bracket of s) {
    if (bracket === "[" || bracket === "{" || bracket === "(") {
      stacks.push(bracket);
    } else {
      const lastBracket = stacks.pop();
      if (bracket !== brackets[lastBracket]) {
        return false;
      }
    }
  }

  return stacks.length === 0;
};

var isValidBracketTwo = function (s) {
  const stacks = [];
  const parens = "() [] {}";

  for (let bracket of s) {
    stacks.push(bracket);

    const open = stacks[stacks.length - 2];
    const close = stacks[stacks.length - 1];

    const paren = open + close;

    if (parens.includes(paren)) {
      stacks.pop();
      stacks.pop();
    }
  }

  return stacks.length === 0;
};

console.log(isValidBracketTwo("()"));
