/**

 Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

 If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

 The replacement must be in-place, do not allocate extra memory.

 Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1

 */
public class NextPermutation {
    public void nextPermutation(int[] nums) {
        int n = nums.length;

        if (n < 2) {
            return;
        }

        int index = n - 1;

        while (index > 0) {
            if (nums[index - 1] < nums[index]) {
                break;
            }
            index--;
        }

        if (index == 0) {
            reverseSort(nums, 0, n - 1);
        }

        else {
            int val = nums[index - 1];
            int j = n - 1;
            while (j >= index) {
                // find the first number that is bigger than val;
                if (nums[j] > val) {
                    break;
                }
                j--;
            }

            swap(nums, j, index - 1);
            reverseSort(nums, index, n - 1);
        }

    }

    private void reverseSort(int[] nums, int start, int end) {
        int left = start;
        int right = end;
        while (left < right){
            swap(nums, left, right);
            left++;
            right--;
        }
    }

    private void swap(int[] nums, int start, int end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
    }
}
