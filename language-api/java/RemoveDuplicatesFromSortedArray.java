/**
 * Created by hermanwu on 1/17/18.
 */
public class RemoveDuplicatesFromSortedArray {
    public int removeDuplicates(int[] nums) {
        int i = 0;

        for (int n : nums) {
            if (i == 0 || n > nums[i - 1]) {
                nums[i] = n;
                i++;
            }
        }
        return i;
    }
}
