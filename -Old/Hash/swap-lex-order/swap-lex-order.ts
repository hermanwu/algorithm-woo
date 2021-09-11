function swapLexOrder(str, pairs) {
  const groupedPairs = groupPairs(pairs);

  for (const pair of groupedPairs) {
    const arr = str.split("");
    const characters = [];

    for (const c of pair) {
      characters.push(arr[c - 1]);
    }

    characters.sort().reverse();

    const indexArray = Array.from(pair) as number[];
    indexArray.sort((a: number, b: number) => a - b);

    for (let i = 0; i < indexArray.length; i++) {
      const index = indexArray[i];
      const character = characters[i];

      arr[index - 1] = character;
    }

    str = arr.join("");
  }

  return str;
}

function groupPairs(pairs) {
  let groupedPairs = [];

  for (let pair of pairs) {
    const index1 = pair[0];
    const index2 = pair[1];

    let existSet = undefined;
    for (let i = 0; i < groupedPairs.length; i++) {
      const groupedPair = groupedPairs[i];
      if (groupedPair.has(index1) || groupedPair.has(index2)) {
        if (existSet) {
          // merge pair groups.
          for (let num of groupedPair) {
            existSet.add(num);
          }
          // remove old item.
          groupedPairs = groupedPairs.filter((item, index) => index !== i);
        } else {
          groupedPair.add(index1);
          groupedPair.add(index2);
          existSet = groupedPair;
        }
      }
    }

    if (!existSet) {
      const newSet = new Set();
      newSet.add(index1);
      newSet.add(index2);

      groupedPairs.push(newSet);
    }

    //console.log(groupedPairs);
  }

  return groupedPairs;
}
