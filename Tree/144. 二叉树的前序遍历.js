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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    var result = [];
    var perorder = function (root) {
        if (!root) return;
        result.push(root.val);
        perorder(root.left);
        perorder(root.right);
    };
    perorder(root);
    return result;
};