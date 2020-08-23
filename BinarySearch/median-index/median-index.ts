/**
 * @param a: the array a
 * @return: return the index of median
 */
const getAns = function (a) {
  // write your code here

  const sorted = [...a].sort((a, b) => a - b);

  console.log(sorted);

  const median = Math.ceil(a.length / 2);

  const index = median - 1;

  const searchNum = sorted[index];

  return a.indexOf(searchNum);
};
