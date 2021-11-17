function chunk(array, size) {
  let index = 0;
  const result = [];

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index = index + size;
  }

  return result;
}

function chunk2(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}
