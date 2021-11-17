function reverseInt(n) {
  const sign = Math.sign(n);
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return sign * parseInt(reversed);
}

function reverseInt2(n) {
  let ans = 0;

  const sign = Math.sign(n);
  let num = Math.abs(n);
  let mod = 10;

  while (num !== 0) {
    console.log(ans);
    ans = ans * 10 + (num % mod );
    num = parseInt(num / 10);
    
  }
  return ans * sign;
}