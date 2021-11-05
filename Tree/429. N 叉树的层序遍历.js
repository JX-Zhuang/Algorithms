/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    var result = [];
    var arr = [root];
    while (arr.length) {
        var length = arr.length;
        var temp = [];
        while (length--) {
            var node = arr.shift();
            arr.push(...node.children);
            temp.push(node.val);
        }
        result.push(temp);
    }
    return result;
};