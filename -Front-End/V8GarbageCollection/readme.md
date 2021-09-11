https://www.jiuzhang.com/seminar/160/

1. Two parts

- Old

- live longer

- mark-sweep algorithm

  - mark and removal are independent and modular.
  - cause memory fragmentation.

- mark-organization
  - sort and clean together.

* young
  - short life span
  - scavenge algorithm
  - use location to get fast timing.
  - half space is wasted.
* young is promoted to old.
  - promote by frequence.

- full stop
  - recycle and use process can not happen at the same time.
  - how to optimize it?
    - increase step, delay process.
    - limit memory usage.
