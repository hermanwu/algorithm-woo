/**
 Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

 For example,
 Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.
 */
public class _SlidingWindowMaximum {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums.length == 0) {
            return new int[]{};
        }

        Deque<Integer> queue = new LinkedList<>();

        int[] results = new int[nums.length - k + 1];

        for (int i = 0; i < nums.length; i++) {

            // remove the number that have index out of the range
            while (!queue.isEmpty() && queue.peekFirst() + k <= i ) {
                queue.removeFirst();
            }

            // remove number that is smaller than the current number;
            while (!queue.isEmpty() && nums[queue.peekLast()] <= nums[i] ) {
                queue.removeLast();
            }

            queue.add(i);

            if (i >= k - 1) {
                results[i - k + 1] = nums[queue.peekFirst()];
            }
        }
        return results;
    }
}
