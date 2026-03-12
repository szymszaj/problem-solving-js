function combinationSum(candidates, target) {
  const result = [];
  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i, current, remaining - candidates[i]);
      current.pop();
    }
  }
  backtrack(0, [], target);
  return result;
}

//next method

function combinationSum(candidates, target) {
  if (target === 0) return [[]];
  if (target < 0 || candidates.length === 0) return [];

  const [first, ...rest] = candidates;

  const withFirst = combinationSum(candidates, target - first).map((combo) => [
    first,
    ...combo,
  ]);

  const withoutFirst = combinationSum(rest, target);

  return [...withFirst, ...withoutFirst];
}
