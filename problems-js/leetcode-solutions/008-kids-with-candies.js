function kidsWithCandies(candies, extraCandies) {
  const maxCandies = Math.max(...candies);

  const result = [];

  for (let i = 0; i < candies.length; i++) {
    const willHave = candies[i] + extraCandies;

    if (willHave >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));
