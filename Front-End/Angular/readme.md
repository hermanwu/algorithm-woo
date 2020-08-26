https://blog.bitsrc.io/quantum-angular-maximizing-performance-by-removing-zone-e0eefe85b8d8
https://blog.bitsrc.io/rxjs-patterns-efficiency-and-performance-10bbf272c3fc

1. different type of modules:

- feature module,
- service module,
- widget module,
- routing module,
- domain module
- core / shared module

2. Separation of concerns between components, services, and directives.
   Dom Manipulation
   Directives are the ultimate reusability feature in Angular
   I see them underused in almost every project I have worked on.
   Directives can be used to take off lots of responsibility from Components.

3. Change detection and re-rendering

- OnPush
- Use only (or mostly) Observables to display data in your templates. If you’re using local state, use a BehaviorSubject
- Reducing re-renders

4.  Routing
    Routing should not only be used to split top-level routing,
    but also to drive smaller and deeper parts of your UI.
    This allows you to split your bundles’ content into primary routes,
    but also smaller parts of the application that don’t need to be downloaded on your user’s devices until they’re requested.
    For example, let’s assume you’re building a tabbed user interface, and that each tab is independent of each other: this is an ideal situation to split each tab into its own route and use lazy-loading to only load the selected tab’s content.

    Example: A tabbed component
    For example, let’s assume you’re building a tabbed user interface,
    and that each tab is independent of each other: this is an ideal situation to split each tab into its own route and use lazy-loading to only load the selected tab’s content.
    Another example? Popups and Modals! There is absolutely no need to load them along with your initial bundle. If the user hasn’t requested them, then only load them when they’re needed.
    In case you need inspiration, Angular Material’s Tabs Component supports this pattern.

5.  Forms

- reactive forms.

6. rxjs.

- I am convinced that one of Angular’s most powerful features is
  its deep integration with Rx and Functional Reactive Programming.
- Asynchronous Processing is particularly hard in modern, highly interactive apps:
  forget Promise, setTimeout and setInterval and start doing things the Rx-way.
- Another big reason to master Rx is optimizing performance: sure,
  using the Async pipe is a start, but sometimes it’s not enough.
  You can control re-renders by only allowing through the pipeline the events that need to be re-rendered.
