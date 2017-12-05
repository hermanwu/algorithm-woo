// Input:  an array of n integers where n > 1, nums;

// Goal: calculate an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Solve it without division and in O(n).
//
// Output: an int[] array;
//
// Example: given [1,2,3,4], return [24,12,8,6].
//
// Key: iterate through array in forwardly and backwardly twice.
//
// Company: Facebook

import java.util.Arrays;

public class ProductOfArrayExceptSelf {
    public int[] productExceptSelf(int[] nums) {
        int[] result = new int[nums.length];

        // this value is used to track the product.
        int temp = 1;

        // calculate the product in order and assign to the list
        // each result[i] equals to the product of all previous items.
        for (int i = 0; i < result.length; i++) {
            result[i] = temp;
            temp *= nums[i];
        }

        // reset temp;
        temp = 1;

        // calculate the result backward and multiply it to existing value.
        for (int j = result.length - 1; j >= 0; j--) {
            result[j] *= temp;
            temp *= nums[j];
        }

        return result;
    }

    public static void main(String[] args) {
        ProductOfArrayExceptSelf p = new ProductOfArrayExceptSelf();

        int[] test1 = new int[]{1, 2, 3, 4};
        System.out.println(Arrays.toString(p.productExceptSelf(test1)));
    }
}
