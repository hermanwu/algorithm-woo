/**
 * Decode the given string
 * The encoding rule is k[encoded_string] where the encoded_string inside the
 * square brackets is being repeated exactly k times. Note that k is guaranteed
 * to be a positive integer.
 *
 * You may assume the input string is always valid; no extra white spaces,
 * square brackets are well-formed, etc.
 *
 * Furthermore, you may assume the original data does not contain any digits
 * and the digits are only for those repeat numbers, k. For example, there will
 * not be input like 3a or 2[4].
 *
 * Example 1:
 * Input: 3[a]2[bc]
 * Output: aaabcbc
 *
 * Example 2:
 * Input: 3[a2[c]]
 * Output: accaccacc
 *
 * Example 3:
 * Input: 2[abc]3[cd]ef
 * Output: abcabccdcdcdef
 *
 * Example 4:
 * Input: abc3[cd]xyz
 * Output: abccdcdcdxyz
 *
 * Example 5:
 * Input: ab2[a2[c]d]
 * Output: abaccdaccd
 *
 * @param str String to decode
 * @returns Decoded string
 */

// 3[ab]

let index = 0;

export function decodeString(str: string): string {
  return recursiveCall(str);
}

export function recursiveCall(str: string): string {
  const len = str.length;
  let result = "";
  let characterArray = str.split("");
  let repeatNumber = 0;
  let repeatingString = "";

  while (index < len) {
    if (characterArray[index] === "[") {
      // search in child node;
      repeatingString = recursiveCall(str, index + 1);

      index += repeatingString.length / repeatNumber;
    } else if (characterArray[index] >= "0" && characterArray[index] <= "9") {
      repeatNumber = repeatNumber * 10 + Number.parseInt(characterArray[index]);
    } else if (characterArray[index] === "]") {
      for (let i = 0; i < repeatNumber; i++) {
        result += repeatingString;
      }
      return result;
    } else {
      result += str[index];
    }
    index += 1;
  }

  return result;
}

console.log(recursiveCall("3[a2[c]]", 0));
