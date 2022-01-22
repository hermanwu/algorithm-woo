/**
https://leetcode.com/problems/longest-palindromic-subsequence/

516. Longest Palindromic Subsequence
Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 
Example 1:
Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".

Example 2:
Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
 

Constraints:
1 <= s.length <= 1000
s consists only of lowercase English letters.
*/

function longestPalindromeSubseq(s: string): number {
  const dp = new Array(s.length).fill(null);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length).fill(0);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1;

    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 2;
    } else {
      dp[i][i + 1] = 1;
    }

    for (let j = i + 2; j < s.length; j++) {
      if (s.charAt(i) == s.charAt(j)) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][s.length - 1];
}

// console.log(longestPalindromeSubseq("bbbab")); // 4
// console.log(longestPalindromeSubseq("cbbd")); // 2
