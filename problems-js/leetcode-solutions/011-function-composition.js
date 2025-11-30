let compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};
console.log(compose([(x) => x + 1, (x) => 2 * x])(5));
console.log(compose([])(5));
