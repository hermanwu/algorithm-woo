function maxChar(str) {
  const charMap = {};
  let result = '';
  let max = 0;

  for (let char of str) {
   charMap[char] = charMap[char] + 1 || 1; 
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      result = char;
    }
  }

  return result;
}

function maxChar(str) {
  const charMap = {};
  let result = '';
  let max = 0;

  for (let char of str) {
   charMap[char] = charMap[char] + 1 || 1;
   if (charMap[char] > max) {
     max = charMap[char];
     result = char;
   }
  }

  return result;
}