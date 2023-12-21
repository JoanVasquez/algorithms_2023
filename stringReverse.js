const stringReverse = (str) => {
  let result = "";

  for (let char of str) {
    result = char + result;
  }

  return result;
};

console.log(stringReverse("some test"));
