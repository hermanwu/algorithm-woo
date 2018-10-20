'''

107. 单词拆分 I
给出一个字符串s和一个词典，判断字符串s是否可以被空格切分成一个或多个出现在字典中的单词。

样例
给出

s = "lintcode"

dict = ["lint","code"]

返回 true 因为"lintcode"可以被空格切分成"lint code"

'''


def word_break(self, s, dict):
  if len(dict) == 0:
    return len(s) == 0

  n = len(s)
  f = [False] * (n + 1)
  f[0] = True

  maxLengh = max([len(w) for w in dict])
  for i in range(1, n + 1):
    for j in range(1, min(i, maxLength) + 1):
      if not f[i - j]:
        continue
      if s[i - j : i] in dict:
        f[i] = True
        break

  return f[n]