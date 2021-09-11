/**
 * 44. Wildcard Matching
 * https://leetcode.com/problems/wildcard-matching/
 *
 * Given an input string (s) and a pattern (p),
 *  implement wildcard pattern matching with support for '?' and '*' where:
 *  1. '?' Matches any single character.
 *  2. '*' Matches any sequence of characters (including the empty sequence).
 * The matching should cover the entire input string (not partial).
 *
 * Example 1:
 * Input: s = "aa", p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 * Example 2:
 * Input: s = "aa", p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 *
 *
 * Example 3:
 * Input: s = "cb", p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 *
 * Example 4:
 *  Input: s = "adceb", p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
 *
 * Example 5:
 * Input: s = "acdcb", p = "a*c?b"
 * Output: false
 *
 * Constraints:
 * 0 <= s.length, p.length <= 2000
 * s contains only lowercase English letters.
 * p contains only lowercase English letters, '?' or '*'.
 */

function isMatch(s: string, p: string): boolean {
  // 2D map for memorization.
  const dp = {};

  // Helper function.
  function helper(s: string, p: string): boolean {
    if (dp[s] && dp[s][p] !== undefined) {
      return dp[s][p];
    }

    // Handle duplicate * cases.
    if (p[0] === "*" && p[1] === "*") {
      return helper(s, p.slice(1));
    }

    if (dp[s] === undefined) {
      dp[s] = {};
    }

    if (s === p) {
      dp[s][p] = true;
    } else if (p === "*") {
      dp[s][p] = true;
    } else if (s === "" || p[0] === "") {
      dp[s][p] = false;
    } else if (s[0] === p[0] || p[0] === "?") {
      dp[s][p] = helper(s.slice(1), p.slice(1));
    } else if (p[0] === "*") {
      dp[s][p] = helper(s.slice(1), p) || helper(s, p.slice(1));
    } else {
      dp[s][p] = false;
    }

    return dp[s][p];
  }
  // console.log(dp);
  return helper(s, p);
}

// console.log(isMatch('aa', 'a'));
// console.log(isMatch('aa', '*'));
// console.log(isMatch('cb', '?a'));
// console.log(isMatch('adceb', '*a*b'));
// console.log(isMatch('acdcb', 'a*c?b'));
console.log(isMatch("", "******"));
