/**
 * // note text: a string of sentence // magazineText: available words
 *
 * @param { string }
 * @param { string }
 *
 * @returns {boolean} whether we can stitch together the text
 */

const ransomeNote = (noteText, magazineText) => {
  const magazineTextArray = magazineText.split(' ');
  const noteArray = noteText.split(' ');

  const map = new Map();
  for (let word of magazineTextArray) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  for (let word of noteArray) {
    if (!map.has(word) || map.get(word) <= 0) {
      return false;
    } else {
      map.set(word, map.get(word) - 1);
    }
  }

  return true;
};

const note = 'a quick fox';
const magazine = 'a fox is very quick ';
console.log(ransomeNote(note, magazine));
