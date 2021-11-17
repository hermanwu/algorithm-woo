import java.util.ArrayList;

public class TreeNode {
  public int val;
  public TreeNode left, right;
  public TreeNode(int val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class Solution {
  public List<List<Integer>> pathSum(TreeNode root, int sum) {
    List<List<Integer>> paths = new ArrayList<>();
    findPaths(root, sum, new ArrayList<Integer>(), path);
    return path;
  }

  private void findPath(
    TreeNode root, 
    int sum, 
    List<Integer> current, 
    List<List<Integer>>  path) {
      if (root == null) {
        return;
      }

      current.add(root.val);

      if (root.right == null && root.left == null && root.val == sum) {
         path.add(current);
         return;
      }

      
      findPath(root.left, sum - root.val, new ArrayList<Integer>(current), paths);
      findPath(root.right, sum - root.val, new ArrayList<Integer>(current), paths);      
  } 
}