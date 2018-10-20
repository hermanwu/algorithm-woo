
/**
 * Created by hermanwu on 3/10/17.
 */
public class MaximumProductOfWordLengths {
    public int maxProduct(String[] words) {
        if (words == null || words.length == 0 || words.length == 1) {
            return 0;
        }

        /*
            Initialize all variables
         */
        int result = 0,
            len = words.length;

        int[] bitArrays = new int[len];

        for (int i = 0; i < len; i++) {
            for (char c : words[i].toCharArray()) {
                bitArrays[i] |= 1 << c - 'a';
            }
        }

        for (int i = 0; i < len; i++) {
            for (int j = i + 1; j < len; j++) {
                if ((bitArrays[i] & bitArrays[j]) == 0 &&
                        words[i].length() * words[j].length() > result) {
                    result = words[i].length() * words[j].length();
                }
            }
        }

        return result;
    }
}
