/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var a = 1, b = 2, result = n;
    for (var i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
};