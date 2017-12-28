import java.util.Stack;

/**

 Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order,
 then the whole array will be sorted in ascending order, too.

 You need to find the shortest such subarray and output its length.

 Example 1:
 Input: [2, 6, 4, 8, 10, 9, 15]

 Output: 5

 Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 Note:

 Then length of the input array is in range [1, 10,000].
 The input array may contain duplicates, so ascending order here means <=.

 */

public class ShortestUnsortedContinuousSubarray {
    public static void main(String[] args) {
        ShortestUnsortedContinuousSubarray s = new ShortestUnsortedContinuousSubarray();

        int[] input = new int[]{ 2, 6, 4, 8, 10, 9, 15};

        // expected output 5;
        Printer.printResultComparsion(s.findUnsortedSubarray(input), 5);
    }

    public int findUnsortedSubarray(int[] nums) {
        if (nums.length < 2) {
            return 0;
        }

        // find left bound;
        int n = nums.length, i;
        Stack<Integer> indexStack = new Stack<>();
        int leftbound = n - 1;
        int rightbound = 0;

        // left monotonic stack
        for (i = 0; i < n; i++) {
            if (indexStack.isEmpty() || nums[i] >= nums[indexStack.peek()]) {
                indexStack.push(i);
            } else {
                leftbound = Math.min(leftbound, indexStack.pop());
                i--;
            }
        }

        indexStack.clear();

        // right monotonic stack
        for (i = n - 1; i >= 0; i--) {
            if (indexStack.isEmpty() || nums[i] <= nums[indexStack.peek()]) {
                indexStack.push(i);
            } else {
                rightbound = Math.max(rightbound, indexStack.pop());
                i++;
            }
        }

        return rightbound - leftbound > 0 ? rightbound - leftbound + 1 : 0;
    }
}
