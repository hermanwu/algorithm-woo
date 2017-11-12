// give a list of changes; find how many ways to get M;

public class CoinChange {
    public static void main(String[] args) {
        CoinChange cc = new CoinChange();

    }

    public int coinChange(int[] A, int M) {
        int[] result = new int[M + 1];

        int n = A.length;

        int i, j;

        // i = sum of coins. result[i] = number of ways to get i;

        for (i = 1; i <= M; i++) {
            result[i] = Integer.MAX_VALUE;

            for (j = 0; j < n; j++) {
                if (A[j] < i && result[i - A[j]] != Integer.MAX_VALUE) {
                    result[i] = Math.min(result[i], result[i - A[j]] + 1);
                }
            }
        }

        return result[M] == Integer.MAX_VALUE ? -1 : result[M];
    }
}
