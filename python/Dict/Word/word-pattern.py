'''


828. Word Pattern
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example
Given pattern = "abba", str = "dog cat cat dog", return true.
Given pattern = "abba", str = "dog cat cat fish", return false.
Given pattern = "aaaa", str = "dog cat cat dog", return false.
Given pattern = "abba", str = "dog dog dog dog", return false.

Notice
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.


'''

def wordPattern(self, pattern, testStr):

  word = testStr.split()
  dict = {}

  if len(set(pattern) != len(set(word))):
    return False

  for i in range(len(pattern)):
    if pattern[i] not in dict:
      dict[pattern(i)] = word[i]
    else:
      if dict[pattern[i]] != word[i]:
        return False

  return True