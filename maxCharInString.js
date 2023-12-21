const maxCharInString = (str) => {
  const cleanStr = str.split(" ").join("").toLowerCase();

  let mustRepeted = "";
  let counter = 0;
  const strMap = buildMapOfString(cleanStr);

  for (let key in strMap) {
    if (strMap[key] > counter) {
      counter = strMap[key];
      mustRepeted = key;
    }
  }

  return mustRepeted;
};

const buildMapOfString = (str) => {
  const map = {};

  for (let char of str) {
    map[char] = ++map[char] || 1;
  }

  return map;
};

console.log(maxCharInString("some testing to the must repeated"));
