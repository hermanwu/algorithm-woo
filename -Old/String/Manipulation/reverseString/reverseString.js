function reverse(str) {
  return str.split('').reverse().join('');
}


function reverse2(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverse3(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '');
}

