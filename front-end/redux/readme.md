Store

A store is an ideal solution for this problem of editable data and multiple actors, but let's imagine that the data is not being pushed from the server. In that case, we only have the component interaction and coordination problem, but we don't have the possibility of race conditions.

It's important to be aware that it doesn't and neither do other global stores solutions in general, because with Redux we are creating a big global application-level state: the store is an application wide singleton service.

The best way to avoid global application state is to not create it unless it's necessary, which many times is not. Modern applications do tend to need more state than before: like for example where do we keep the last search results for a given search form as we navigate through the app?

Many times a store is added to an application to get an observable-like API to allow for certain component interactions: why not simply use an Observable?

Adding a store is an important constraint to the overall architecture of the application, and it implies the creation of a large amount of global application state. If there are better alternatives built-in that don't imply this, why not consider them instead?
