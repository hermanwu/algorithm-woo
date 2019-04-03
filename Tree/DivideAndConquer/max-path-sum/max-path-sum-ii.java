/*
Given a binary tree, find the maximum path sum from root.

The path may end at any node in the tree and contain at least one node in it.
*/

public class Solution {
  /**
   * @param root: the root of binary tree.
   * @return: An integer
   */
  public int maxPathSum2(TreeNode root) {
      // write your code here
      
      return findMax(root, 0);
  }
  
  private int findMax(TreeNode node, int cur) {
      if (node == null) {
          return cur;
      }
      
      cur = cur + node.val;
      int maxLeft = Math.max(cur, findMax(node.left, cur));
      int maxRight = Math.max(cur, findMax(node.right, cur));
      

      return Math.max(maxLeft, maxRight);
      
  }
}