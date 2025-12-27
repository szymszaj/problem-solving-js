let reverse = function (x) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  let result = 0;

  while (x !== 0) {
    let digit = x % 10;
    x = (x / 10) | 0;

    if (result > INT_MAX / 10 || (result === INT_MAX / 10 && digit > 7)) {
      return 0;
    }

    if (result < INT_MIN / 10 || (result === INT_MIN / 10 && digit < -8)) {
      return 0;
    }

    result = result * 10 + digit;
  }

  return result;
};
