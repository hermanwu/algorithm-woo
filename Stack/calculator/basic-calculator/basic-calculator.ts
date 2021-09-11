/**
Given a string s representing an expression, implement a basic calculator to evaluate it.

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
 

Constraints:

1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
 */
function calculate(s: string): number {
  let stack = [];

  let result = 0;
  let number = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (isDigit(c)) {
      number = 10 * number + parseInt(c);
    } else if (c === '+') {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (c === '-') {
      result += sign * number;
      number = 0;
      sign = -1;
    } else if (c === '(') {
      stack.push(result);
      stack.push(sign);
      // reset;
      sign = 1;
      result = 0;
    } else if (c === ')') {
      result += sign * number;
      number = 0;

      // sign before the parenthesis.
      result *= stack.pop();

      // result calculated before the parenthesis.
      result += stack.pop();
    }
  }

  if (number !== 0) result += sign * number;
  return result;
}

function isDigit(c: string): boolean {
  if (c === ' ') {
    return false;
  }

  return !isNaN(c as any);
}
