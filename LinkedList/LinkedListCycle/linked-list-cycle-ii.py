"""
Definition of ListNode
class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""

class Solution:
    """
    @param head: The first node of linked list.
    @return: The node where the cycle begins. if there is no cycle, return null
    """
    # method: evaluate slow != fast
    def detectCycle(self, head):
        if not head or not head.next:
            return
        
        slow = fast = head
        start = True
        
        while start or slow != fast:
            start = False
            if not fast or not fast.next:
                return
            slow = slow.next
            fast = fast.next.next
            
        slow2 = head
        while slow2 != slow:
            slow2 = slow2.next
            slow = slow.next
            
        return slow

    # Top method: evaluate fasst is not null
    def detectCycle(self, head):

        if head is None or not head.next:
            return None
            
        slow = fast = head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
            if slow == fast:
                break
            
        if slow != fast:
            return None
            
        slow = head
            
        while slow != fast:
            slow = slow.next
            fast = fast.next
                
        return slow