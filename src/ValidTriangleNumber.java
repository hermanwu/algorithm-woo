import java.util.Arrays;

/**
 Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
 Example 1:
 Input: [2,2,3,4]
 Output: 3
 Explanation:

 Valid combinations are:
 2,3,4 (using the first 2)
 2,3,4 (using the second 2)
 2,2,3

 Note:
 The length of the given array won't exceed 1000.
 The integers in the given array are in the range of [0, 1000].

 */
public class ValidTriangleNumber {
    public static void main(String[] args) {
        ValidTriangleNumber v = new ValidTriangleNumber();

        int[] input = new int[]{2, 2, 3, 4};

        Printer.print(v.triangleNumber(input));
    }


    public int triangleNumber(int[] nums) {
        int n = nums.length;

        if (n < 3) {
            return 0;
        }

        Arrays.sort(nums);
        int i, left, right, result = 0;

        for (i = 2; i < n; i++) {
            left = 0;
            right = i - 1;

            while (left < right) {
                if (nums[left] + nums[right] > nums[i]) {
                    result = result + right - left;
                    right--;
                } else {
                    left++;
                }
            }
        }
        return result;
    }
}
