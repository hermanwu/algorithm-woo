function wordsTyping(sentence: string[], rows: number, cols: number): number {
  let result = 0;
  let row = 0;
  let col = 0;
  let index = 0; // sentence position.

  while (row < rows && col < cols) {
    console.log(row);
    console.log(col);
    const currentWord = sentence[index];

    if (currentWord.length > cols - 1 - col) {
      row += 1;
      col = 0;
    } else {
      col += currentWord.length;

      if (col < cols - 1) {
        col += 1;
      } else {
        row += 1;
        col = 0;
      }

      index += 1;
      if (index === sentence.length) {
        index = 0;
        result += 1;
      }
    }
  }

  return result;
}
