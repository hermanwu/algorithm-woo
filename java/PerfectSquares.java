/**

 Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

 For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

 */
public class PerfectSquares {
    public int numSquares(int n) {
        int[] results = new int[n + 1];

        results[0] = 0;

        for (int i = 1; i <= n; i++) {
            int min = Integer.MAX_VALUE;
            int j = 1;

            while ( j * j <= i) {
                min = Math.min(min, results[i - j * j] + 1);
                j++;
            }
            results[i] = min;
        }

        return results[n];
    }
}
