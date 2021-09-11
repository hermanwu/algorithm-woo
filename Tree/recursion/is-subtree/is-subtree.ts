//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isSubtree(t1, t2) {
  if (!t2) {
    return true;
  }

  if (!t1) {
    return false;
  }

  if (isSameTree(t1, t2)) {
    return true;
  }

  return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
}

function isSameTree(t1, t2) {
  if (!t1 && !t2) {
    return true;
  }

  if (!t1 || !t2) {
    return false;
  }

  if (t1.value === t2.value) {
    return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
  }

  return false;
}
