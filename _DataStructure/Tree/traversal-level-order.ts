/**
 * Leetcode TreeNode (rename to "Node" before running code in LeetCode)
 */
export class TreeNode {
  val: number;
  children: TreeNode[];

  constructor(val?: number, children?: TreeNode[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

/**
 * Given an n-ary tree, return the level order traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value (See examples).
 *
 * Constraints:
 *   - The height of the n-ary tree is less than or equal to 1000
 *   - The total number of nodes is between [0, 104]
 *
 * Adapted from: https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 */
function levelOrderArrayToTree(arr: number[]): TreeNode {
  if (arr.length === 0) {
    return null;
  }

  const queue = [];
  let pointer = 0;
  queue.push(new TreeNode(arr[0]));

  let i = 1;
  while (i < arr.length) {
    if (arr[i] === null) {
      i += 1;
      const childrenGroup = [];

      while (arr[i] !== null && i < arr.length) {
        childrenGroup.push(new TreeNode(arr[i]));
        i += 1;
      }
      queue.push(...childrenGroup);

      queue[pointer].children = childrenGroup;
      pointer += 1;
    }
  }

  return queue[0];
}

/**
 * Given the root of a TreeNode, convert it to a 2D-array
 */
function levelOrderTraversal(root: TreeNode): number[][] {
  const result = [];
  let queue = [root];

  while (queue.length > 0) {
    const len = queue.length;
    const levelResult = [];

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      levelResult.push(cur.val);

      if (cur.children) {
        queue.push(...cur.children);
      }
    }

    result.push(levelResult);
  }
  return result;
}

// console.log(levelOrder([1, null, 3, 2, 4, null, 5, 6])); // [[1],[3,2,4],[5,6]]
console.log(
  levelOrderTraversal(
    levelOrderArrayToTree([
      1,
      null,
      2,
      3,
      4,
      5,
      null,
      null,
      6,
      7,
      null,
      8,
      null,
      9,
      10,
      null,
      null,
      11,
      null,
      12,
      null,
      13,
      null,
      null,
      14,
    ])
  )
); // [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]

//console.log(treeNodeToArray(levelOrder([1,null,3,2,4,null,5,6])));
