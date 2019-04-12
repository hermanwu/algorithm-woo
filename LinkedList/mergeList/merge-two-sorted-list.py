class Solution:
  def mergeTwoLists(self, l1, l2):
    if not l1:
      return l2
    if not l2:
      return l1

    dummyHead = ListNoode(0)

    cur, p1, p2 = dummyHead, l1, l2

    while p1 and p2:
      if p1.val > p2.val:
        cur.next = p2
        p2 = p2.next

      else:
        cur.next = p1
        p1 = p1.next
      
      cur = cur.next

    if p1:
      cur.next = p1
    if p2:
      cur.next = p2

    return dummyHead.next