// Input: [3, 5, 2, 1, 6, 4]
// Output: [1, 6, 2, 5, 3, 4]
// where   1 < 6 > 2 < 5 > 3 < 4
// Can have multiple solutions

import java.util.Arrays;

public class WiggleSort {
    public void wiggleSort(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return;
        }

        for (int i = 1; i < nums.length; i++) {
            if (i % 2 == 1) {
                if (nums[i] < nums[i - 1]) {
                    swap(nums, i, i - 1);
                }
            } else {
                if (nums[i] > nums[i - 1]) {
                    swap(nums, i, i - 1);
                }
            }
        }
    }

    public void swap(int[] nums, int indexA, int indexB) {
        int temp = nums[indexA];
        nums[indexA] = nums[indexB];
        nums[indexB] = temp;
    }

    public static void main(String[] args) {
        WiggleSort ws = new WiggleSort();
        int[] test1 = new int[]{3, 5, 2, 1, 6, 4};
        ws.wiggleSort(test1);

        System.out.println(Arrays.toString(test1));
    }
}
