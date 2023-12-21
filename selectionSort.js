const selectionSort = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    let lowest = index;
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (index !== lowest) {
      const temp = arr[index];
      arr[index] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
};

console.log(selectionSort([2, 4, 1, 5, 7, 3]));
