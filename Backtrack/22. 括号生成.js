/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var result = [];
    var helper = function (str, leftCount, rightCount) {
        if (leftCount === n && rightCount === n) {
            result.push(str);
            return;
        }
        if (leftCount < n) {
            helper(str + '(', leftCount + 1, rightCount);
        }
        if (rightCount < leftCount) {
            helper(str + ')', leftCount, rightCount + 1);
        }
    }
    helper('', 0, 0);
    return result;
};