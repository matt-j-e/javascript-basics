const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return (a && !b) || (!a && b);
};

const truthiness = a => {
  if (a) {
    return true;
  } else {
    return false;
  }
};

const isEqual = (a, b) => {
  return a == b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 == 1;
};

const isEven = a => {
  return a % 2 == 0;
};

const isSquare = a => {
  return Number.isInteger(Math.sqrt(a));
};

const startsWith = (char, string) => {
  return string.startsWith(char);
};

const containsVowels = string => {
  let m = string.search(/[aeiou]/i);
  if (m < 0) {
    return false;
  } else {
    return true;
  }
};

const isLowerCase = string => {
  let l = string.toLowerCase();
  return l === string;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
