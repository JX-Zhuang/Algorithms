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
 * @return {boolean}
 */
var isValidBST = function (root, min, max) {
    if (!root) return true;
    var val = root.val;
    if (min !== undefined && val <= min) return false;
    if (max !== undefined && val >= max) return false;
    if (!isValidBST(root.left, min, val)) return false;
    if (!isValidBST(root.right, val, max)) return false;
    return true;
};