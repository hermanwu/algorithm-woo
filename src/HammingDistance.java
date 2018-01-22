/**
 * Created by hermanwu on 1/21/18.
 */
public class HammingDistance {
    public int hammingDistance(int x, int y) {
        int sum = 0;
        for (int i = 0; i < 31; i++) {
            int a = x % 2;
            int b = y % 2;

            if (a != b) {
                sum++;
            }

            x /= 2;
            y /= 2;
        }

        return sum;
    }

    public int hammingDistance2(int x, int y) {
        int xor = x ^ y, count = 0;

        for (int i = 0; i < 31; i++) {
            count += (xor >> i) & 1;
        }

        return count;
    }

    public int hammingDistance3(int x, int y) {
        int xor = x ^ y, count = 0;

        while (xor > 0) {
            count += xor & 1;
            xor = xor >> 1;
        }

        return count;
    }
}