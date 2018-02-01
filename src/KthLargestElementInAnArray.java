import java.util.Arrays;

public class KthLargestElementInAnArray {
    public static void main(String[] args) {
        KthLargestElementInAnArray s = new KthLargestElementInAnArray();

        // Given [3,2,1,5,6,4] and k = 2, return 5.
        int[] test1 = new int[]{3, 2, 1, 5, 6, 4};

        System.out.println(s.findKthLargest(test1, 2));
    }

    public int findKthLargest(int[] nums, int k) {
        int index = findKthSmallestUsingQuickSelect(nums,
                0,
                nums.length - 1,
                nums.length - k + 1);
        return nums[index];
    }

    public int findKthSmallestUsingQuickSelect(int[] nums,
                                               int low,
                                               int high,
                                               int k) {
        int i = low;
        int j = high - 1;
        int pivot = nums[high];

        // equal sign is used to handle situation when i = j
        // and avoid swap(nums, i, high) when nums[i] < pivot
        while (i <= j) {
            if (nums[i] > pivot) {
                swap(nums, i, j);
                j--;
            } else {
                // moving to next index
                i++;
            }
        }
        swap(nums, i, high);

        // count: number of smallest item to the pviot
        int count = i - low + 1;
        //System.out.println(count);
        //System.out.println(k);

        //System.out.println(Arrays.toString(nums));
        if (count == k) {
            return i;
        } else if (count > k) {
            return findKthSmallestUsingQuickSelect(nums, low, i - 1, k);
        } else {
            return findKthSmallestUsingQuickSelect(nums,
                    i + 1, high, k - count);
        }
    }

    public void swap(int[] nums, int a, int b) {
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
}
