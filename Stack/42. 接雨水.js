/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var result = 0, l = 0, r = height.length - 1, lMax = height[l], rMax = height[r];
    while (l < r) {
        lMax = Math.max(height[l], lMax);
        rMax = Math.max(height[r], rMax);
        if (lMax < rMax) {
            result += lMax - height[l++];
        } else {
            result += rMax - height[r--];
        }
    }
    return result;
};