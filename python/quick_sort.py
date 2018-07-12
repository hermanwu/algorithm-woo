class Solution:
    def quickSort(self, arr):
        if (len(arr) < 1):
            return

        pivot = arr[0]; 