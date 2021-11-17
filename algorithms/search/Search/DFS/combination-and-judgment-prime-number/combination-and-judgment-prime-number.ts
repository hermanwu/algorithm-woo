/**
 * @param a: the n numbers
 * @param k: the number of integers you can choose
 * @return: how many ways that the sum of the k integers is a prime number
 */
const getWays = function (a, k) {
  // Write your code here
  return recur(a, 0, k, 0);
};

const recur = (arr, curSum, selected, index) => {
  if (selected === 0) {
    if (isPrime(curSum)) {
      return 1;
    } else {
      return 0;
    }
  }

  let result = 0;
  for (let i = index; i < arr.length; i++) {
    let updatedSum = curSum + arr[i];
    let updatedSelected = selected - 1;

    result = result + recur(arr, updatedSum, updatedSelected, i + 1);
  }

  return result;
};

const isPrime = (n) => {
  if (n === 1 || n === 2) {
    return true;
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
