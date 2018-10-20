'''
Description
Given an array of n objects with k different colors (numbered from 1 to k), sort them so that objects of the same color are adjacent, with the colors in the order 1, 2, ... k.

You are not suppose to use the library's sort function for this problem.

k <= n

Have you met this question in a real interview?
Example
Given colors=[3, 2, 2, 1, 4], k=4, your code should sort colors in-place to [1, 2, 2, 3, 4].

Challenge
A rather straight forward solution is a two-pass algorithm using counting sort.
That will cost O(k) extra memory. Can you do it without using extra memory?
'''

class Solution:
    """
    @param colors: A list of integer
    @param k: An integer
    @return: nothing
    """
    def quicksort(self,colors,start,end,colorfrom,colorto):
        if(colorfrom==colorto):
            return
        if(start>=end):
            return
        midcolor=(colorfrom+colorto)//2
        l,r=start,end
        while(l<=r):
            while(l<=r and colors[l]<=midcolor):
                l+=1
            while(l<=r and colors[r]>midcolor):
                r-=1
            if(l<=r):
                colors[l],colors[r]=colors[r],colors[l]
                l+=1
                r-=1
        self.quicksort(colors,start,r,colorfrom,midcolor)
        self.quicksort(colors,l,end,midcolor+1,colorto)

    def sortColors2(self, colors, k):
        # write your code here
        if(colors is None or len(colors)==0 or k==0):
            return
        self.quicksort(colors,0,len(colors)-1,1,k)