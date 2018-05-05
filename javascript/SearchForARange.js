/*
 Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

 Your algorithm's runtime complexity must be in the order of O(log n).

 If the target is not found in the array, return [-1, -1].

 For example,
 Given [5, 7, 7, 8, 8, 10] and target value 8,
 return [3, 4].

 */

var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = [-1, -1];

    while (start + 1 < end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    if (nums[start] == target) {
        result[0] = start;
    } else if (nums[end] == target) {
        result[0]= end;
    } else {
        result[0] = -1;
        result[1] = -1;
        return result;
    }

    start = 0;
    end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] <= target) {
            start = mid
        } else {
            end = mid - 1;
        }
    }

    if (nums[end] == target) {
        result[1] = end;
    } else {
        result[1] = start;
    }

    return result;
};