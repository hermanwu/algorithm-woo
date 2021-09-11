import java.util.LinkedList;
import java.util.List;

/**

 Given a digit string, return all possible letter combinations that the number could represent.

 A mapping of digit to letters (just like on the telephone buttons) is given below.

 */

public class LetterCombinationsOfAPhoneNumber {

    public List<String> letterCombinations(String digits) {
        String[] mapping = new String[] {"0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

        LinkedList<String> ans = new LinkedList<String>();

        if (digits == null || digits.length() == 0) {
            return ans;
        }

        ans.add("");

        char[] arr = digits.toCharArray();
        int n = arr.length, i;

        for (i = 0; i < n; i++) {
            int temp = arr[i] - '0';

            while (ans.peek().length() == i) {
                // remove will throw exception if ans is empty;
                String s = ans.remove();

                for (char c : mapping[temp].toCharArray()) {
                    ans.add(s + c);
                }
            }
        }
        return ans;
    }
}
