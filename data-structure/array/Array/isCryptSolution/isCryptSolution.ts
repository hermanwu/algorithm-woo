function isCryptSolution(crypt, solution) {
  const [a, b, c] = crypt;
  const map = {};
  solution.forEach((item) => (map[item[0]] = +item[1]));

  const convert = (n) => {
    if (!map[n[0]] && n.length > 1) return NaN;
    return +n
      .split("")
      .map((l) => map[l])
      .join("");
  };

  return convert(a) + convert(b) === convert(c);
}
