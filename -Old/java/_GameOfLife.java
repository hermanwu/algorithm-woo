/**
 According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

 Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

 Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 Any live cell with two or three live neighbors lives on to the next generation.
 Any live cell with more than three live neighbors dies, as if by over-population..
 Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 Write a function to compute the next state (after one update) of the board given its current state.

 Follow up:
 Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
 In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
 Credits:
 Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

 */
public class _GameOfLife {
    public void gameOfLife(int[][] board) {
        // 0 - 0 -> 0
        // 1 - 1 -> 1
        // 1 - 0 -> 2
        // 0 - 1 -> 3


        if (board == null || board.length == 0) {
            return;
        }

        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int lives = 0;

                if (i > 0) {
                    lives += board[i - 1][j] == 1 || board[i - 1][j] == 2 ? 1 : 0;
                }

                if (j > 0) {
                    lives += board[i][j - 1] == 1 || board[i][j - 1] == 2 ? 1 : 0;
                }

                if (i < m - 1) {
                    lives += board[i + 1 ][j] == 1 || board[i + 1][j] == 2 ? 1 : 0;
                }

                if (j < n - 1) {
                    lives += board[i][j + 1] == 1 || board[i][j + 1] == 2 ? 1 : 0;
                }

                if(i > 0 && j > 0){
                    lives += board[i - 1][j - 1] == 1 || board[i - 1][j - 1] == 2 ? 1 : 0;
                }
                //判断右下角
                if(i < m - 1 && j < n - 1){
                    lives += board[i + 1][j + 1] == 1 || board[i + 1][j + 1] == 2 ? 1 : 0;
                }
                // 判断右上角
                if(i > 0 && j < n - 1){
                    lives += board[i - 1][j + 1] == 1 || board[i - 1][j + 1] == 2 ? 1 : 0;
                }
                // 判断左下角
                if(i < m - 1 && j > 0){
                    lives += board[i + 1][j - 1] == 1 || board[i + 1][j - 1] == 2 ? 1 : 0;
                }

                if (board[i][j] == 0 && lives == 3) {
                    board[i][j] = 3;
                } else if (board[i][j] == 1) {
                    if (lives < 2 || lives > 3) {
                        board[i][j] = 2;
                    }
                }
            }

        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] % 2 == 1) {
                    board[i][j] = 1;
                } else {
                    board[i][j] = 0;
                }
            }
        }
    }
}
