/**

394. Decode String
https://leetcode.com/problems/decode-string/

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
 

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Example 4:
Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
 

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
 */

function decodeString(s: string): string {
  const stack = [];
  let curSum = 0;
  let curString = "";

  // Iterate through the string.
  for (let i = 0; i < s.length; i++) {
    // If character is '[', it means nested string starts,
    //  so push the existing parent string to the stack.
    if (s[i] === "[") {
      stack.push(curString);
      stack.push(curSum);
      curString = "";
      curSum = 0;
    }
    // If character is ']', it means nested string ends.
    // Get the repeat number and generate decoded nested string.
    // Add it to parent string.
    else if (s[i] === "]") {
      const num = stack.pop();
      let prevString = stack.pop();
      for (let i = 0; i < num; i++) {
        prevString = prevString + curString;
      }
      curString = prevString;
    }
    // If the character is number, calculate the repeated value.
    else if (parseInt(s[i]) >= 0 && parseInt(s[i]) <= 9) {
      curSum = curSum * 10 + parseInt(s[i]);
    }
    // Handle regular character.
    else curString += s[i];
  }
  return curString;
}
