"""
372. Delete Node in a Linked List
Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.

Example
Linked list is 1->2->3->4, and given node 3, delete the node in place 1->2->4

Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""


class Solution:
    """
    @param: node: the node in the l
    ist should be deletedt
    @return: nothing
    """
    def deleteNode(self, node):
        # write your code here
        node.val = node.next.val
        node.next = node.next.next