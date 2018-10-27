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
  if length <= 7:
      return 1 
  
  map = {}
  for a, b in connections:
      map[a] = b
  
  dp = {}
  for i in range(length+1):
      dp[i] = sys.maxsize
  
  for pos in range(length+1):
      if pos <= 7:
          dp[pos] = 1
      else:
          for i in range(1, 7):
              dp[pos] = min(dp[pos], dp[pos - i] + 1)
      if pos in map:
          dp[map[pos]] = min(dp[map[pos]], dp[pos])
      
  return dp[length]