const obj = {
  a: 1,
  b: {
    c: "test"
  },
  d: null
};

const flattenObj = obj => {
  let result = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(result, flattenObj(obj[key]));
    } else {
      result[key] = obj[key];
    }
  });

  return result;
};

console.log(flattenObj(obj));
