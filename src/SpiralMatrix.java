/**

 Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

 For example,
 Given the following matrix:

 [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
 ]
 You should return [1,2,3,6,9,8,7,4,5].

 */
public class SpiralMatrix {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();

        if (matrix.length == 0 || matrix[0].length == 0) {
            return result;
        }

        int startRow = 0, endRow = matrix.length - 1,
                startCol = 0, endCol = matrix[0].length - 1;

        while (startRow <= endRow && startCol <= endCol) {
            for (int i = startCol; i <= endCol; i++) {
                result.add(matrix[startRow][i]);
            }

            startRow++;

            for (int i = startRow; i <= endRow; i++) {
                result.add(matrix[i][endCol]);
            }

            endCol--;


            if (startRow <= endRow) {
                for (int i = endCol; i >= startCol; i--) {
                    result.add(matrix[endRow][i]);
                }
                endRow--;
            }


            if (startCol <= endCol) {
                for (int i = endRow; i >= startRow; i--) {
                    result.add(matrix[i][startCol]);
                }
                startCol++;
            }
        }

        return result;
    }
}
