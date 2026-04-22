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
