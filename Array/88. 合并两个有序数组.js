/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var index1 = m - 1, index2 = n - 1, index = m + n - 1;
    while (index >= 0) {
        if (index2 < 0) {
            nums1[index--] = nums1[index1--];
            continue;
        }
        nums1[index--] = nums1[index1] >= nums2[index2] ? nums1[index1--] : nums2[index2--];
    }
};