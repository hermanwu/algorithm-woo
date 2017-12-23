/**
 Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 */
public class RangeSumQueryImmutable {

    public static void main(String[] args) {
        int[] nums = new int[]{1, 2, 3, 4};

        RangeSumQueryImmutable obj = new RangeSumQueryImmutable();

        RangeSumQueryImmutable.NumArray na = obj.new NumArray(nums);
        int result = na.sumRange(1, 2);

        Printer.print(result);
    }

    class NumArray {
        public int[] nums;
        public int[] preSumArray;

        public NumArray(int[] nums) {
            this.nums = nums;
            this.preSumArray = new int[nums.length + 1];

            for (int i = 1; i <= nums.length; i++) {
                preSumArray[i] = preSumArray[i - 1] + nums[i - 1];
            }
        }

        public int sumRange(int i, int j) {
            return preSumArray[j + 1] - preSumArray[i];
        }
    }
}
