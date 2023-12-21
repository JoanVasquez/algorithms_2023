const longestSubStringWithoutRep = (str) => {
  const unique = new Set(str);
  console.log(unique);
  //   const strMap = buildMap(str);
  //   let result = "";

  //   console.log(strMap);

  //   for (let char of str) {
  //     if (strMap[char] === 1) {
  //       result += char;
  //     }
  //   }

  //   return result;
};

console.log(longestSubStringWithoutRep("pwwkew"));
