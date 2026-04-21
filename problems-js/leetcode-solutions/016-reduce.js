let reduce = function (nums, fn, init) {
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  return acc;
};

const sum = reduce([1, 2, 3, 4, 5], (acc, curr) => acc + curr, 0);
console.log("Sum:", sum);
