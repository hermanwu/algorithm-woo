'''

415. Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example
"A man, a plan, a canal: Panama" is a palindrome.

"race a car" is not a palindrome.

Challenge
O(n) time without extra memory.

'''

class Solution:
    def isPalindrome(self, s):
        l, r = 0, len(s)-1
        while l < r:
            while l < r and not s[l].isalnum():
                l += 1
            while l <r and not s[r].isalnum():
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l +=1; r -= 1
        return True

    def isPalindrome2(self, s):
        # write your code here
        list = [c for c in s.lower() if c.isalnum()]
        return list == list[::-1]