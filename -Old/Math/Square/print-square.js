// print
// ***
// * *
// ***

(function() {
  function printSquare(width, height) {
    for (let i = 0; i < height; i++) {
      let line = '';
      for (let j = 0; j < width; j++) {
        if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
          line += '*';
        } else {
          line += ' ';
        }
      }
      console.log(line);
    }
  }

  printSquare(5, 3);
})();
