/**
 * 
Design and implement a data structure for Least Recently Used (LRU) cache.

It should support the following operations: get and set.

- get(key)
  Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.

- set(key, value)
  Set or insert the value if the key is not already present.
  When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
  Finally, you need to return the data from each get.

// Assume key is value;
 */

// https://www.jiuzhang.com/solution/lru-cache/

export class LRUCache {
  private map: Record<string, Node>;
  private head: Node; // Maybe it is better to setup dummy node.
  private tail: Node;
  private capacity = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: string) {
    if (this.map[key]) {
      this.shiftToTail(this.map[key]);
      return this.map[key].value;
    } else {
      return null;
    }
  }

  set(key: string, value: any) {
    // if key exists
    if (this.map[key]) {
      // shift
      this.shiftToTail(this.map[key]);
    }
    // if key does not exist
    else {
      const node = new Node(key, value);
      this.map[key] = node;

      if (this.head === null) {
        this.head === node;
        this.tail === node;
      } else {
        this.shiftToTail(node);
      }

      if (Object.keys(this.map).length > this.capacity) {
        const headToRemove = this.head;

        this.head = this.head.next;
        this.head.previous = null;

        delete this.map[headToRemove.key];
      }
    }
  }

  private shiftToTail(node: Node) {
    if (node.previous) {
      node.previous.next = node.next;
    }

    if (node.next) {
      node.next.previous = node.previous;
    }

    // add node to end;
    node.previous = this.tail;
    node.next = null;
    this.tail.next = node;
    this.tail = node;
  }
}

export class Node {
  previous: Node;
  next: Node;
  key: any;
  value: any;

  constructor(key: any, value: any) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
