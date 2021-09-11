"""
Description
Now there is an array arr. There are two players, No. 1 and No. 2 take turns to get numbers from the array. They can only fetch from both ends of the array, and only one can be taken at a time. Both of them adopt an optimal strategy. After the number in the last array is taken, the sum of the numbers taken is more, and the victory is won. Player No. 1 is taken first. Ask who will win in the end. If the No. 1 player wins or the two draw a tie , return 1 and if the 2nd player wins, return 2.

1 \leq n \leq 100001≤n≤10000
1 \leq arr[i] \leq 100001≤arr[i]≤10000
Ensure that the array length is even
Have you met this question in a real interview?  
Example
Give arr=[1,3,1,1]. Return 1.

sum1, sum2 are the scores of two players
The optimal strategy for the No. 1 player takes the tail of the array, at which point the array is [1,3,1]. sum1=1.
At this time, the second player has two ways to take it.
1,
Player No. 2 takes the head and the array is [3,1]. sum2=1.
Player No. 1 takes the head and the array is [1]. sum1=4.
Player No. 2 takes the head. sum2=2.
Sum1>sum2
2,
Player No. 2 takes the head and the array is [1,3]. sum2=1.
The first player takes the tail and the array is [1]. sum1=4.
Player No. 2 takes the head. sum2=2.
sum1>sum2
Therefore, player No. 1 must win and return 1.
Give arr=[1,3,3,1]. Returns 1.

Sum1, sum2 are the scores of two players
Since the array is symmetrical, the player No. 1 starts from the head and tail and the result is the same.
The first player takes the array header, and the array is [3, 3, 1]. sum1=1.
At this time, the second player has two ways to take it.
1,
Player No. 2 takes the head and the array is [3, 1]. sum2=3.
Player No. 1 takes the head and the array is [1]. sum1=4.
Player No. 2 takes the head. Sum2=4.
sum1=sum2
2,
Player No. 2 takes the tail and the array is [3, 3]. sum2=1.
Player No. 1 takes the head and the array is [3]. sum1=4.
Player No. 2 takes the head. Sum2=4.
sum1=sum2
So the 1st player and the 2nd player draw a tie and return 1.

"""

class Solution:
    """
    @param arr: the array
    @return: the winner
    """
    def theGameOfTakeNumbers(self, arr):
        # Write your code here
        if arr is None or len(arr) == 0:
            return 1 
        dp = [[0]*len(arr)]*len(arr)
        n = len(arr)
        for i in range(n):
            dp[i][i] = arr[i]
        for i in range(n-1):
            dp[i][i+1] = max(arr[i],arr[i+1])
        
        #recurrence
        for l in range(3,n):
            #window len is l 
            for i in range(0,n-l+1):
                j = i + l -1 
                #picks left or right
                dp [i][j] = max(arr[i]+ min(dp[i+2][j],dp[i+1][j-1]), arr[j]+min(dp[i+1][j-1],dp[i][j-2]))
        
        maxsum = dp[0][n-1]
        #print (dp)
        return 1 if maxsum >= sum(arr) - maxsum else 2


      def theGameOfTakeNumbers(self, arr):
        n = len(arr)
        if n == 0 or n == 1 or n == 2:
            return 1
        
        sum = [0] * (n + 1)
        for l in range (1, n + 1):
            for i in range(0, n - l + 1):
                j = i + l - 1
                sum[i] = max(arr[j] - sum[i], arr[i] - sum[i + 1])
        return 1 if sum[0] >= 0 else 0