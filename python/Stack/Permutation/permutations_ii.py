'''
Description
Given a list of numbers with duplicate number in it. Find all unique permutations.

Have you met this question in a real interview?
Example
For numbers [1,2,2] the unique permutations are:

[
  [1,2,2],
  [2,1,2],
  [2,2,1]
]
Challenge
Using recursion to do it is acceptable. If you can do it without recursion, that would be great!

'''

def permuteUnique(self, nums):
  if nums is None:
    return []

  result = []
  nums.sort()
  visited = [False] * len(nums)
  cur = []
  results = []
  self.dfs(nums, visited, cur, result)

  return result

def dfs(self, nums, visited, cur, result):
  if len(cur) == len(nums):
    result.append(list(cur))
    return

  for i in range(len(nums)):
    if visited[i]:
      continue

    if i != 0 and nums[i] == nums[i - 1] and not visited[i - 1]:
      continue

    cur.append(nums[i])
    visited[i] = True
    self.dfs(nums, visited, cur, result)
    visited[i] = False
    cur.pop()