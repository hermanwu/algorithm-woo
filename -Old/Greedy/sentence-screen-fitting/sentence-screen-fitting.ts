function wordsTyping(sentence: string[], rows: number, cols: number): number {
  const s = sentence.join(' ') + ' ';

  let start = 0;
  let len = s.length;

  for (let i = 0; i < rows; i++) {
    start += cols;

    if (s[start % len] === ' ') {
      start++;
    } else {
      while (start > 0 && s[(start - 1) % len] !== ' ') {
        start--;
      }
    }
  }

  return Math.floor(start / len);
}
