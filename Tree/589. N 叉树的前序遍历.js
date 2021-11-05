/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) return [];
    var result = [];
    var arr = [root];
    while (arr.length) {
        var node = arr.shift();
        result.push(node.val);
        for (var i = node.children.length - 1; i >= 0; i--) {
            arr.unshift(node.children[i]);
        }
    }
    return result;
};