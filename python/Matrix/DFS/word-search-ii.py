'''
132. Word Search II
Given a matrix of lower alphabets and a dictionary. Find all words in the dictionary that can be found in the matrix.
A word can start from any position in the matrix and go left/right/up/down to the adjacent position.
One character only be used once in one word.

Example
Given matrix:

doaf
agai
dcan
and dictionary:

{"dog", "dad", "dgdg", "can", "again"}

return {"dog", "dad", "can", "again"}


dog:
doaf
agai
dcan
dad:

doaf
agai
dcan
can:

doaf
agai
dcan
again:

doaf
agai
dcan
Challenge
Using trie to implement your algorithm.
'''

def wordSearchII(self, board, words):
  res = []
  self.row = len(board)
  self.col = len(board[0])

  dx = [-1, 0, 1, 0]
  dy = [0, -1, 0, 1]

  visited = set()

  for word in words:
    find = False

    for i in range(self.row):
      for j in range(self.col):
        if find:
          break
        if board[i][j] == word[0]:
          visited.add((i, j))
          if self.dfs(word[1:], dx, dy, board, i, j, visited):
            find = True
            res.append(word)
          visited.remove((i, j))

  return res

def dfs(self, word, dx, dy, board, x, y, visited):
  if not word:
    return True
  for i in range(4):
    x_ = x + dx[i]
    y_ = y + dy[i]
    if 0 <= x_ < self.row and 0 <= y_ < self.col \
        and board[x_][y_] == word[0] \
        and (x_, y_) not in visited:
      visited.add((x_, y_))

      if self.dfs(word[1:], dx, dy, board, x_, y_, visited):
        visited.remove((x_, y_))
        return True
      visited.remove((x_, y_))

  return False
