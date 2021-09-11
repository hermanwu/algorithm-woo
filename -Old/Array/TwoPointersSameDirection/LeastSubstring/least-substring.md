Description
Given a string containing n lowercase letters, the string needs to divide into several substrings, the letter in the substring should be same, and the number of letters in the substring does not exceed k, and output the minimal substring number meeting the requirement.

n \leq 1e5n≤1e5
Have you met this question in a real interview?  
Example
Give s = "aabbbc", k = 2, return 4

Explaination:
we can get "aa", "bb", "b", "c" four substring.
Give s = "aabbbc", k = 3, return 3

Explaination:
we can get "aa", "bbb", "c" three substring.