'''

Description
Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Have you met this question in a real interview?
Example
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false

'''

class Solution:
  """
  @param s: A string
  @param p: A string includes "?" and "*"
  @return: is Match?
  """
  def isMatch(self, s, p):
    # write your code here
    n = len(s)
    m = len(p)
    f = [[False for _ in range(m + 1)] for _ in range(n + 1)]
    f[0][0] = True

    for i in range(0, n + 1):
      for j in range(0, m + 1):
        if i > 0 and j > 0:
          f[i][j] |= f[i - 1][j - 1] and \
                     (s[i - 1] == p[j - 1] or p[j - 1] in ['?', '*'])

        if i > 0 and j > 0:
          f[i][j] |= f[i - 1][j] and p[j - 1] == '*'

        if j > 0:
          f[i][j] |= f[i][j - 1] and p[j - 1] == '*'

    return f[n][m]