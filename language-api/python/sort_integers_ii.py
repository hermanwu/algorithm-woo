class Solution:
    """
    @param A: an integer array
    @return: nothing
    """
    def sortIntegers2(self, A):
        self.quickSortHelper(A, 0, len(A) - 1)

    def quickSortHelper(self, arr, start, end):
        if start >= end:
            return

        pivot = arr[start]
        left, right = start, end

        while left <=right:
            while left <= right and arr[left] < pivot:
                left += 1

            while left <= right and arr[right] > pivot:
                right -= 1

            if left <= right:
                arr[left], arr[right] = arr[right], arr[left]
                left += 1
                right -= 1

        self.quickSortHelper(arr, start, right)
        self.quickSortHelper(arr, left, end)