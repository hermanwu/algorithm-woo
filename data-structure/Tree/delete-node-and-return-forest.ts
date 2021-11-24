/**
 https://leetcode.com/problems/delete-nodes-and-return-forest/
 1110. Delete Nodes And Return Forest
Given the root of a binary tree, each node in the tree has a distinct value.
After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.

 

Example 1:
Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]

Example 2:
Input: root = [1,2,4,null,3], to_delete = [3]
Output: [[1,2,4]]
 

Constraints:
The number of nodes in the given tree is at most 1000.
Each node has a distinct value between 1 and 1000.
to_delete.length <= 1000
to_delete contains distinct values between 1 and 1000.

 */

function delNodes(
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> {
  const set = new Set(to_delete);
  const res = [];

  function postOrder(node: TreeNode) {
    if (node === null) {
      return null;
    }
    node.left = postOrder(node.left);
    node.right = postOrder(node.right);

    if (set.has(node.val)) {
      if (node.left) res.push(node.left);
      if (node.right) res.push(node.right);
      return null;
    } else {
      return node;
    }
  }

  // Post order call.
  postOrder(root);

  // Handle last root node.
  if (!set.has(root.val)) res.push(root);

  return [];
}
