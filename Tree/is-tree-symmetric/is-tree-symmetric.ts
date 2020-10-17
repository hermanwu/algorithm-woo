//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
  if (!t) {
    return true;
  }

  return recur(t.left, t.right);
}

function recur(left, right) {
  if (!left && !right) {
    return true;
  }
  if (left && right && left.value === right.value) {
    return recur(left.right, right.left) && recur(left.left, right.right);
  }

  return false;
}
