/**

 You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

 Find out how many ways to assign symbols to make sum of integers equal to target S.

 Example 1:
 Input: nums is [1, 1, 1, 1, 1], S is 3.
 Output: 5
 Explanation:

 -1+1+1+1+1 = 3
 +1-1+1+1+1 = 3
 +1+1-1+1+1 = 3
 +1+1+1-1+1 = 3
 +1+1+1+1-1 = 3

 There are 5 ways to assign symbols to make the sum of nums be target 3.

 */
public class TargetSum {
    public int findTargetSumWays(int[] nums, int S) {
        return helper(nums, S, 0);
    }

    private int helper(int[] nums, int remain, int i) {
        if (i == nums.length) {
            return remain == 0 ? 1 : 0;
        }

        return helper(nums, remain - nums[i], i + 1) +
                helper(nums, remain + nums[i], i + 1);
    }
}
