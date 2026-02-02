let createCounter = function (n) {
  let count = n;
  return function () {
    console.log(count);
    return count++;
  };
};

let counter = createCounter(10);
counter();
counter();
counter();
