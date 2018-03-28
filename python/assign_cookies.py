class Solution(object):
    def findContentChildren(self, g, s):
        """
        :type g: List[int]
        :type s: List[int]
        :rtype: int
        """
        g.sort()
        s.sort()

        childCount = 0
        cookieCount = 0

        while cookieCount < len(s) and childCount < len(g):
            if (s[cookieCount] >= g[childCount]):
                childCount += 1
            cookieCount += 1

        return childCount