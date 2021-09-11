154. 正则表达式匹配
     中文 English
     实现支持'.'和'\*'的正则表达式匹配。

'.'匹配任意一个字母。

'\*'匹配零个或者多个前面的元素。

匹配应该覆盖整个输入字符串，而不仅仅是一部分。

需要实现的函数是：bool isMatch(string s, string p)

isMatch("aa","a") → false

isMatch("aa","aa") → true

isMatch("aaa","aa") → false

isMatch("aa", "a\*") → true

isMatch("aa", ".\*") → true

isMatch("ab", ".\*") → true

isMatch("aab", "c*a*b") → true

样例
样例 1:

输入："aa"，"a"
输出：false
解释：
无法匹配
样例 2:

输入："aa"，"a*"
输出：true
解释：
'*' 可以重复 a
