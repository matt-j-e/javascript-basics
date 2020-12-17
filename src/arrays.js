const getNthElement = (index, array) => {
  if (index > (array.length - 1)) {
    return array[index - array.length];
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return
};

const addToArray2 = (element, array) => {
  let array2 = [...array];
  array2.push(element);
  return array2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = String(numbers[i]);
  }
  return numbers;
};

const uppercaseWordsInArray = strings => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].toUpperCase();
  }
  return strings;
};

const reverseWordsInArray = strings => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].split('').reverse().join('');
  }
  return strings;
};

const onlyEven = numbers => {
  return numbers.filter((number) => number % 2 == 0)
};

const removeNthElement2 = (index, array) => {
  let newArray = array.filter((el) => array.indexOf(el) != index);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  let vowelWords = strings.filter((string) => string.match(/^[aeiou]/i));
  return vowelWords;
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, number) => acc + number);
};

const sortByLastLetter = strings => {
  strings = strings.map((string) => string.split('').reverse().join(''));
  strings = strings.sort();
  strings = strings.map((string) => string.split('').reverse().join(''));
  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
