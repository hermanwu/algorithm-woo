'''
Description
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

Have you met this question in a real interview?
Example
Given s = "aba" return true
Given s = "abca" return true // delete c

'''

class Solution:
    """
    @param s: a string
    @return: nothing
    """
    def validPalindrome(self, s):
        # Write your code here
        i, j = 0, len(s) - 1
        while i < j:
            if s[i] != s[j]:
                break
            i += 1
            j -= 1
        return True if i >= j else self.isPal(s, i + 1, j) or self.isPal(s, i, j - 1)

    def isPal(self, s, i, j):
        while i < j:
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1

        return True