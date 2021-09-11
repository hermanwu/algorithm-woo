'''

600. Smallest Rectangle Enclosing Black Pixels
An image is represented by a binary matrix with 0 as a white pixel and 1 as a black pixel. The black pixels are connected, i.e., there is only one black region. Pixels are connected horizontally and vertically. Given the location (x, y) of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.

Example
For example, given the following image:

[
  "0010",
  "0110",
  "0100"
]
and x = 0, y = 2,
Return 6.

'''

class Solution:
    """
    @param image: a binary matrix with '0' and '1'
    @param x: the location of one of the black pixels
    @param y: the location of one of the black pixels
    @return: an integer
    """
    def minArea(self, image, x, y):
        # write your code here
        m = len(image)
        if m == 0:
            return 0
        n = len(image[0])
        if n == 0:
            return 0

        start = y
        end = n - 1
        while start + 1 < end:
            mid = start + (end - start) // 2
            if self.checkColumn(image, mid):
                start = mid
            else:
                end = mid

        right = end if self.checkColumn(image, end) else start

        start = 0
        end = y
        while start + 1 < end:
            mid = start + (end - start) // 2
            if self.checkColumn(image, mid):
                end = mid
            else:
                start = mid

        left = start if self.checkColumn(image, start) else end

        start = 0
        end = x
        while start + 1 < end:
            mid = start + (end - start) // 2
            if self.checkRow(image, mid):
                end = mid
            else:
                start = mid

        up = start if self.checkRow(image, start) else end

        start = x
        end = m - 1
        while start + 1 < end:
            mid = start + (end - start) // 2
            if self.checkRow(image, mid):
                start = mid
            else:
                end = mid

        down = end if self.checkRow(image, end) else start
        return (right - left + 1) * (down - up + 1)


    def checkColumn(self, image, col):
        for i in range(len(image)):
            if image[i][col] == '1':
                return True
        return False

    def checkRow(self, image, row):
        for j in range(len(image[0])):
            if image[row][j] == '1':
                return True
        return False