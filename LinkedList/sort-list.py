class Solution:
  def sortList(self, head):
      if not head:
        return None
      
      nums, cur = [], head
      while cur:
        nums.append(cur.val)
        cur = cur.next

      nums.sort()

      cur = head
      for num in nums:
        cur.val = num
        cur = cur.next
      
      return head