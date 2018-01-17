/**
 input: A 2-dimensional array NxN - Matrix - with positive and negative elements.

 Output: A submatrix of any size such that its summation is the maximum among all possible submatrices.

 Requirement: Algorithm complexity to be of O(N^3)

 https://github.com/mission-peace/interview/blob/master/src/com/interview/dynamic/SubRectangularMatrixWithMaximumSum.java

 */
public class MaximumSumSubrectangleIn2DMatrix {

    class Result {
        int maxSum;
        int leftBound;
        int rightBound;
        int upBound;
        int lowBound;

        @Override
        public String toString() {
            return "Result [maxSum=" + maxSum + ", leftBound=" + leftBound
                    + ", rightBound=" + rightBound + ", upBound=" + upBound
                    + ", lowBound=" + lowBound + "]";
        }
    }

}
