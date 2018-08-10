'''
Description
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

The length of A and B will be between 1 and 10000.

Have you met this question in a real interview?
Example
with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").
'''

def repeatedStringMatch(self, A, B):
  s = ''
  count = 0

  while len(s) < len(B):
    s += A
    count += 1

  if B in s:
    return count

  s += A

  if B in s:
    count += 1
    return count