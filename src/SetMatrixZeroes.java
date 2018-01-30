/**
 Tag: Array

 Given a m x n matrix, if an element is 0,
 set its entire row and column to 0. Do it in place.

 Follow up:
 Did you use extra space?
 Could you devise a constant space solution?
 */

public class SetMatrixZeroes {
    public void setZeroes(int[][] matrix) {
        int i, j, m = matrix.length, n = matrix[0].length;
        boolean firstRowAreZeroes = false,
                firstColAreZeroes = false;

        // mark rows and cols that will be changed to zeroes;
        for (i = 0; i < m; i++) {
            for (j = 0; j < n; j++) {
                if (matrix[i][j] == 0) {
                    if (i == 0) { firstRowAreZeroes = true; }
                    if (j == 0) { firstColAreZeroes = true; }
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }

        // change rows and cols to zeroes
        // (except first row and col)
        for (i = 1; i < m; i++) {
            for (j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        // change first rows and cols to zeroes
        if (firstRowAreZeroes) {
            for (j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }
        if (firstColAreZeroes) {
            for (i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}
