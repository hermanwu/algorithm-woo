'''

425. 电话号码的字母组合
Given a digit string excluded 01, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Cellphone

样例
给定 "23"

返回 ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

注意事项
以上的答案是按照词典编撰顺序进行输出的，不过，在做本题时，你也可以任意选择你喜欢的输出顺序。

'''

def letterCombinations(self, digits):
  if len(digits) == 0:
    return []

  hash = {}
  hash['2'] = ['a', 'b', 'c']
  hash['3'] = ['d', 'e', 'f']
  hash['4'] = ['g', 'h', 'i']
  hash['5'] = ['j', 'k', 'l']
  hash['6'] = ['m', 'n', 'o']
  hash['7'] = ['p', 'q', 'r', 's']
  hash['8'] = ['t', 'u', 'v']
  hash['9'] = ['w', 'x', 'y', 'z']

  result = []

  self.dfs(result, [], hash, digits, 0)
  return result

def dfs(self, result, cur, digits, index):
  if len(cur) == len(digits):
    result.append("".join(cur))
    return
  characters = hash[digits[index]]
  for j in range(len(characters)):
    cur.append(characters[i])
    self.dfs(result, cur, hash, digits, index + 1)
    cur.pop()
