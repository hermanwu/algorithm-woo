
'''
Description
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
Have you met this question in a real interview?
Example
Given root = {1}, target = 4.428571, return 1.

'''

def closestValue(self, root, target):
  stack = []
  result = []

  cur = root

  while cur or stack:
    while cur:
      stack.append(cur)
      cur = cur.left

    cur = stack.pop()
    result.append(cur.val)
    cur = cur.right


  for i in range(0, len(result) - 1):
    if result[i] <= target and target <= result[i + 1]:
      if target - result[i] < target - result[i + 1]:
        return result[i]
      else:
        return result[i + 1]

    if result[0] > target:
      return result[0]

    if result[-1] < target:
      return result[-1]