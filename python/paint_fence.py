class Solution:
    """
    @param n: non-negative integer, n posts
    @param k: non-negative integer, k colors
    @return: an integer, the total number of ways
    """
    def numWays(self, n, k):
        # write your code here
        if n == 0:
            return 0
        if n <= 2:
            return k**n
        if k == 1:
            return 0

        prev = k
        cur = k * k
        for i in range(3, n + 1):
            # create a tmp value to track the current value
            tmp = cur
            # cur is using a different color from last one +
            # cur is using a same color from last one but it has to be a different color from the one before last one.
            cur = cur * (k - 1) + prev * (k - 1)
            prev = tmp

        return cur