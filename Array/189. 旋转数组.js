/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var reverse = function (arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
var rotate = function (nums, k) {
    var l = nums.length;
    k %= l;
    reverse(nums, 0, l - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, l - 1);
};