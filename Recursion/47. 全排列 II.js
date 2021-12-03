/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var result = [];
    var visited = [];
    var backtrack = function (index, arr) {
        if (arr.length === nums.length) {
            result.push([...arr]);
            return;
        }
        for (var i in nums) {
            if (visited[i] || (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1])) continue;
            visited[i] = true;
            arr.push(nums[i]);
            backtrack(index + 1, arr);
            arr.pop();
            visited[i] = false;
        }
    };
    nums.sort((a, b) => a - b);
    backtrack(0, []);
    return result;
};