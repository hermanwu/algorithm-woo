// https://leetcode.com/problems/strobogrammatic-number-iii/
/**
248. Strobogrammatic Number III

Given two strings low and high that represent two integers low and high where low <= high, return the number of strobogrammatic numbers in the range [low, high].

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:

Input: low = "50", high = "100"
Output: 3
Example 2:

Input: low = "0", high = "0"
Output: 1
 
Constraints:

1 <= low.length, high.length <= 15
low and high consist of only digits.
low <= high
low and high do not contain any leading zeros except for zero itself.

 */
function strobogrammaticInRange(low: string, high: string): number {
  const pairs = [
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ];
  let count = 0;

  for (let len = low.length; len <= high.length; len++) {
    let c = new Array(len).fill(null);
    dfs(low, high, c, 0, len - 1);
  }

  return count;

  function dfs(
    low: string,
    high: string,
    c: string[],
    left: number,
    right: number
  ) {
    if (left > right) {
      const s = c.join("");
      if (
        (s.length === low.length &&
          Number.parseInt(s) < Number.parseInt(low)) ||
        (s.length === high.length && Number.parseInt(s) > Number.parseInt(high))
      ) {
        return;
      }

      count += 1;
      return;
    }

    for (let p of pairs) {
      c[left] = p[0];
      c[right] = p[1];

      if (c.length != 1 && c[0] == "0") {
        continue;
      }

      if (left == right && p[0] != p[1]) {
        continue;
      }

      dfs(low, high, c, left + 1, right - 1);
    }
  }
}
