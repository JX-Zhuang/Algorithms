/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var result = 0;
    var l = 0, r = height.length - 1;
    while (l < r) {
        result = Math.max(Math.min(height[l], height[r]) * (r - l), result);
        if (height[l] < height[r]) l++;
        else r--;
    }
    return result;
};