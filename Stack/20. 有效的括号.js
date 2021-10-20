/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [], last;
    for (var item of s) {
        if (item === '(' || item === '{' || item === '[') {
            stack.push(item);
            continue;
        }
        last = stack.pop();
        if (item === ')' && last !== '(') return false;
        if (item === ']' && last !== '[') return false;
        if (item === '}' && last !== '{') return false;
    }
    return stack.length === 0;
};