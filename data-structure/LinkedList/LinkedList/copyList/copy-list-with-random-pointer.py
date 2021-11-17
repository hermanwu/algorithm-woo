class Solution:
  def copyRandomList(self, head):
    if not head:
      return None

    nhead = RandomListNode(head.label)
    nhead.random = head.random
    cur, ncur = head, nhead  
    nodemap = {head: nhead}

    while cur:
      if cur.next:
        ncur.next = RandomListNode(cur.next.label)
        ncur.next.random = cur.next.random
        nodemap[cur.next] = ncur.next
      cur = cur.next
      ncur = ncur.next

    ncur = nhead
    while ncur:
      if ncur.random:
        ncur.random = nodemap[ncur.random]
      ncur = ncur.next
    
    return nhead