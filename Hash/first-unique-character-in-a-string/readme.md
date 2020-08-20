Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '\_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '\_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 4 seconds (py3)

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '\_' if there are no characters that do not repeat.

209. 第一个只出现一次的字符
     中文 English
     给出一个字符串，找出第一个只出现一次的字符。

样例
样例 1:
输入: "abaccdeff"
输出: 'b'
解释:
'b' 是第一个出现一次的字符

样例 2:
输入: "aabccd"
输出: 'b'
解释:
'b' 是第一个出现一次的字符
