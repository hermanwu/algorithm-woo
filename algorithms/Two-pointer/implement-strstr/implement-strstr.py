class Solution:
    """
    @param source: 
    @param target: 
    @return: return the index
    """

    def strStr(self, source, target):
        if not target or len(target) == 0:
            return 0

        for start in range(len(source) - len(target) + 1):
            for end in range(len(target)):
                if source[start + end] != target[end]:
                    break
            else:
                return start
        return -1


class Solution2:
    """
    @param source: 
    @param target: 
    @return: return the index
    """

    def strStr(self, source, target):
        # Write your code here
        if len(target) > len(source):
            return -1

        if target == source:
            return 0

        i = 0
        j = 0

        while j < len(source):
            if i == len(target):
                return j - len(target)

            if source[j] == target[i]:
                j = j + 1
                i = i + 1
            else:
                j = j - i + 1
                i = 0

        if i == len(target):
            return j - len(target)

        return -1
