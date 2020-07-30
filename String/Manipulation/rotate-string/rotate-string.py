class Solution:
    """
    @param str: An array of char
    @param offset: An integer
    @return: nothing
    """
    def rotateString(self, s, offset):
        # write your code here
        length = len(s)
        print(length)
        
        offset = offset % length
        
        index = length - offset
        
        print(index)
        
        print(s)
        s2 = s + s
        
        s[] = s[index:(index + length)]