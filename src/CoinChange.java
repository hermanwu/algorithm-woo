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
        int[] input1 = new int[]{1, 2, 5};
        int sum = 11;

        System.out.println(cc.coinChange(input1, sum));
    }

    public int coinChange(int[] coins, int amount) {
        int[] results = new int[amount + 1];

        for (int i = 1; i <= amount; i++) {
            results[i] = Integer.MAX_VALUE;

            for (int coin : coins) {
                if (coin <= i && results[i - coin] != Integer.MAX_VALUE) {
                    results[i] = Math.min(results[i], results[i - coin] + 1);
                }
            }
        }

        return results[amount] == Integer.MAX_VALUE ? -1 : results[amount];
    }
}