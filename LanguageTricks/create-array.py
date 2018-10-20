def createArray(self, length):
  a = [False] * length
  b = [0 for _ in range(length)]



'''
2d array
https://stackoverflow.com/questions/13382774/initialize-list-with-same-bool-value

'''

def create2DArray(self, m, n):
  f = [[False for _ in range(m + 1)] for _ in range(n + 1)]
