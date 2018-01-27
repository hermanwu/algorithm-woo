/**

 Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.

 (Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

 */
public class PrimeNumberOfSetBitsInBinaryRepresentation {
    public int countPrimeSetBits(int L, int R) {
        int ans = 0;

        for (int i = L; i <= R; i++) {

            if (isSmallPrime(Integer.bitCount(i))) {
                ans++;
            }
        }

        return ans;
    }

    private boolean isSmallPrime(int x) {
        // 10 ^ 6 < 2 ^ 20;
        return (x == 2 || x == 3 || x == 5 || x == 7 ||
                x == 11 || x == 13 || x == 17 || x == 19);
    }
}
