a special object to you (the promise) and then you tell the promise what to do when the asynchronous task completes.

Async and await.

- The await keyword can be put in front of an expression that evaluates to a promise.
- The await keyword pauses the execution of the async function until the promise is resolved.
- When this happens, the entire await expression evaluates to the result value of the promise, and then the execution of the async function resumes.
  Furthermore, the async function itself returns a promise as well that is resolved when the execution of the function body completes.
