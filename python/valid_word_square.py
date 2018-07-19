class Solution:
    """
    @param words: a list of string
    @return: a boolean
    """
    def validWordSquare(self, words):
        # Write your code here
        length = len(words)
        for i in range(length):
            if len(words[i]) > i:
                for j in range(i, len(words[i])):
                    if words[i][j] != words[j][i]:
                        return False
        return True