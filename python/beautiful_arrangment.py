'''

990. Beautiful Arrangement
Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N
numbers successfully if one of the following is true for the ith position (1 <= i <= N) in this array:

The number at the ith position is divisible by i.
i is divisible by the number at the ith position.
Now given N, how many beautiful arrangements can you construct?
Example
Input: 2
Output: 2
Explanation:

The first beautiful arrangement is [1, 2]:

Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).

Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

The second beautiful arrangement is [2, 1]:

'''


class Solution:
    """
    @param N: The number of integers
    @return: The number of beautiful arrangements you can construct
    """
    def countArrangement(self, N):
        # Write your code here
        def dp(i, candidates):
            if i == 1:
                return 1
            return sum(
                dp(i - 1, candidates - {x}) for x in candidates
                if x % i == 0 or i % x == 0)

        return dp(N, set(range(1, N+1)))