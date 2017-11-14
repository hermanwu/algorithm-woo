public class ReverseInteger {
    public static void main(String[] args) {
        ReverseInteger s = new ReverseInteger();
        System.out.println(s.reverse(-765));
    }

    public int reverse(int x) {
        long result = 0;

        while (x != 0) {
            result = result * 10 + x % 10;
            x = x / 10;

            // handle overflow
            if (result > Integer.MAX_VALUE || result < Integer.MIN_VALUE) {
                return 0;
            }
        }

        return (int) result;
    }
}
