function rotateImage(a) {
  const len = a.length;

  for (let i = 0; i < (len - 1) / 2; i++) {
    for (let j = 0; j < len / 2; j++) {
      let tmp = a[i][j];

      a[i][j] = a[len - j - 1][i];
      a[len - j - 1][i] = a[len - i - 1][len - j - 1];
      a[len - i - 1][len - j - 1] = a[j][len - i - 1];
      a[j][len - i - 1] = tmp;
    }
  }
  return a;
}
