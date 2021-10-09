/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const length = nums.length;
    nums.sort((a, b) => a - b);
    if (nums[0] > 0 || nums[length - 1] < 0) return [];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = length - 1, sum;
        while (l < r) {
            sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]]);
                while (nums[l++] === nums[l]);
                while (nums[r--] === nums[r]);
            } else if (sum > 0) {
                r--;
            } else {
                l++;
            }
        }
    }
    return result;
};