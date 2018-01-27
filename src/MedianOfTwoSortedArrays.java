/**
 There are two sorted arrays nums1 and nums2 of size m and n respectively.

 Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

 Example 1:
 nums1 = [1, 3]
 nums2 = [2]

 The median is 2.0
 Example 2:
 nums1 = [1, 2]
 nums2 = [3, 4]

 The median is (2 + 3)/2 = 2.5

 */
public class MedianOfTwoSortedArrays {
    public double findMedianSortedArrays(int[] num1, int[] num2) {
        // check whether it is even or odd
        int sum = num1.length + num2.length;

        if (sum % 2 == 1) {
            return findKth(num1, 0, num2, 0, sum / 2 + 1);
        } else {
            return (findKth(num1, 0, num2, 0, sum / 2) +
                    findKth(num1, 0, num2, 0, sum / 2 + 1)) / 2;
        }
    }

    private double findKth(int[] num1, int astart,
                           int[] num2, int bstart, int k) {
        if (astart >= num1.length) {
            return num2[bstart + k - 1];
        }

        if (bstart >= num2.length) {
            return num1[astart + k - 1];
        }

        if (k == 1) {
            return Math.min(num1[astart], num2[bstart]);
        }

        int aKey = astart + k / 2 - 1 < num1.length ? num1[astart + k / 2 - 1] : Integer.MAX_VALUE;
        int bKey = bstart + k / 2 - 1 < num2.length ? num2[bstart + k / 2 - 1] : Integer.MAX_VALUE;

        if (aKey < bKey) {
            return findKth(num1, astart + k / 2, num2, bstart, k - k / 2);
        } else {
            return findKth(num1, astart, num2, bstart + k / 2, k - k / 2);
        }
    }
}


