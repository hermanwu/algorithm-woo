/**
 * Created by hermanwu on 1/24/18.
 */
public class ComplementingADNAStrand {
    public static void main(String[] args) {
        Printer.print(ComplementingADNAStrand.dnaComplement("ACCGGGTTTT"));
    }

    static String dnaComplement(String s) {
        String result = "";
        char[] arr = s.toCharArray();

        reverse(arr);

        for (char i : arr) {
            result += getComplementChar(i);
        }

        return result;
    }

    static void reverse(char[] arr) {
        int left = 0, right = arr.length - 1;

        while (left < right) {
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }

    static char getComplementChar(char c) {
        if (c == 'A') {
            return 'T';
        } else if (c == 'T') {
            return 'A';
        } else if (c == 'G') {
            return 'C';
        } else {
            return 'G';
        }
    }
}
