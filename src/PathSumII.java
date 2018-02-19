import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**

 Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

 For example:
 Given the below binary tree and sum = 22,
    5
    / \
    4   8
    /   / \
    11  13  4
    /  \    / \
     7    2  5   1
 returnhttps://leetcode.com/problems/path-sum-ii/discuss/
 [
 [5,4,11,2],
 [5,8,4,5]
 ]

 */
public class PathSumII {
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> result = new LinkedList<>();

        if (root == null) {
            return result;
        }

        dfs(root, 0, sum, new LinkedList<>(), result);

        return result;
    }

    public void dfs(TreeNode root,
                    int curSum,
                    int target,
                    List<Integer> curList,
                    List<List<Integer>> result) {
        if (root == null) {
            return;
        }

        curSum = curSum + root.val;
        curList.add(root.val);

        if (root.left == null && root.right == null && curSum == target) {
            result.add(new ArrayList<>(curList));
        } else {
            dfs(root.left, curSum, target, curList, result);
            dfs(root.right, curSum, target, curList, result);
        }

        //System.out.println(Arrays.toString(curList.toArray()));

        curSum = curSum - root.val;
        curList.remove(curList.size() - 1);
    }
}
