'''
Description
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement encode and decode

Have you met this question in a real interview?  
Example
Given strs = ["lint","code","love","you"]
string encoded_string = encode(strs)

return ["lint","code","love","you"] when you call decode(encoded_string)
'''

class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs):
        # write your code here
        result = ''
        
        for str in strs:
            for i in range(len(str)):
                if str[i] == '/':
                    result += '//'
                elif str[i] == '#':
                    result += '/#'
                else:
                    result += str[i]
            result += '#'

                    
        return result
                    

    """
    @param: str: A string
    @return: dcodes a single string to a list of strings
    """
    def decode(self, str):
        # write your code here
        result = []
        cur = ''
        i = 0
        
        while i < len(str):
            if str[i] == '/':
                cur += str[i + 1]
                i += 1
            elif str[i] == '#':
                result.append(cur)
                cur = ''
            else:
                cur += str[i]
            i += 1
        return result