'''
Description
Given two string S and T, determine if S can be changed to T by deleting some letters (including 0 letter)

Have you met this question in a real interview?
Example
input:
S = "lintcode"
T = "lint"
output:
true
'''

def canConvert(self, s, t):
  index_s = 0
  index_t = 0

  while index_s < len(s):
    if s[index_s] == t[index_t]:
      index_t += 1
    if index_t == len(t):
        return True
    index_s += 1

  return False