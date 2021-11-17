export class TrieNode {
  value;
  next;
  constructor(x) {
    this.value = x;
    this.next = {};
  }
}

function buildTrie(words) {
  const root = new TrieNode(-1);

  for (let part of words) {
    let cur = root;
    for (let i = 0; i < part.length; i++) {
      const character = part[i];

      if (cur.next[character]) {
        cur = cur.next[character];
      } else {
        cur.next[character] = new TrieNode(0);
        cur = cur.next[character];
      }
    }

    // handle last character.
    cur.value = 1;
  }

  return root;
}
