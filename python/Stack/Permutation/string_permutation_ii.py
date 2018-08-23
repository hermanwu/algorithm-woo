'''
Description
Given a string, find all permutations of it without duplicates.

Have you met this question in a real interview?
Example
Given "abb", return ["abb", "bab", "bba"].

Given "aabb", return ["aabb", "abab", "baba", "bbaa", "abba", "baab"].
'''

def stringPermutation2(self, str):
  if str == None or str == '':
    return ['']

  result = []

  s = list(str)

  s.sort()
  visited = [False] * len(s)
  self.dfs(s, visited, cur, result)

  return result

def dfs(self, s, visited, cur, result):
  if len(cur) == len(s):
    result.append("".join(cur))
    return

  for i in range(len(s)):
    if visited[i]:
      continue

    if i != 0 and s[i] == s[i - 1] and not visited[i - 1]:
      continue

    cur.append(s[i])
    visited[i] = True
    self.dfs(s, visited, cur, result)
    visited[i] = False
    cur.pop()