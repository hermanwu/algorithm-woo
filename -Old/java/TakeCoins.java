/**
 1399. Take Coins
 There aren coins in a row, each time you want to take a coin from the left or the right side.
 Take a total of k times to write an algorithm to maximize the value of coins.

 Example
 Given list = [5,4,3,2,1], k = 2, return 9.

 Explanation:
 Take two coins from the left.
 Given list = [5,4,3,2,1,6], k = 3, return 15.

 Explanation:
 Take two coins from the left and one from the right.


 */
public class TakeCoins {
    public int takeCoins(int[] list, int k) {
        if (list.length == 0) {
            return 0;
        }

        // Write your code here
        int ans = Integer.MIN_VALUE;

        int[] preSum = new int[list.length + 1];

        for (int i = 1; i <= list.length; i++) {
            preSum[i] = preSum[i - 1] + list[i - 1];
        }

        for (int i = 0; i <= k; i++) {
            int max = preSum[i] + preSum[list.length] - preSum[list.length - (k - i)];

            ans = Math.max(max, ans);
        }

        return ans;
    }
}
