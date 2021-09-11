class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        N = len(s)
        result = 0

        for center in range(2 * N - 1):
            left = center / 2
            right = left + center % 2

            while (left >= 0 and
                   right < N and
                   s[left] == s[right]):
                left -= 1
                right += 1
                result += 1
        return result