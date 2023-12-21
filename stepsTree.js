const stepsTree = (num) => {
  for (let index = 1; index <= num; index++) {
    const spaces = [...Array(num - index)].map(() => " ");
    const hashes = [...Array(num - (num - index))].map(() => "#");

    console.log([...spaces, ...hashes].join(""));
  }
};

stepsTree(6);
