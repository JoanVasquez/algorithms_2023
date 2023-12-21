const romanToInt = (s) => {
  const romansNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let index = 0; index < s.length; index++) {
    if (romansNum[s[index]] < romansNum[s[index + 1]]) {
      result -= romansNum[s[index]];
    } else {
      result += romansNum[s[index]];
    }
  }

  return result;
};


console.log(romanToInt("IV"))