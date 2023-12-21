const sentenceCapitalization = (str) => {
  let result = "";

  for (let index = 0; index < str.length; index++) {
    if (index === 0 || str[index - 1] === " ") {
      result += str[index].toUpperCase();
    } else {
      result += str[index];
    }
  }

  return result;
};

console.log(sentenceCapitalization("some text needs to be capitalized"));
