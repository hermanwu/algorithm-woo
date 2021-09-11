'''

121. Word Ladder II
Given two words (start and end), and a dictionary, find all shortest transformation sequence(s) from start to end, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the dictionary
Example
Given:
start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
Return
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
Notice
All words have the same length.
All words contain only lowercase alphabetic characters.

'''

import collections

class Solution:

  def findNextWords(self, word, dict):
    letters = "".join([chr(x) for x in range(ord("a"), ord("z") + 1)])
    next_words = []

    for i in range(len(word)):
      for letter in letters:
        if letter == word[i]:
          continue
        next_word = word[:i] + letter + word[i + 1:]
        if next_word in dict:
          next_words.append(next_word)
    return next_words

  def bfs(self, start, end, dict, steps_dict, next_word_dict):
    queue = collections.deque()
    queue.append(start)
    steps_dict[start] = 0

    while queue:
      current = queue.popleft()
      next_words = self.findNextWords(current, dict)
      next_word_dict[current] = next_words
      for next_word in next_words:
        if next_word in steps_dict:
          continue
        queue.append(next_word)
        steps_dict[next_word] = steps_dict[current] + 1

    return

  def dfs(self, start, end, dict, steps_dict, next_word_dict, pre, ans):
    if pre[-1] == end:
      ans.append(list(pre))
      return

    current = pre[-1]
    if current in next_word_dict:
      next_words = self.findNextWords(current, dict)
    else:
      next_words = self.findNextWords(current, dict)

    for next_word in next_words:
      if steps_dict[next_word] < steps_dict[current]:
        pre.append(next_word)
        self.dfs(start, end, dict, steps_dict, next_words_dict, pre, ans)
        pre.pop()

    return

  def findLadders(self, start, end, dict):
    if start == end:
      return [[start]]

    dict.add(start)
    dict.add(end)
    steps_dict = {}
    next_word_dict = {}
    self.bfs(end, start, dict, steps_dict, next_word_dict)
    ans = []
    self.dfs(start, end, dict, steps_dict, next_word_dict, [start], ans)
    return ans