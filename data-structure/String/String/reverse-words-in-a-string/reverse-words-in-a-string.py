class Solution:
    """
    @param: s: A string
    @return: A string
    """

    def reverseWords(self, s):
        # write your code here

        # separate
        templist = s.split()

        # reverse
        templist.reverse()

        # combine
        result = " ".join(templist)

        return result
