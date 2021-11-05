/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    var result = [];
    var dfs = function (root) {
        if (!root) return;
        for (var node of root.children) {
            dfs(node);
        }
        result.push(root.val);
    }
    dfs(root);
    return result;
};
var postorder = function (root) {
    if (!root) return [];
    var result = [];
    var stack = [root];
    while (stack.length) {
        var node = stack.pop();
        result.unshift(node.val);
        for (var n of node.children) {
            stack.push(n);
        }
    }
    return result;
};