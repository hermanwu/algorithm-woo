'''

829. Word Pattern II
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.(i.e if a corresponds to s, then b cannot correspond to s. For example, given pattern = "ab", str = "ss", return false.)

Example
Given pattern = "abab", str = "redblueredblue", return true.
Given pattern = "aaaa", str = "asdasdasdasd", return true.
Given pattern = "aabb", str = "xyzabcxzyabc", return false.

Notice
You may assume both pattern and str contains only lowercase letters.

'''

def wordPatternMatch(self, pattern, str):
  dict1 = {}
  dict2 = set()

  return self.dfs(dic1, dic2, pattern, str)

def dfs(self, dic1, dic2, pattern, str):
  if not pattern and not str:
    return True

  if not pattern or not str:
    return False

  temp = pattern[0]

  if temp in dict1:
    length = len(dict1[temp])
    if dict1[temp] == str[:length]:
      return self.dfs(dict1, dict2, pattern[1:], str[length:])

    if temp not in dict1:
      for i in range(1, len(str) + 1):
        new_string = str[:i]
        if new_string in dict2:
          continue
        dict1[temp] = new_string
        dict2.add(new_string)
        if self.dfs(dict1, dict2, pattern[1:], str[i:]):
          return True
        dict2.remove(new_string)
        dict1.pop(temp)

      return False
