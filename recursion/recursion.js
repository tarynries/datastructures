/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }

  const [firstNum, ...restNums] = nums;
  return firstNum * product(restNums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  }

  const [firstWord, ...restWords] = words;
  const longestRest = longest(restWords);
  return firstWord.length > longestRest ? firstWord.length : longestRest;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str;
  }

  const [firstChar, ...remainingChars] = str;
  return firstChar + everyOther(remainingChars.slice(1));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];

  if (firstChar !== lastChar) {
    return false;
  }

  const remainingChars = str.slice(1, -1);
  return isPalindrome(remainingChars);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) {
    return -1;
  }

  if (arr[index] === val) {
    return index;
  }

  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') {
    return '';
  }

  const lastChar = str[str.length - 1];
  const remainingChars = str.slice(0, -1);
  return lastChar + revString(remainingChars);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
