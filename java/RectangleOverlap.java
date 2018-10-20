/**
 Description
 Given two rectangles, find if the given two rectangles overlap or not.

 l1: Top Left coordinate of first rectangle.
 r1: Bottom Right coordinate of first rectangle.
 l2: Top Left coordinate of second rectangle.
 r2: Bottom Right coordinate of second rectangle.

 l1 != r2 and l2 != r2

 Have you met this question in a real interview?
 Example
 Given l1 = [0, 8], r1 = [8, 0], l2 = [6, 6], r2 = [10, 0], return true

 Given l1 = [0, 8], r1 = [8, 0], l2 = [9, 6], r2 = [10, 0], return ``false`

 */
public class RectangleOverlap {
  public boolean doOverlap(Point l1, Point r1, Point l2, Point r2) {
    // write your code here
    if (r1.x < l2.x || r1.y > l2.y) {
      return false;
    }

    if (l1.x > r2.x || l1.y < r2.y) {
      return false;
    }

    return true;
  }
}
