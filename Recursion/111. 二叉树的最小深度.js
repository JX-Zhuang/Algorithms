/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    var min = Number.MAX_SAFE_INTEGER;
    var helper = function (node, level) {
        if (!node) return 0;
        if (!node.left && !node.right) {
            min = Math.min(min, level + 1);
        }
        helper(node.left, level + 1);
        helper(node.right, level + 1);
        return min;
    };
    return helper(root, 0);
};