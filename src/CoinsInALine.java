// Input:
// You have n coins in a line
//
// Two player starts to pick up coins.
// Each players can pick either one coin or two coins
// Whoever picks the last coin wins the game, and whoever has no coin left to pick loses the game

// Output:
// whether the first player will win (first player picks the last coin)

// Example:
// n = 4;
// answer: true;

// n = 5;
// answer: false;

public class CoinsInALine {
    public boolean firstWillWin(int n) {
        // for current player, if there is not coins, he lost.
        if (n == 0) {
            return false;
        }

        if (n < 2) {
            return true;
        }

        boolean[] f = new boolean[n + 1];

        // When there is 1 coin, current player wins;
        f[1] = true;
        // When there are 2 coins, current play wins;
        f[2] = true;
        // When there are 3 coins, no matter whether he picked one or two coins, the other play will pick the rest;
        f[3] = false;

        for (int i = 4; i <= n; i++) {
            // whether player picks 1 coin or 2 coins ,
            // if the other player loses ((f[i - 1]) || (f[i - 2]) == false),
            // then current player wins
            if (f[i - 1] == false || f[i - 2] == false) {
                f[i] = true;
            }
        }

        return f[n];
    }

    public static void main(String[] args) {

        CoinsInALine cc = new CoinsInALine();

        System.out.println(cc.firstWillWin(4));
    }

}
