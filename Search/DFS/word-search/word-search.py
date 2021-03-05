'''

Description
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.

Example
Given board =

[
  "ABCE",
  "SFCS",
  "ADEE"
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.

'''


def exist(self, board, word):
    n, m = len(board), len(board[0])

    if len(word) > m * n:
        return False

    visited = [False for i in range(m)] for _ in range(n)]

        for i in range(n):
        for j in range(m):
        if self.dfs(board, word, 0, i, j, visited):
        return True
        return False

        def dfs(self, board, word, idx, i, j, visitd):
        if idx == len(word):
        return True

        if i < 0 or j < 0 or i >= len(board) or j >= len(board[0]):
        return False

            if visited[i][j] or word[idx != board[i][j]:
        return False

    visited[i][j] = True

    res = self.def(board, word, idx + 1, i + 1, j, visited) or \
        self.def(board, word, idx + 1, i, j + 1, visited) or \
        self.def(board, word, idx + 1, i - 1, j, visited) or \
        self.def(board, word, idx + 1, i, j - 1, visited) or \

    visited[i][j] = False

    return res
