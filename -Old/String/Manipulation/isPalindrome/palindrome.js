function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

function palindrome2(str) {
  let arr = str.split("");
  return arr.every((char, i) => {
    return char === arr[arr.length - 1 - i];
  });
}