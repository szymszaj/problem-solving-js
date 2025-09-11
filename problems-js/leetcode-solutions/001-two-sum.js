let createCounter = function (n) {
  let count = n;
  return function () {
    console.log(count);
    return count++;
  };
};
