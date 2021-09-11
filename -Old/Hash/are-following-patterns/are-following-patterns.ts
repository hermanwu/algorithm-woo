function areFollowingPatterns(strings, patterns) {
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < strings.length; i++) {
    const s = strings[i];
    const l = patterns[i];

    if (map1[s]) {
      if (map1[s] !== l) {
        return false;
      }
    } else {
      map1[s] = l;
    }

    if (map2[l]) {
      if (map2[l] !== s) {
        return false;
      }
    } else {
      map2[l] = s;
    }
  }
  return true;
}
