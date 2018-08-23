'''

15. Permutations
Given a list of numbers, return all possible permutations.

Example
For nums = [1,2,3], the permutations are:

[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
Challenge
Do it without recursion.

Notice
You can assume that there is no duplicate numbers in the list.

'''

def permute(self, nums):
  if nums is None:
    return []

  result = []
  visited = set()

  self.dfs(nums, visited, [], result)

  return result

def dfs(self, nums, visited, cur, result):
  if len(cur) == len(nums):
    result.append(list(cur))
    return

  for i in range(len(nums)):
    if i in visited:
      continue

    visited.add(i)
    cur.append(nums[i])
    self.dfs(nums, visited, cur, result)
    cur.pop()
    visited.remove(i)
