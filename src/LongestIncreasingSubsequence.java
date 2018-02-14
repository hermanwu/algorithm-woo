/**

 Given an unsorted array of integers, find the length of longest increasing subsequence.

 For example,
 Given [10, 9, 2, 5, 3, 7, 101, 18],
 The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

 Your algorithm should run in O(n2) complexity.

 Follow up: Could you improve it to O(n log n) time complexity?

 */
public class LongestIncreasingSubsequence {
    public int lengthOfLIS(int[] nums) {
        int[] tails = new int[nums.length];

        int size = 0;

        for (int num : nums) {
            int i = 0, j = size;

            while (i != j) {
                int mid = (i + j) / 2;

                if (tails[mid] < num) {
                    i = mid + 1;
                } else {
                    j = mid;
                }
            }
            tails[i] = num;
            if (i == size) size++;
        }

        return size;
    }
}
