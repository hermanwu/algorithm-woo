class Solution:
    """
    @param s: the string s
    @param k: the maximum length of substring
    @return: return the least number of substring
    """
    def getAns(self, s, k):
        # Write your code here
        cur = s[0]
        curCount = 1
        result = 0
        i = 1
        
        for i in range(1, len(s)):
            if s[i] == cur and curCount < k:
                curCount += 1
            else:
                cur = s[i]
                curCount = 1
                result += 1
        
        result += 1
        return result


        """
    @param s: the string s
    @param k: the maximum length of substring
    @return: return the least number of substring
    """
    def getAnsWithTwoPointers(self, s, k):
        start, end = 0, 0
        res = 0
        while start < len(s) and end < len(s):
            while end < len(s)  and s[end] == s[start]:
                end += 1
            res += math.ceil((end-start)/k)
            start = end
        return res