/**
 Given an array with positive and negative numbers, find the maximum average subarray which length should be greater or equal to given length k.
 */
public class MaximumAverageSubarrayII {

  /*
   * @param nums: an array with positive and negative numbers
   * @param k: an integer
   * @return: the maximum average
   */
  public double maxAverage(int[] nums, int k) {
    if(nums == null || k > nums.length) {
      return 0;
    }

    double start = Double.MAX_VALUE;
    double end = Double.MIN_VALUE;

    for(int i = 0; i < nums.length; i++) {
      start = Math.min(start, (double)nums[i]);
      end = Math.max(end, (double)nums[i]);
    }

    double eps = 1e-6;

    double avg = 0;

    while(start + eps < end) {
      avg = start + (end - start) / 2;
      if(checkAvg(nums, k, avg)) {
        start = avg;
      } else {
        end = avg;
      }
    }

    return start;
  }

  private boolean checkAvg(int[] nums, int k, double avg) {
    double sum = 0;
    double prevSum = 0;
    double prevMin = 0;

    for(int i = 0; i < nums.length; i++) {
      sum += (double)nums[i] - avg;

      if(i >= k - 1 && sum >= 0) {
        return true;
      }

      // 找一段长度 >= k 的子数组使它的平均值满足条件。
      // Sum 是 0 到 i 所有元素之和，而 prevSum 是 0 到 i - k 的所有元素之和，这样可以保证用 Sum - PreSum 的数组长度比 k 长
      // prevMin 来记录 prevSum 的最小值，通过 sum 减去 prevMin 来获得子数组可能的最大值
      if(i >= k) {
        prevSum += (double)nums[i - k] - avg;
        prevMin = Math.min(prevMin, prevSum);
        if(sum - prevMin >= 0) {
          return true;
        }
      }
    }

    return false;
  }
}
