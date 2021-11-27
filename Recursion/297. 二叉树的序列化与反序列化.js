/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    var res = '';
    var helper = function (node) {
        if (!node) {
            res += 'null,';
            return;
        }
        res += node.val + ',';
        helper(node.left);
        helper(node.right);
    };
    helper(root);
    console.log(res)
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    var arr = data.split(',');
    var helper = function () {
        var val = arr.shift();
        if (val === 'null') {
            return null;
        }
        var node = new TreeNode(Number(val));
        node.left = helper();
        node.right = helper();
        return node;
    }
    return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
