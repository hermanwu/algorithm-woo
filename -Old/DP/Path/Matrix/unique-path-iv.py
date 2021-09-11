'''
Description
Give two integers to represent the height and width of the grid.
The starting point is in the upper left corner and the ending point is in the upper right corner.
You can go to the top right, right or bottom right.
Find out the number of paths you can reach the end. And the result needs to mod 1000000007.

width > 1, height > 1

Have you met this question in a real interview?
Example
input:
height = 3
width = 3
output:
2
'''

def uniquePath(self, height, width):
  # Write your code here
  counts = [0 for _ in range(height)]
  counts[0] = 1

  for i in range(1, width):
    nextCnts = [0 for _ in range(height)]
    for j in range(height):
      if counts[j] > 0:
        nextCnts[j] += counts[j]
        if j - 1 >= 0:
          nextCnts[j - 1] += counts[j]
        if j + 1 < height:
          nextCnts[j + 1] += counts[j]
    counts = nextCnts

  return counts[0] % 1000000007