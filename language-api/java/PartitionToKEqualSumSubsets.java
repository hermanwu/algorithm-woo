import java.util.Arrays;

/**

 Given an array of integers nums and a positive integer k,
 find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

 Example 1:
 Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 Output: True
 Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
 Note:

 1 <= k <= len(nums) <= 16.
 0 < nums[i] < 10000.

 */
public class PartitionToKEqualSumSubsets {
    public static void main(String[] args) {
        int[] input = new int[]{4, 3, 2, 3, 5, 2, 1};
        int k = 4;

        PartitionToKEqualSumSubsets p = new PartitionToKEqualSumSubsets();

        Printer.printResultComparsion(p.canPartitionKSubsets(input, 4), true);
    }

    public boolean canPartitionKSubsets2(int[] nums, int k) {
        int sum = 0;
        int i, n = nums.length;
        for (i = 0; i < n; i++) {
            sum += nums[i];
        }

        if (sum % k != 0) {
            return false;
        }

        int target = sum / k;

        Arrays.sort(nums);

        int startIndex = n - 1;

        if (nums[startIndex] > target) {
            return false;
        }

        while (startIndex >= 0 && nums[startIndex] == target) {
            k--;
            startIndex--;
        }

        return search(new int[k], startIndex, nums, target);
    }

    public boolean search(int[] groups, int startIndex, int[] nums, int target) {
        if (startIndex < 0) return true;
        int selected = nums[startIndex];

        for (int i = 0; i < groups.length; i++) {
            if (groups[i] + selected <= target) {
                groups[i] += selected;

                if (search(groups, startIndex - 1, nums, target)) {
                    return true;
                }

                groups[i] -= selected;
            }

            // if the selected value will not fit in any set;
            if (groups[i] == 0) break;
        }
        return false;
    }

    public boolean canPartitionKSubsets(int[] nums, int k) {
        int sum = 0;

        for (int num : nums) {
            sum += num;
        }
        if (sum % k != 0) {
            return false;
        }

        boolean[] visited = new boolean[nums.length];

        return helper(nums, visited, k, 0, 0, 0, sum / k);
    }

    private boolean helper(int[] nums, boolean[] visited,
                           int k, int sum, int start,
                           int curUsedNum, int target) {
        if (k == 1) return true;

        if (sum == target && curUsedNum > 0) {
            return helper(nums, visited, k - 1, 0, 0, 0, target);
        }

        for (int i = start; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;

                if (helper(nums, visited, k, sum + nums[i], i, curUsedNum++, target)) {
                    return true;
                }

                visited[i] = false;
            }
        }

        return false;
    }
}