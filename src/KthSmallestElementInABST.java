import java.util.Stack;

/**

 Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

 Note:
 You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

 Follow up:
 What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

 Credits:
 Special thanks to @ts for adding this problem and creating all test cases.

 */
public class KthSmallestElementInABST {
    public int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode cur = root;
        int count = 0;

        while (!stack.isEmpty() || cur != null ) {
            if (cur != null) {
                stack.push(cur);
                cur = cur.left;
            } else {
                TreeNode node = stack.pop();
                count++;
                if (count == k) {
                    return node.val;
                }
                cur = node.right;
            }
        }
        return Integer.MIN_VALUE;
    }
}
