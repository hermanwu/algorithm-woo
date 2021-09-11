/**
 * Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

    A move is guaranteed to be valid and is placed on an empty block.
    Once a winning condition is reached, no more moves are allowed.
    A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.

Implement the TicTacToe class:

    TicTacToe(int n) Initializes the object the size of the board n.
    int move(int row, int col, int player) Indicates that player with id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move.

Constraints:

    2 <= n <= 100
    player is 1 or 2.
    1 <= row, col <= n
    (row, col) are unique for each different call to move.
    At most n^2 calls will be made to move.

Follow up:
Could you do better than O(n^2) per move() operation?


 */
class TicTacToe {
  /**
   * Initialize your data structure here.
   */

  // board n * n to track spots has been filled.
  private board: number[][];
  private rowSum: number[];
  private colSum: number[];
  private diagonalSum: number[];
  private n: number;

  constructor(n: number) {
    this.n = n;
    this.rowSum = new Array(n).fill(0);
    this.colSum = new Array(n).fill(0);
    this.diagonalSum = [0, 0];
    this.board = new Array(n);
    for (let i = 0; i < n; i++) {
      this.board[i] = new Array(n).fill(0);
    }
  }

  /**
       * Player {player} makes a move at ({row}, {col}).
              @param row The row of the board.
              @param col The column of the board.
              @param player The player, can be either 1 or 2.
              @return The current winning condition, can be either:
                      0: No one wins.
                      1: Player 1 wins.
                      2: Player 2 wins. 
       */
  move(row: number, col: number, player: number): number {
    // validate who wins the game.
    this.board[row][col] = player;

    const valueToAdd = player === 1 ? 1 : -1;

    this.rowSum[row] += valueToAdd;
    this.colSum[col] += valueToAdd;
    if (row === col) {
      this.diagonalSum[0] += valueToAdd;
    }
    if (Math.abs(row - 0) === Math.abs(col - this.board.length + 1)) {
      this.diagonalSum[1] += valueToAdd;
    }

    if (
      this.rowSum[row] === this.n ||
      this.colSum[col] === this.n ||
      this.diagonalSum[0] === this.n ||
      this.diagonalSum[1] === this.n
    ) {
      return 1;
    }

    if (
      this.rowSum[row] === -1 * this.n ||
      this.colSum[col] === -1 * this.n ||
      this.diagonalSum[0] === -1 * this.n ||
      this.diagonalSum[1] === -1 * this.n
    ) {
      return 2;
    }

    return 0;
  }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
