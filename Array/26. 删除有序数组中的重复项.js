/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var lastIndex = 0, i = 0, length = nums.length;
    while (i < length) {
        while (i + 1 < length && nums[i] === nums[i + 1]) {
            i++;
        }
        nums[lastIndex] = nums[i];
    }
    return lastIndex + 1;
};