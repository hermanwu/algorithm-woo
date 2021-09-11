'''

200. Longest Palindromic Substring
Given a string S, find the longest palindromic substring in S.
You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

Example
Given the string = "abcdzdcab", return "cdzdc".

Challenge
O(n2) time is acceptable. Can you do it in O(n) time.

'''

class Solution:
    """
    @param s: input string
    @return: the longest palindromic substring
    """
    def longestPalindrome(self, s):
        # write your code here
        len_s, start, end = len(s), 0, 0
        len_m = 0
        for i in range(1, 2 * len_s):
            if i % 2 == 0:
                left = i//2
                right = left
            else:
                left = i//2 - 1
                right = left + 1
            while left >= 0 and right < len_s and s[left] == s[right]:
                left -= 1
                right += 1
            left += 1
            right -= 1
            len_t = right - left + 1
            if len_t > len_m:
                len_m = len_t
                start = left
                end = right
        return s[start:end+1]