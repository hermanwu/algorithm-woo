'''
Description
There is a one-dimensional board with a starting point on the far left side of the board and an end point on the far right side of the board. There are several positions on the board that are connected to other positions, ie if A is connected to B, then when chess falls at position A, you can choose whether to move the chess from A to B. And the connection is one way, which means that the chess cannot move from B to A. Now you have a six-sided dice, find the minimum steps to reach the end.

the index starts from 1.
length > 1
The starting point is not connected to any other location
connections[i][0] < connections[i][1]
Have you met this question in a real interview?
Example
input:
length = 10
connections = [[2, 10]]
output:
1
'''


def modernLudo(self, length, connections):
  dp = [0] * (length + 1)

  jump = {}


  for s, e in connections:
    jump[s] = e

  for i in range(length - 1, 0, -1):
    dp[i] = float('inf')
    if i in jump:
      dp[i] = dp[jump[i]]

    for j in range(i, min(length + 1, i + 7)):
      dp[i] = min(dp[i], 1 + dp[j])

      if j in jump:
        dp[i] = min(dp[i], 1 + dp[jump[j]])

  return dp[1]