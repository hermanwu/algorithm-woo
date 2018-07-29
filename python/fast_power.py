'''
140. Fast Power
Calculate the an % b where a, b and n are all 32bit integers.

Example
For 231 % 3 = 2

For 1001000 % 1000 = 0

Challenge
O(logn)
'''

class Solution:
    """
    @param a: A 32bit integer
    @param b: A 32bit integer
    @param n: A 32bit integer
    @return: An integer
    """
    def fastPower(self, a, b, n):
        # write your code here
        if a == 0:
            return 0
        if n == 0:
            return 1 % b
        if n % 2 == 0:
            ret = self.fastPower(a, b, n/2)
            ret *= ret
            ret %= b
        elif n % 2 == 1:
            ret = self.fastPower(a, b, n//2)
            ret *= ret
            ret = ret * a
            ret = ret % b
        return ret