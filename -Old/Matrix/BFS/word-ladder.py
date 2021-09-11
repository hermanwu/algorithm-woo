'''

Description
Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to end, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the dictionary
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
Have you met this question in a real interview?
Example
Given:
start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

'''

def ladderLength(self, start, end, dict):
  if len(start) != len(end):
    return -1

  if start == end:
    return 1

  n = len(start)

  letters = "".join([chr(x) for x in range(ord("a"), ord("z") + 1)])

  startSet = {start}
  endSet = {end}

  dict.discard(start)
  dict.discard(end)

  ladderLength = 2

  while startSet:
    if len(endSet) < len(startSet):
      startSet, endSet = endSet, startSet

    nextSet = set()

    for word in startSet:
      for i in range(n):
        for letter in letters:
          nextWord = word[:i] + letter + word[i + 1:]

          if nextWord in endSet:
            return ladderLength

          if nextWord not in dict:
            continue

          nextSet.add(nextWord)
          dict.remove(nextWord)

    startSet = nextSet
    ladderLength += 1

  return -1