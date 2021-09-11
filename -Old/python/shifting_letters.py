class Solution:
    def shiftingLetters(self, S, shifts):
        """
        :type S: str
        :type shifts: List[int]
        :rtype: str
        """
        ans = []
        count = 0

        for i in range(len(shifts) - 1, -1, -1):
            count = count % 26 + shifts[i]
            shifts[i] = count

        for i in range(len(shifts)):
            unicode = (ord(S[i]) - ord('a') + shifts[i]) % 26 + ord('a')
            ans.append(chr(unicode))

        return "".join(ans)