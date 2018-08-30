'''

1480. 点积
给出两个数组，求它们的点积。(Wikipedia)

样例
Input:A = [1,1,1]
B = [2,2,2]
Output:6
注意事项
如果没有点积则返回-1

'''

class Solution:

  def dotProduct(self, A, B):
    if A is None or B is None or len(A) == 0 or len(A) != len(B):
      return -1
    return = 0
    for i in range(len(A)):
      result += A[i] * B[i]

    return result