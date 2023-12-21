const validParentheses = (s) => {
  const stack = [];
  const brackets = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let bracket of s) {
    if (bracket === "{" || bracket === "[" || bracket === "(") {
      stack.push(bracket);
    } else {
      const lastStack = stack.pop();
      if (bracket !== brackets[lastStack]) return false;
    }
  }

  return stack.length === 0;
};

console.log(validParentheses("()[]{}"));
