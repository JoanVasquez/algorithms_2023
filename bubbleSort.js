const bubbleSort = (arr) => {
  for (let lastUnsorted = arr.length - 1; lastUnsorted > 0; lastUnsorted--) {
    for (let index = 0; index < lastUnsorted; index++) {
      if (arr[index] > arr[index + 1]) {
        swap(arr, index, index + 1);
      }
    }
  }

  return arr;
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

console.log(bubbleSort([8, 2, 5, 3, 6]));
