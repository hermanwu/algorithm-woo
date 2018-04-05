/**
 * Created by hermanwu on 4/4/18.
 */
public class _MedianOfTwoSortedArrays {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int sum = nums1.length + nums2.length;

        if (sum % 2 == 0) {
            return (findKth(nums1, 0, nums2, 0, sum / 2) + findKth(nums1, 0, nums2, 0, sum / 2 + 1)) / 2;

        } else {
            return findKth(nums1, 0, nums2, 0, sum / 2 + 1);
        }
    }

    private double findKth(int[] nums1, int start1, int[] nums2, int start2, int k)  {
        if (start1 >= nums1.length) {
            return nums2[start2 + k - 1];
        }

        if (start2 >= nums2.length) {
            return nums1[start1 + k -1];
        }

        if (k == 1) {
            return Math.min(nums1[start1], nums2[start2]);
        }

        int key1 = start1 + k / 2 - 1 < nums1.length ? nums1[start1 + k / 2 - 1] : Integer.MAX_VALUE;
        int key2 = start2 + k / 2 - 1 < nums2.length ? nums2[start2 + k / 2 - 1] : Integer.MAX_VALUE;
        if (key1 < key2) {
            return findKth(nums1, start1 + k / 2, nums2, start2,  k - k / 2);
        } else {
            return findKth(nums1, start1, nums2, start2 + k / 2,  k - k / 2);
        }
    }
}
