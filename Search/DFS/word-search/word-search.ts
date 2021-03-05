/**
Given an m x n gird of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


// i.e.
const board = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['e', 'f', 'g'],
]
*/

function exist(board: string[][], word: string): boolean {
  if (board === null || !word) {
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, word.split(""), i, j)) {
        return true;
      }
    }
  }

  return false;
}

function dfs(board: string[][], characters: string[], i: number, j: number) {
  if (characters.length === 0) {
    return true;
  }

  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return false;
  }

  if (board[i][j] !== characters[0]) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = "#";
  let result =
    dfs(board, characters.slice(1), i, j + 1) ||
    dfs(board, characters.slice(1), i, j - 1) ||
    dfs(board, characters.slice(1), i + 1, j) ||
    dfs(board, characters.slice(1), i - 1, j);

  board[i][j] = temp;

  return result;
}
