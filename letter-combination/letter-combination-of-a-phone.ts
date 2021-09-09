/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

*/

/**

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

 */

// recursion.
// backtracking.
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

function letterCombinationsDFS(digits: string): string[] {
  if (digits === "") {
    return [];
  }

  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const result = [];

  helper(digits, map, 0, [], result);

  return result;
}

function helper(
  digits: string,
  map: { [key: string]: string[] },
  curIndex: number,
  curString: string[],
  result: string[]
) {
  if (curIndex === digits.length) {
    result.push(curString.join(""));
  } else {
    const charArray = map[digits.charAt(curIndex)];

    for (let char of charArray) {
      curString.push(char);
      helper(digits, map, curIndex + 1, curString, result);
      curString.pop();
    }
  }
}

function letterCombinationsBFS(digits: string): string[] {
  if (digits === "") {
    return [];
  }

  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const queue = [""];

  for (let i = 0; i < digits.length; i++) {
    const charArray = map[digits.charAt(i)];
    const length = queue.length;

    for (let j = 0; j < length; j++) {
      const curString = queue.shift();

      for (let char of charArray) {
        queue.push(curString + char);
      }
    }
  }

  return queue;
}
