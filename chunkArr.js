const chunkArr = (arr, target) => {
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    if (index === 0 || index % target === 0) {
      result.push([]);
    }

    result[result.length - 1].push(arr[index]);
  }

  return result;
};

console.log(chunkArr([2, 5, 1, 7, 5, 8], 2));
