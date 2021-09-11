class Solution:
  def partition(self, s):
    if not s:
      return []
    
    result = []
    self.dfs(s, [], result)
    return result

  def dfs(self, string, localPartition, result):
    if len(string) == 0:
      result.append(localPartition[:])
      return
    
    for i in range(1, len(string) + 1):
      if self.isPalindrome(string[:i]):
        localPartition.append(string[:i])
        self.dfs(string[i:], localPartition, result)
        localPartition.pop()

  def isPalindrome(self, string):
    if not string:
      return True

    left, right = 0, len(string) - 1
    while left < right:
      if string[left] != string[right]:
        return False
      left += 1
      right -= 1

    return True