const sortColors2 = function (colors, k) {
  if (colors === null || colors.length === 0) {
    return;
  }
  const rainbowSort = function (colors, left, right, colorFrom, colorTo) {
    if (colorFrom === colorTo) {
      return;
    }
    if (left >= right) {
      return;
    }
    var colorMid = Math.floor((colorFrom + colorTo) / 2);
    var l = left,
      r = right;
    var temp;
    while (l <= r) {
      while (l <= r && colors[l] <= colorMid) {
        l++;
      }
      while (l <= r && colors[r] > colorMid) {
        r--;
      }
      if (l <= r) {
        temp = colors[l];
        colors[l] = colors[r];
        colors[r] = temp;

        l++;
        r--;
      }
    }

    rainbowSort(colors, left, r, colorFrom, colorMid);
    rainbowSort(colors, l, right, colorMid + 1, colorTo);
  };
  rainbowSort(colors, 0, colors.length - 1, 1, k);
};
