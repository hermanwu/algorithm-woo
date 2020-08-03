/**
 * @param A: An integer array
 * @return: An integer
 */
const singleNumber = function (A) {
  if (!A || A.length === 0) {
    return -1;
  }

  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result = result ^ A[i];
  }

  return result;
};
