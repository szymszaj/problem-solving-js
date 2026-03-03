function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    if (remaining < 0) return;
  }

  backtrack(0, [], target);
  return result;
}
