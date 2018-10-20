'''

637. Valid Word Abbreviation
Given a non-empty string word and an abbreviation abbr, return whether the string matches with the given abbreviation.

A string such as "word" contains only the following valid abbreviations:

["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
Example
Example 1:

Given s = "internationalization", abbr = "i12iz4n":
Return true.
Example 2:

Given s = "apple", abbr = "a2e":
Return false.
Notice
Notice that only the above abbreviations are valid abbreviations of the string word. Any other string is not a valid abbreviation of word.
'''
def validWordAbbreviation(self, word, abbr):
