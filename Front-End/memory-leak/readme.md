javascript memoryleak

chrome devtool
js heap space should go down, which means garbage is collected.

How to find it:

- chrome devtool -> Memory -> Heap Snapshot -> Take a snapshot -> Find item that consumes the most stuff.

How to improve performance:

- Memory - audit
- Use pageInsights
