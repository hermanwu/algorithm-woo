/**
 Given an integer, write a function to determine if it is a power of three.

 Follow up:
 Could you do it without using any loop / recursion?

 Credits:
 Special thanks to @dietpepsi for adding this problem and creating all test cases.

 */
public class PowerOfThree {
    public static void main(String[] args) {
        PowerOfThree p = new PowerOfThree();

        Printer.print(p.isPowerOfThree(9));

        Printer.print(p.isPowerOfThree(-9));

        Printer.print(p.isPowerOfThree(1));

    }


    public boolean isPowerOfThree(int n) {
        if (n < 0) {
            return false;
        }

        if (n > 1) {
            while (n % 3 == 0) {
                n /= 3;
            }
        }

        return n == 1;
    }
}
