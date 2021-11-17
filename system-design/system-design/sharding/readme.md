horizontal partitioning vs vertical partitioning

Why sharding:

- Single big database can be expensive. Break into smaller piece is better.

What is sharding:

- Example of pizza
- one server gets a piece.
- consistency is important.
- availability

What should be sharded on:

- ID
- Location

Problem:

- database join from two shard is really costly
- memcached

What to do if server fails:

- master slave architecture.
- always update master
- slave continuously pull from master.
