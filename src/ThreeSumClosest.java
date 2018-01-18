import java.util.Arrays;

/**
 Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
 Return the sum of the three integers. You may assume that each input would have exactly one solution.

 For example, given array S = {-1 2 1 -4}, and target = 1.

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

 */
public class ThreeSumClosest {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);

        int n = nums.length;
        int result = nums[0] + nums[1] + nums[n - 1];

        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;

            while (left < right) {
                int temp = nums[i] + nums[left] + nums[right];

                if (result == target) {
                    return result;
                }

                if (temp - target < 0) {
                    left++;
                } else {
                    right--;
                }


                if (Math.abs(temp - target) < Math.abs(result - target)) {
                    result = temp;
                }
            }
        }
        return result;
    }
}
