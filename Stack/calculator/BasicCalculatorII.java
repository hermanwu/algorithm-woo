/**

 Implement a basic calculator to evaluate a simple expression string.

 The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

 You may assume that the given expression is always valid.

 Some examples:
 "3+2*2" = 7
 " 3/2 " = 1
 " 3+5 / 2 " = 5
 Note: Do not use the eval built-in library function.

 */
public class BasicCalculatorII {
    public int calculate(String s) {
        // result level 1 => r1
        // operation level 1 => o1
        int o1 = 1, o2 = 1, r1 = 0, r2 = 1;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (Character.isDigit(c)) {
                int num = c - '0';

                while (i + 1 < s.length() && Character.isDigit(s.charAt(i + 1))) {
                    num = num * 10 + (s.charAt(i + 1) - '0');
                    i++;
                }

                r2 = (o2 == 1 ? r2 * num : r2 / num);
            } else if ( c == '*' || c == '/') {

                o2 = (c == '*' ? 1 : -1);
            } else if ( c == '+' || c == '-') {
                r1 = r1 + o1 * r2;
                o1 = (c == '+' ? 1 : -1);
                r2 = 1;
                o2 = 1;
            }
        }

        return (r1 + o1 * r2);
    }
}
