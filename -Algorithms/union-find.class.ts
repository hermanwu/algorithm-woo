// https://stackoverflow.com/questions/43036204/what-is-the-time-complexity-of-quick-union

// Find: O(a(n)) => O(1)
// Union: O(a(n)) => O(1).
// a(.): amortized - Inverse Ackermann Function.
export class UnionFind {
  parents: number[];
  ranks: number[];

  constructor(memberCount: number) {
    this.parents = [];
    this.ranks = [];
    for (let i = 0; i < memberCount; i++) {
      this.parents.push(i);
      this.ranks.push(0);
    }
  }

  // Path compression.
  find(p: number) {
    while (p !== this.parents[p]) {
      this.parents[p] = this.parents[this.parents[p]];
      p = this.parents[p];
    }

    if (p !== this.parents[p]) {
      this.parents[p] = this.find(this.parents[p]);
    }
    return this.parents[p];
  }

  // Union by ranks.
  union(p: number, q: number) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (this.ranks[rootP] > this.ranks[rootQ]) {
      this.parents[rootQ] = rootP;
    }

    if (this.ranks[rootQ] > this.ranks[rootP]) {
      this.parents[rootP] = rootQ;
    }

    if (this.ranks[rootQ] === this.ranks[rootP]) {
      this.parents[rootP] = rootQ;
      this.ranks[rootQ] += 1;
    }
  }
}
