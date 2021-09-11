class Solution:
    """
    @param stringIn: The original string.
    @param K: The length of substrings.
    @return: return the count of substring of length K and exactly K distinct characters.
    """
    def KSubstring(self, stringIn, K):
        char = ''
        res = []

        for i in stringIn:
            if len(char) == K:
                res.append(char)
                char = char[1:]
            if i in char:
                idx = char.index(i)
                char = char[idx+1:]
            char += i
        if len(char) == K:
            res.append(char)
        return len(set(res))