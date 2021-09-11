'''
class Solution:
    """
    @param: x: the base number
    @param: n: the power number
    @return: the result
    """
    def myPow(self, x, n):
        # write your code here

'''

class Solution:
    """
    @param: x: the base number
    @param: n: the power number
    @return: the result
    """
    def myPow1(self, x, n):
        # write your code here
        if n == 0:
            return 1
        if n == 1:
            return x

        if n < 0:
            x = 1 / x
            n = -n
        return self.helper(x, n)

    def helper(self, x, n):
        if n == 0:
            return 1
        result = self.helper(x, n//2)
        if n&1:
            return result * result * x
        else:
            return result * result

    def myPow(self, x, n):
        if n==0:
            return 1

        if n<0:
            x = 1/x
            n = -n
        result = 1
        temp = x
        i = 0
        while i< 32:
            if n & (1<<i):
                result *= temp
            temp *= temp
            i += 1
        return result