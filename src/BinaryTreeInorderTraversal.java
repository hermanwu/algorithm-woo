// Use both recursion and iteration to inorder traverse binary tree.
// Company: facebook

import java.util.*;

public class BinaryTreeInorderTraversal {

    //--- Recursive way -----
    public List<Integer> inorderTraversalRecursive(TreeNode root) {
        List<Integer> result = new ArrayList<>();

        helper(result, root);

        return result;
    }

    private void helper(List<Integer> result, TreeNode root) {
        if (root == null) {
            return;
        }

        helper(result, root.left);
        result.add(root.val);
        helper(result, root.right);
    }


    //--- Iterative way -----
    public List<Integer> inorderTraversalIterative(TreeNode root) {
        List<Integer> result = new ArrayList<>();

        // Use stack to track nodes.
        Stack<TreeNode> stack = new Stack<>();
        TreeNode cur = root;

        while (!stack.isEmpty() || cur != null) {
            // Traverse left tree to the left most node;
            while (cur != null) {
                stack.push(cur);
                cur = cur.left;
            }

            cur = stack.pop();
            // Add parent node to the result before traverse right subtree;
            result.add(cur.val);
            cur = cur.right;
        }

        return result;
    }

    // Morris Traversal
    public List<Integer> inorderMorrisTraversal(TreeNode root) {

        List<Integer> result = new ArrayList<>();

        TreeNode cur = root;

        while (cur != null) {
            if (cur.left == null) {
                result.add(cur.val);
                cur = cur.right;
            } else {
                TreeNode pre = cur.left;

                while (pre.right != null && pre.right != cur) {
                    pre = pre.right;
                }

                if (pre.right == null) {
                    pre.right = cur;
                    cur = cur.left;
                } else {
                    pre.right = null;
                    result.add(cur.val);
                    cur = cur.right;
                }
            }
        }

        return result;
    }


    public static void main(String[] args) {
        TreeNode root = TreeGenerator.generateTreeBalanced();

        BinaryTreeInorderTraversal btt = new BinaryTreeInorderTraversal();

        System.out.println(Arrays.toString(btt.inorderTraversalRecursive(root).toArray()));

        System.out.println(Arrays.toString(btt.inorderTraversalIterative(root).toArray()));

        System.out.println(Arrays.toString(btt.inorderMorrisTraversal(root).toArray()));
    }
}
