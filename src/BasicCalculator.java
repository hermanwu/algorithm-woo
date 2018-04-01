/**
 Implement a basic calculator to evaluate a simple expression string.

 The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

 You may assume that the given expression is always valid.

 Some examples:
 "1 + 1" = 2
 " 2-1 + 2 " = 3
 "(1+(4+5+2)-3)+(6+8)" = 23

 */
public class BasicCalculator {
    public int calculate(String s) {
        int o1 = 1, r1 = 0;
        // cur int
        int r2 = 0;

        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (Character.isDigit(c)) {
                int num = c - '0';

                while (i + 1 < s.length() && Character.isDigit(s.charAt(i + 1))) {
                    num = num * 10 + (s.charAt(i + 1) - '0');
                    i++;
                }

                // r2 is used to track the number;
                r2 = num;

            } else if (c == '(') {
                stack.push(o1);
                stack.push(r1);

                o1 = 1;
                r1 = 0;
            } else if (c == ')') {
                r2 = r1 + o1 * r2;

                r1 = stack.pop();
                o1 = stack.pop();
            } else if (c == '+' || c == '-') {
                r1 = r1 + o1 * r2;
                o1 = c == '+' ? 1 : -1;
                r2 = 0;
            }
        }

        return r1 + o1 * r2;
    }
}
