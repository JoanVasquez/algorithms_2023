const isAnagram = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) {
    return false;
  }
  const strOneMap = buildMapOfString(strOne);
  const strTwoMap = buildMapOfString(strTwo);

  for (let key in strOneMap) {
    if (strOneMap[key] !== strTwoMap[key]) {
      return false;
    }
  }

  return true;
};

const buildMapOfString = (str) => {
  const cleanStr = str.split(" ").join("").toLowerCase();

  const map = {};

  for (let char of cleanStr) {
    map[char] = ++map[char] || 1;
  }

  return map;
};

const isAnagramTwo = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) {
    return false;
  }
  const cleanStrOne = strOne.split(" ").sort().join("").toLowerCase();
  const cleanStrTwo = strTwo.split(" ").sort().join("").toLowerCase();

  return cleanStrOne === cleanStrTwo;
};

console.log(isAnagramTwo("aca", "aca"));
