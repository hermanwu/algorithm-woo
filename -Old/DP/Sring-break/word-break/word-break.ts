/**
 Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note that the same word in the dictionary may be reused multiple times in the segmentation.

  Example 1:

  Input: s = "leetcode", wordDict = ["leet","code"]
  Output: true
  Explanation: Return true because "leetcode" can be segmented as "leet code".

  Example 2:

  Input: s = "applepenapple", wordDict = ["apple","pen"]
  Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
  Note that you are allowed to reuse a dictionary word.

  Example 3:

  Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  Output: false
 */

function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false);
  const dict = new Set(wordDict); // helper method to generate a map.

  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    const current = s.slice(0, i);
    // lee

    if (dict.has(current)) {
      dp[i] = true;
    } else {
      let found = false;
      for (let j = 1; j < i && found === false; j++) {
        if (dp[j] === true && dict.has(s.slice(j, i))) {
          dp[i] = true;
          found = true;
        }
      }
    }
  }
  return dp[s.length];
}

console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
