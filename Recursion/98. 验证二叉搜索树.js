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
var isValidBST = function (root) {
    var arr = [];
    var helper = function (node) {
        if (!node) return null;
        helper(node.left);
        arr.push(node.val);
        helper(node.right);
    }
    helper(root);
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] >= arr[i]) return false;
    }
    return true;
};