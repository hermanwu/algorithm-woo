/**
 * @param paragraph:
 * @param banned:
 * @return:
 */
const mostCommonWord = function (paragraph, banned) {
  const hashMap = {};
  const specialCharacterString = "!?,;.";

  const arr = paragraph.split(" ");

  const parsedArray = arr.map((word) => {
    let newWord = word.toLowerCase();
    const lastCharacter = newWord[newWord.length - 1];

    if (specialCharacterString.indexOf(lastCharacter) > -1) {
      newWord = newWord.substring(0, newWord.length - 1);
    }

    if (newWord.indexOf("'") > -1) {
      newWord = newWord.substring(0, newWord.indexOf("'"));
    }

    return newWord;
  });

  let max = 0;
  let maxWord;
  for (let word of parsedArray) {
    if (banned.indexOf(word) > -1) {
      continue;
    }

    if (hashMap[word]) {
      hashMap[word] += 1;
    } else {
      hashMap[word] = 1;
    }

    if (hashMap[word] > max) {
      max = hashMap[word];
      maxWord = word;
    }
  }

  return maxWord;
};

const mostCommonWord2 = function (paragraph, banned) {
  let arr = {},
    res = null,
    freq = 0;

  paragraph = paragraph.toLowerCase().match(/[a-z]+/g);

  for (let i of paragraph) {
    if (arr[i]) arr[i]++;
    else arr[i] = 1;
  }

  for (let key in arr) {
    if (arr.hasOwnProperty(key)) {
      console.log(key, arr[key], res);
      if (arr[key] > freq && !banned.includes(key)) {
        freq = arr[key];
        res = key;
      }
    }
  }
  return res;
};
