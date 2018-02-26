/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


let diameterOfBinaryTree = function(root) {
    let max = 0;

    let helper = function(node) {
        if (node === null) {
            return 0;
        }

        let left = helper(node.left);
        let right = helper(node.right);

        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }

    helper(root);
    return max;
};