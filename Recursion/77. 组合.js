/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var result = [];
    var helper = function (start, arr) {
        if (arr.length === k) {
            result.push(arr.slice());
            return;
        }
        for (var i = start; i <= n; i++) {
            arr.push(i);
            helper(i + 1, arr);
            arr.pop();
        }
    }
    helper(1, []);
    return result;
};