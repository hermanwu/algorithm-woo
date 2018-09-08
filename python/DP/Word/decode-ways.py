'''

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

Example
Given encoded message 12, it could be decoded as AB (1 2) or L (12).
The number of ways decoding 12 is 2.

'''
def numDecodings(self, s):
  if len(s) == 0:
    return 0
  if int(s[0]) == 0:
    return 0

  f = [0] * (len(s) + 1)
  f[0] = 1

  for i in range(1, len(s) + 1):
    f[i] = 0

    if int(s[i - 1]) > 0:
      f[i] = f[i - 1]

    if i >= 2:
      num = int(s[i - 2 : i])

      if num >= 10 and num <= 26:
        f[i] += f[i - 2]

  return f[len(s)]