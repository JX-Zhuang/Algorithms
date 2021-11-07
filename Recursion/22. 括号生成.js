/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var result = [];
    generate(0, 0, n, '', result);
    return result;
};
var generate = function (left, right, n, str, result) {
    if (left === n && right === n) {
        result.push(str);
        return result;
    }
    if (left < n) generate(left + 1, right, n, str + '(', result);
    if (left > right) generate(left, right + 1, n, str + ')', result);
}