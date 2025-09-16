var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[num] = i;
  }
};
