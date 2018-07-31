'''
Description
Write a program to find the node at which the intersection of two singly linked lists begins.

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Have you met this question in a real interview?
Example
The following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3
begin to intersect at node c1.

Challenge
Your code should preferably run in O(n) time and use only O(1) memory.
'''

"""
Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
"""


class Solution:
    """
    @param: headA: the first list
    @param: headB: the second list
    @return: a ListNode
    """
    def getIntersectionNode(self, headA, headB):
        # write your code here
        cntA = 0
        cntB = 0
        a, b = headA, headB
        while a:
            a = a.next
            cntA += 1
        while b:
            b = b.next
            cntB += 1
        if a != b:
            return None

        a, b = headA, headB

        if cntA > cntB:
            rest = cntA - cntB
            while rest > 0:
                a = a.next
                rest -= 1

        if cntA < cntB:
            rest = cntB - cntA
            while rest > 0:
                b = b.next
                rest -= 1

        while a and b:
            if a == b:
                return a
            else:
                a = a.next
                b = b.next
