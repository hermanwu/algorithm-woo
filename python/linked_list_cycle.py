'''
Description
Given a linked list, determine if it has a cycle in it.



Have you met this question in a real interview?
Example
Given -21->10->4->5, tail connects to node index 1, return true

Challenge
Follow up:
Can you solve it without using extra space?
'''

"""
Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""


class Solution:
    """
    @param: head: The first node of linked list.
    @return: True if it has a cycle, or false
    """
    def hasCycle(self, head):
        # write your code here
        if head is None or head.next is None:
            return False

        a, b = head, head

        while a and a.next:
            a = a.next.next
            b = b.next

            if a == b:
                return True

        return False
