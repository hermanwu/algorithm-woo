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
    // --- Recursive way -----


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
    //--- Iterative way -----

    public static void main(String[] args) {
        TreeNode root = TreeGenerator.generateTreeBalanced();

        BinaryTreeInorderTraversal btt = new BinaryTreeInorderTraversal();

        System.out.println(Arrays.toString(btt.inorderTraversalRecursive(root).toArray()));

        System.out.println(Arrays.toString(btt.inorderTraversalIterative(root).toArray()));
    }
}
