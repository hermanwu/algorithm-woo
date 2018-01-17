/**
Kadane's Algorithm
 */
public class MaximumSumSubarray {
    public int maxSubArray(int[] nums) {
        int n = nums.length;

        int currentMax = nums[0];
        int globalMax = nums[0];

        for (int i = 1; i < n; i++) {
            currentMax = Math.max(nums[i], currentMax + nums[i]);
            globalMax = Math.max(currentMax, globalMax);
        }

        return globalMax;
    }
}
