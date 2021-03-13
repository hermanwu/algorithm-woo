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

const lettersByNumberMap = new Map<string, string[]>([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);

export function letterCombinations(digits: string): string[] {
  const results = [];

  if (!digits) {
    return results;
  }

  recursiveCall(results, "", 0, digits);

  return results;
}

export function recursiveCall(
  results: string[],
  curString: string,
  index: number,
  digits: string
): void {
  if (index === digits.length) {
    results.push(curString);
    return;
  }

  const digit = digits.charAt(index);

  const matchingLetters = lettersByNumberMap.get(digit);

  for (let letter of matchingLetters) {
    recursiveCall(results, curString + letter, index + 1, digits);
  }
}

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations(undefined));
console.log(letterCombinations("67"));
