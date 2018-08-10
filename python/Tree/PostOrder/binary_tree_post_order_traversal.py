"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""


class Solution:
  """
  @param root: A Tree
  @return: Postorder in ArrayList which contains node values.
  """

  def postorderTraversal(self, root):
    # write your code here
    result = []
    stack = []

    if root is None:
      return result

    cur = root

    while cur is not None or stack:
      # handle left branch
      while cur is not None:
        stack.append(cur)
        cur = cur.left

      temp = stack[-1].right

      # handle right branch
      if temp is None:
        temp = stack.pop()
        result.append(temp.val)

        while stack and stack[-1].right == temp:
          temp = stack.pop()
          result.append(temp.val)

      else:
        cur = temp

    return result
