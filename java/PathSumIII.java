import java.util.HashMap;
import java.util.Map;

/**
 You are given a binary tree in which each node contains an integer value.

 Find the number of paths that sum to a given value.

 The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

 The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

 Example:

 root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

 10
 /  \
 5   -3
 / \    \
 3   2   11
 / \   \
 3  -2   1

 Return 3. The paths that sum to 8 are:

 1.  5 -> 3
 2.  5 -> 2 -> 1
 3. -3 -> 11

 */

public class PathSumIII {
    public int pathSum(TreeNode root, int sum) {
        if (root == null) {
            return 0;
        }

        return // path starts from root
                helper(root, sum) +
                // path starts from left child
                pathSum(root.left, sum) +
                // path starts from right child
                pathSum(root.right, sum);
    }

    private int helper(TreeNode root, int sum) {
        if (root == null) {
            return 0;
        }

        return  // root alone
                (root.val == sum ? 1 : 0) +
                // root with left branch
                helper(root.left, sum - root.val) +
                // root with right branch
                helper(root.right, sum - root.val);
    }

    public int pathSumSolutionII(TreeNode root, int sum) {
        if (root == null) {
            return 0;
        }

        Map<Integer, Integer> map = new HashMap<>();

        map.put(0, 1);

        return findPathSum(root, 0, sum, map);
    }

    private int findPathSum(TreeNode cur, int prefixSum, int target, Map<Integer, Integer> map) {

        if (cur == null) {
            return 0;
        }

        prefixSum += cur.val;

        int numPathToCurr = map.getOrDefault(prefixSum - target, 0);

        map.put(prefixSum, map.getOrDefault(prefixSum, 0) + 1);

        int res = numPathToCurr +
                  findPathSum(cur.left, prefixSum, target, map) +
                  findPathSum(cur.right, prefixSum, target, map);

        map.put(prefixSum, map.getOrDefault(prefixSum, 0) - 1);

        return res;
    }
}
