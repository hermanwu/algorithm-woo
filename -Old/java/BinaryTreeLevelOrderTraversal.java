import java.util.*;

/**
 * Input: A TreeNode called root
 * <p>
 * public class TreeNode {
 * TreeNode left;
 * TreeNode right;
 * int val;
 * <p>
 * public TreeNode(int val) {
 * this.val = val;
 * }
 * }
 * <p>
 * Steps: level order traversal the tree
 * <p>
 * https://www.hackerrank.com/challenges/tree-level-order-traversal/problem
 * <p>
 * Output:
 * A list of lists, where each list represents a level. Each level contains its node values.
 * <p>
 * Example:
 * 3
 * 2     5
 * 1     4  6
 * <p>
 * output: [[3],
 * [2, 5],
 * [1, 4, 6]]
 */

public class BinaryTreeLevelOrderTraversal {
  public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new LinkedList<List<Integer>>();
    if (root == null) {
      return result;
    }

    Queue<TreeNode> q = new LinkedList<>();
    q.offer(root);

    while (!q.isEmpty()) {
      // this the size of current level
      int size = q.size();
      List<Integer> l = new ArrayList<>();

      for (int i = 0; i < size; i++) {
        TreeNode temp = q.poll();
        l.add(temp.val);
        if (temp.left != null) {
          q.offer(temp.left);
        }

        if (temp.right != null) {
          q.offer(temp.right);
        }
      }
      result.add(l);
    }

    return result;
  }
}
