class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        n = len(s)
        ans = 0

        for i in range(2*n - 1):
            left = i / 2
            right = i / 2 + i % 2
            while left >= 0 and right < n and s[left] == s[right]:
                ans += 1
                left -= 1
                right += 1

        return ans