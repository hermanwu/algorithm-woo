class Solution:
    """
    @param: str: A string
    @return: a boolean
    """

    def isUnique(self, str):
        # write your code here
        if len(str) > len(set(str)):
            return False

        return True
