/**
 Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

 The update(i, val) function modifies nums by updating the element at index i to val.

 Example:
 Given nums = [1, 3, 5]

 sumRange(0, 2) -> 9
 update(1, 2)
 sumRange(0, 2) -> 8

 Note:
 The array is only modifiable by the update function.
 You may assume the number of calls to update and sumRange function is distributed evenly.

 */
public class RangeSumQueryMutable {

    public static void main(String[] args) {
        int[] nums = new int[]{1, 3, 5};

        RangeSumQueryMutable obj = new RangeSumQueryMutable();

        RangeSumQueryMutable.NumArray na = obj.new NumArray(nums);

        int result = na.sumRange(0, 2);

        Printer.printResultComparsion(result, 9);

        na.update(1, 2);

        result = na.sumRange(0, 2);

        Printer.printResultComparsion(result, 8);
    }

    class NumArray {
        public int[] nums;
        public int[] segmentTree;

        public NumArray(int[] nums) {
            this.nums = nums;

            segmentTree = buildTree(nums);
        }

        public int[] buildTree(int[] nums) {
            int m = nums.length;
            int[] tree = new int[m * 2];

            for (int i = m; i < m * 2; i++) {
                tree[i] = nums[i - m];
            }

            for (int i = m - 1; i > 0; i--) {
                tree[i] = tree[i * 2] + tree[i * 2 + 1];
            }

            return tree;
        }

        public void update(int i, int val) {
            int position = i + nums.length;

            segmentTree[position] = val;

            int left, right;

            while (position > 0) {
                left = position;
                right = position;

                if (position % 2 == 0) {
                    right = position + 1;
                } else {
                    left = position - 1;
                }

                position = left / 2;

                segmentTree[position] = segmentTree[left] + segmentTree[right];
             }
        }

        public int sumRange(int i, int j) {
            i += nums.length;
            j += nums.length;

            int sum = 0;

            while (i <= j) {
                // right node;
                if ((i % 2 == 1)) {
                    sum += segmentTree[i];
                    i++;
                }

                // left node;
                if ((j % 2) == 0) {
                    sum += segmentTree[j];
                    j--;
                }

                i /= 2;
                j /= 2;
            }
            return sum;
        }
    }
}
