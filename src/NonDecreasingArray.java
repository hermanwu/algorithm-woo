/**

 Given an array with n integers, your task is to check if it could become non-decreasing by modify at most 1 element.

 */
public class NonDecreasingArray {
    public static void main(String[] args) {

        // Test 1
        int[] nums = new int[]{2, 4, 2, 6};

        NonDecreasingArray n = new NonDecreasingArray();

        boolean result = n.checkPossibility(nums);

        System.out.println(result);


        // Test 2
        int[] nums2 = new int[]{3, 4, 2, 6};

        NonDecreasingArray n2 = new NonDecreasingArray();

        boolean result2 = n.checkPossibility(nums);

        System.out.println(result2);
    }

    public boolean checkPossibility(int[] nums) {
        int count = 0;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) {
                count++;

                if (count > 1) {
                    return false;
                }

                // check the previous two numbers
                if (i >= 2 && nums[i] > nums[i - 2]) {
                    nums[i - 1] = nums[i];
                } else {
                    nums[i] = nums[i - 1];
                }
            }
        }
        return true;
    }
}
