import java.util.HashSet;

/**
 Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

 The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

 Note:
 A valid Sudoku board (partially filled) is not necessarily solvable.
 Only the filled cells need to be validated.
 */
public class ValidSudoku {
    public boolean isValidSudoku(char[][] board) {
        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            HashSet<Character> rowSet = new HashSet();
            HashSet<Character> colSet = new HashSet();
            HashSet<Character> cubeSet = new HashSet();

            for (int j = 0; j < n; j++) {
                if (board[i][j] != '.' && rowSet.contains(board[i][j])) {
                    return false;
                } else {
                    rowSet.add(board[i][j]);
                }

                if (board[j][i] != '.' && colSet.contains(board[j][i])) {
                    return false;
                } else {
                    colSet.add(board[j][i]);
                }

                // Divide sudoku into nine 3*3 cubes with index (0,0) (0,1)...(2,2)
                int cubeRow = 3 * (i/3);
                int cubeCol = 3 * (i%3);
                if (board[cubeRow + j/3][cubeCol + j%3] != '.' &&
                        cubeSet.contains(board[cubeRow + j/3][cubeCol + j%3])) {
                    return false;
                } else {
                    cubeSet.add(board[cubeRow + j/3][cubeCol + j%3]);
                }
            }
        }
        return true;
    }
}
