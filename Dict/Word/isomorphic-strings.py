'''

638. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character
while preserving the order of characters. No two characters may map to
the same character but a character may map to itself.

Example
Given s = "egg", t = "add", return true.

Given s = "foo", t = "bar", return false.

Given s = "paper", t = "title", return true.

Notice
You may assume both s and t have the same length.

'''

def isIsomorphic(self, s, t):
  if len(s) != len(t):
    return False

  dict1 = {}
  dict2 = {}

  for i in range(len(s)):
    if s[i] not in dict:
      dict1[s[i]] = t[i]
    else:
      if dict1[s[i]] != t[i]:
        return False

    if t[i] not in dict2:
      dict2[t[i]] = s[i]
    else:
      if dict2[t[i]] != s[i]:
        return False

  return True