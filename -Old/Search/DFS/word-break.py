'''
Given a string s and a dictionary of words dict, determine if s can be break into a space-separated sequence of one or more dictionary words.

Have you met this question in a real interview?  
Example
Example 1:
	Input:  "lintcode", ["lint", "code"]
	Output:  true

Example 2:
	Input: "a", ["a"]
	Output:  true
	
'''
class solution:
  def wordBreak(self, s, dict):
    if not s:
      return True
    
    if not dict:
      return False

    return self.dfs(s, dict)

  def dfs(self, string, dict):  
    for i in range(1, len(string) + 1):
      if string[:i] in dict:
        if self.dfs(string[i:], dict):
          return True
    
    return False