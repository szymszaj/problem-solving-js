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

let twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
