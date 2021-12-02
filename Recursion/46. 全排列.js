/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var result = [];
    var helper = function (arr) {
        if (arr.length === nums.length) {
            result.push(arr);
            return;
        }
        for (var i of nums) {
            if (arr.includes(i)) continue;
            helper(arr.concat(i));
        }
    };
    helper([]);
    return result;
};