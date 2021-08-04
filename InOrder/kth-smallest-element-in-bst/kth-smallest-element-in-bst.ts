//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
  let stack = [];

  while (t || stack) {
    while (t) {
      stack.push(t);
      t = t.left;
    }

    t = stack.pop();
    k -= 1;

    if (k === 0) {
      return t.value;
    }

    t = t.right;
  }
}
