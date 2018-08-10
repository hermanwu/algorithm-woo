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
  return t in s