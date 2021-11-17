class Solution:
    """
    @param s: the given string
    @return: all the possible states of the string after one valid move
    """
    def generatePossibleNextMoves(self, s):
        # write your code here
        res = []
        for i in range(len(s) - 1):
            if s[i] == s[i + 1]:
                if s[i] == "+":
                    res.append(s[:i] + "--" + s[i+2:])
        return res