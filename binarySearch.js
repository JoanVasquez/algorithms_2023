//Divide and conquer
//O(Log n)
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === target) {
    return middle;
  }

  return -1;
};

const result = binarySearch([2, 4, 6, 7, 10, 60, 80, 120, 500], 80);

console.log(result);
