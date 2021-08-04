'''
Description
Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.

Given target value is a floating point.
You may assume k is always valid, that is: k ≤ total nodes.
You are guaranteed to have only one unique set of k values in the BST that are closest to the target.
Have you met this question in a real interview?
Example
Given root = {1}, target = 0.000000, k = 1, return [1].

Challenge
Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?
'''

def closestKValues(self, root, target, k):
  lower = []
  upper = []

  while root != None:
    if root.val > target:
      upper.append(root)
      root = root.left

    else:
      lower.append(root)
      root = root.right


  def goUpper():
    node = upper.pop().right
    while node != None:
      upper.append(node)
      node = node.left

  def goLower():
    node = lower.pop().left
    while node != None:
      lower.append(node)
      node = node.right

  res = []

  for x in range(k):
    if len(lower) == 0 and len(upper) == 0:
      return None

    if len(lower) == 0:
      res.append(upper[-1].val)
      goUpper()
      continue

    if len(upper) == 0:
      res.append(upper[-1].val)
      goLower()
      continue

    if abs(lower[-1].val - target) < abs(upper[-1].val - target):
      res.append(lower[-1].val)
      goLower()
    else:
      res.append(upper[-1].val)
      goUpper()

  return res
