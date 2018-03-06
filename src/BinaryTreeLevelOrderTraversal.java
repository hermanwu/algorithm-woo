import java.util.*;
import util.TreeNode;

/**
Input: A TreeNode called root

     public class TreeNode {
        TreeNode left;
        TreeNode right;
        int val;

        public TreeNode(int val) {
            this.val = val;
        }
     }

 Steps: level order traversal the tree

 https://www.hackerrank.com/challenges/tree-level-order-traversal/problem

 Output:
 A list of lists, where each list represents a level. Each level contains its node values.

 Example:
         3
      2     5
    1     4  6

    output: [[3],
            [2, 5],
            [1, 4, 6]]
 */

public class BinaryTreeLevelOrderTraversal {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new LinkedList<List<Integer>>();

        Queue<TreeNode> q = new LinkedList<>();

        if (root == null) {
            return result;
        }

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
