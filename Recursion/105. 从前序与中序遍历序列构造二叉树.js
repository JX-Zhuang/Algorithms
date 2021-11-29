/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    var l = preorder.length;
    var helper = function (preStart, preEnd, inStart, inEnd) {
        if (preEnd < preStart || inEnd < inStart) return null;
        var rootVal = preorder[preStart];
        var rootValIndexOfInorder = inorder.indexOf(rootVal);
        var nextPreEnd = preStart + (rootValIndexOfInorder - inStart);
        var nextPreStart = preEnd - (inEnd - rootValIndexOfInorder) + 1;
        var root = new TreeNode(rootVal);
        root.left = helper(preStart + 1, nextPreEnd, inStart, rootValIndexOfInorder - 1);
        root.right = helper(nextPreStart, preEnd, rootValIndexOfInorder + 1, inEnd);
        return root;
    };
    return helper(0, l - 1, 0, l - 1);
};
