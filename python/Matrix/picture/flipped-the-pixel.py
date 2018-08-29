'''
1539. 翻转像素
一张图片以二维数组byte[][]形式的像素点来排列，数组的每一个元素代表一个像素位(0 或 1)。现在需要将这些像素点翻转，首先将每一行的像素点对称翻转，然后将每一位上的像素点翻转(0->1,1->0)。

样例
Given byte[] []=
[[1,0,1,1,0],[0,1,1,0,1],[1,1,0,1,0], [0,0,1,0,0]]
Return:
[[1,0,0,1,0],[0,1,0,0,1],[1,0,1,0,0],[1,1,0,1,1]]
注意事项
1.both 1 and 0 are integers
2.The Byte is not empty

'''

def flippedBytes(self, Byte):
  if Byte is None or len(Byte) <= 0:
    return Byte
  m, n = len(Byte), len(Byte[0])

  for i in range(m):
    start = 0
    end = n - 1
    while start < end:
      Byte[i][start], Byte[i][end] = Byte[i][end], Byte[i][start]
      start += 1
      end -= 1

    for j in range(n):
      Byte[i][j] = 1 - Byte[i][j]

  return Byte