'''
Description
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Have you met this question in a real interview?
Example
There exist two distinct solutions to the 4-queens puzzle:

[
  // Solution 1
  [".Q..",
   "...Q",
   "Q...",
   "..Q."
  ],
  // Solution 2
  ["..Q.",
   "Q...",
   "...Q",
   ".Q.."
  ]
]

'''

def solveNQueens(self, n):
  res = []
  if n <= 0:
    return res
  subSet = []
  self.dfs(n, subSet, res)
  return res

def dfs(self, n, subSet, result):
  if len(subSet) == n:
    result.append(self.draw(subSet))
    return

  for i in range(n):
    if not self.checkValid(i, subSet):
      continue
    self.dfs(n, subSet + [i], res)


def draw(self, subSet):
  board = []
  for row in subSet:
    temp = ['.'] * len(subSet)
    temp[col] = 'Q'
    board.append(''.join(temp))
  return board

def checkValid(self, nextCol, subSet):
  newRow = len(subSet)
  for row, col in enumerate(subSet):
    if abs(row - nextRow) == abs(col - nextCol) or nextCol == col:
      return False
  return True