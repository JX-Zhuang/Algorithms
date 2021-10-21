/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    var stack = [-1];
    var max = 0;
    for (var i = 0; i < heights.length; i++) {
        while (heights[stack[stack.length - 1]] > heights[i]) {
            max = Math.max(max, heights[stack.pop()] * (i - stack[stack.length - 1] - 1));
        }
        stack.push(i);
    }
    while (stack.length !== 1) {
        max = Math.max(max, heights[stack.pop()] * (heights.length - 1 - stack[stack.length - 1]));
    }
    return max;
};