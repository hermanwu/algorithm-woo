import java.util.ArrayList;
import java.util.List;

/**

 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 For example, given n = 3, a solution set is:

 [
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
 ]

 */
public class GenerateParentheses {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        helper(result, "", n, n);
        return result;
    }

    private void helper(List<String> result,
                        String cur,
                        int leftRemain,
                        int rightRemain) {

        if (leftRemain == 0 && rightRemain == 0) {
            result.add(cur);
            return;
        }

        if (leftRemain > 0) {
            helper(result, cur + "(", leftRemain - 1, rightRemain);
        }

        if (leftRemain < rightRemain) {
            helper(result, cur + ")", leftRemain, rightRemain - 1);
        }
    }
}
