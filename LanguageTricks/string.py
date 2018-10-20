# find last index of a character @
idx = word.rfind('@')

# find first index of a character @
idx = word.find('@')

# get first part of string:
suffix = word[idx:]

# get prefix part of string:
prefix = word[:idx]

# replace characters in string: remove all dot
newword = word.replace('.', '')

