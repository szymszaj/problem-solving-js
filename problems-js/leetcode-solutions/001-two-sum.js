let createCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};
