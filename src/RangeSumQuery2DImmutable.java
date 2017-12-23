/**

 Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 */
public class RangeSumQuery2DImmutable {

    public static void main(String[] args) {
        int[][] nums = new int[][]{
                {3, 0, 1, 4, 2},
                {5, 6, 3, 2, 1},
                {1, 2, 0, 1, 5},
                {4, 1, 0, 1, 7},
                {1, 0, 3, 0, 5}
        };

        RangeSumQuery2DImmutable obj = new RangeSumQuery2DImmutable();

        RangeSumQuery2DImmutable.NumMatrix na = obj.new NumMatrix(nums);

        //sumRegion(2, 1, 4, 3) -> 8
        int result = na.sumRegion(2, 1, 4, 3);

        Printer.print(result);

        //sumRegion(1, 1, 2, 2) -> 11
        int result2 = na.sumRegion(1, 1, 2, 2);

        Printer.print(result2);

        //sumRegion(1, 2, 2, 4) -> 12
    }

    class NumMatrix {
        private int[][] preSumMatrix;

        public NumMatrix(int[][] matrix) {
            if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
                return;
            }

            int m = matrix.length, n = matrix[0].length;

            preSumMatrix = new int[m + 1][n + 1];

            for (int i = 1; i <= m; i++) {
                for (int j = 1; j <= n; j++) {
                    preSumMatrix[i][j] = preSumMatrix[i - 1][j] +
                                         preSumMatrix[i][j - 1] -
                                         preSumMatrix[i - 1][j - 1] +
                                         matrix[i - 1][j - 1];
                }
            }
        }

        public int sumRegion(int row1, int col1, int row2, int col2) {
            // for graph reference: https://leetcode.com/problems/range-sum-query-2d-immutable/solution/
            return preSumMatrix[row2 + 1][col2 + 1] -
                    preSumMatrix[row1][col2 + 1] -
                    preSumMatrix[row2 + 1][col1] +
                    preSumMatrix[row1][col1];
        }
    }
}
