/**
 * Created by hermanwu on 1/24/18.
 */
public class ComplementingADNAStrand {
    static void main(String[] args) {
        Printer.print(ComplementingADNAStrand.dnaComplement("ACCGGGTTTT"));
    }

    static String dnaComplement(String s) {
        StringBuilder result = new StringBuilder();
        char[] arr = s.toCharArray();

        for (char i : arr) {
            result.append(getComplementChar(i));
        }

        return result.reverse().toString();
    }

    static char getComplementChar(char c) {
        switch (c) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'G':
                return 'C';
            default:
                return 'G';
        }
    }
}
