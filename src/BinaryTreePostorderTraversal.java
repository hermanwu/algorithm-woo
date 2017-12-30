import java.util.ArrayList;
import java.util.List;
import java.util.Stack;


public class BinaryTreePostorderTraversal {

    public static void main(String[] args) {
        TreeNode treeNode = TreeGenerator.generateTreeBalanced();

        BinaryTreePostorderTraversal postorderTraversal = new BinaryTreePostorderTraversal();

        Printer.printIntegerList(postorderTraversal.postorderTraversalIterative(treeNode));
    }

    public List<Integer> postorderTraversalIterative(TreeNode root) {
        TreeNode cur = root;
        Stack<TreeNode> stack = new Stack();
        List<Integer> result = new ArrayList<>();

        while (cur != null || !stack.isEmpty()) {
            if (cur != null) {
                stack.push(cur);

                // handle all left treenode.
                cur = cur.left;
            }  else {
                // check right treenode.
                TreeNode temp = stack.peek().right;
                if (temp == null) {
                    // handle last single nodes.
                    temp = stack.pop();
                    result.add(temp.val);

                    while (!stack.isEmpty() && stack.peek().right == temp) {
                        temp = stack.pop();
                        result.add(temp.val);
                    }
                }
                // has more nodes need to process.
                else {
                    cur = temp;
                }
            }
        }
        return result;
    }
}