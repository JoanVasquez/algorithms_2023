const sumTargetArr = (arr, target) => {
  const stacks = {};
  const result = [];

  arr.forEach((item, index) => {
    const difference = target - item;

    if (difference in stacks) {
      result[0] = index;
      result[1] = stacks[difference];
    }

    stacks[item] = index;
  });

  return result;
};

console.log(sumTargetArr([2, 3, 5, 6, 8], 9));
