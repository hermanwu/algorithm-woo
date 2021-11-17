/**
 * @param s: the article
 * @return: the number of letters that are illegal
 */
const count = function (s) {
  // Write your code here.
  let illegalCharacterCount = 0;
};

const notFirstCharacterCapitalized = (str, index) => {};

const isFirstCharacterAndLowCase = (str, index) => {};

const isFirstCharacter = (str, index) => {
  let temp = index - 1;
  while (temp >= 0) {
    if (str[temp] === " ") {
      continue;
    }

    if (str[temp] === ".") {
      return true;
    }
  }

  return false;
};
