const fizzBuzz = (num) => {
  for (let index = 1; index <= num; index++) {
    if (index % 15 === 0) {
      console.log("fizzbuzz");
    } else if (index % 3 === 0) {
      console.log("fizz");
    } else if (index % 5 === 0) {
      console.log("buzz");
    }
  }
};

console.log(fizzBuzz(20));
