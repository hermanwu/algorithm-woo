import { Heap } from './data-structure/Heap/implement-heap-in-javascript/heap';

function lastStoneWeight(stones: number[]): number {
  const heap = new Heap();

  for (let stone of stones) {
    heap.push(stone);
  }

  while (heap.size() > 1) {
    // console.log(heap);
    const max = heap.pop();
    const second = heap.pop();

    const newStone = max - second;
    if (newStone !== 0) {
      heap.push(newStone);
    }
  }

  const result = heap.max();
  if (result) {
    return result;
  }
  return 0;
}
