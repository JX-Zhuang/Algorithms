var maxSlidingWindow = function (nums, k) {
    var window = [], result = [];
    for (var i = 0; i < nums.length; i++) {
        if (i >= k && i - k === window[0]) {
            window.shift();
        }
        while (nums[window[window.length - 1]] <= nums[i]) {
            window.pop();
        }
        window.push(i);
        if (i >= k - 1) {
            result.push(nums[window[0]]);
        }
    }
    return result;
}