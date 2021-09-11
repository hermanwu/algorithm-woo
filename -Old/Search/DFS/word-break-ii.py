'''
Description
中文
English
Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.

Return all such possible sentences.

Have you met this question in a real interview?  
Example
Example 1:

Input："lintcode"，
Output：["lint code", "lint co de"]
Explanation：
insert a space is "lint code"，insert two spaces is "lint co de".
Example 2:

Input："a"，[]
Output：[]
Explanation：dict is null
'''
class solution:
  def wordBreak2(self, s, wordDict):
    if not s or not wordDict:
      return []
    result = []
    self.dfs(s, wordDict, [], result)

    return result

  def dfs(self, s, wordDict, localResult, result):
    if not s:
      ans = ' '.join(localResult[:])
      result.append(s)
      return
    
    for i in range(1, len(s) + 1):
      if s[:i] in wordDict:
        localResult.append(s[:i])
        self.dfs(s[i:], wordDict, localResult, result)
        localResult.pop()


# memorization
class solution:
  def wordBreak3(self, s, wordDict):
    if not s or not wordDict:
      return []
    
    cache = {}
    result = self.dfs(s, wordDict, cache)

    return result

  def dfs(self, s, wordDict, cache):
    if not s:
      return []

    if s in cache:
      return cache[s]
    
    ans = []
    if s in wordDict:
      ans.append(s)

    for i in range(1, len(s)):
      if s[:i] in wordDict:
        result = self.dfs2(s[i:], wordDict, cache)
        if result:
          for subans in reuslt:
            ans.append(s[:i] + ' ' + subans)

    cache[s] = ans
    return ans