const isPalindrome = (str) => {
  let reversedStr = "";

  for (let char of str) {
    reversedStr = char + reversedStr;
  }

  return str === reversedStr;
};

console.log(isPalindrome("aca"));
console.log(isPalindrome("acas"));
