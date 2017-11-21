// Input:
// give a list of changes;
// total sum

// Output:
// the fewest number of coins that can add together to the amount;



public class CoinChange {
    public static void main(String[] args) {
        CoinChange cc = new CoinChange();

        // test 1
        // Given coins = [1, 2, 5] and sum 11
        // Expect to return 3 (5 + 5 + 1 = 11)
        int[] input1 =  new int[]{1, 2, 5};
        int sum = 11;

        System.out.println(cc.coinChange(input1, sum));
    }

    public int coinChange(int[] typeOfCoins, int sum) {
        int[] result = new int[sum + 1];

        int i, j;

        for (i = 1; i <= sum; i++) {
            result[i] = Integer.MAX_VALUE;

            for (j = 0; j < typeOfCoins.length; j++) {
                if (typeOfCoins[j] <= i && result[i - typeOfCoins[j]] != Integer.MAX_VALUE) {
                    result[i] = Math.min(result[i], result[i - typeOfCoins[j]] + 1);
                }
            }
        }

        return result[sum] == Integer.MAX_VALUE ? -1 : result[sum];
    }

//    public int coinChange(int[] A, int M) {
//        int[] result = new int[M + 1];
//
//        int n = A.length;
//
//        int i, j;
//
//        // i = sum of coins. result[i] = number of ways to get i;
//
//        for (i = 1; i <= M; i++) {
//            result[i] = Integer.MAX_VALUE;
//
//            for (j = 0; j < n; j++) {
//                if (A[j] < i && result[i - A[j]] != Integer.MAX_VALUE) {
//                    result[i] = Math.min(result[i], result[i - A[j]] + 1);
//                }
//            }
//        }
//
//        return result[M] == Integer.MAX_VALUE ? -1 : result[M];
//    }
}
