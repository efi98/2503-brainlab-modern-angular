# Module 03 - Modren Routing Features

## Projects:
|     |     |
| --- | --- |
| [Fun with Router](./projects/fun-with-router/) | Modern Routing Features |


In today’s session, we explored powerful new capabilities in the Angular Router:

* **Environment Injectors** – We saw how nested routes can now create their own `Environment Injector`, making it easier to isolate features and reduce shared state across modules.

* **Component Input Binding** – Route parameters can now bind directly to `Input` properties of components, removing the need to manually extract them using `ActivatedRoute`.

* **Hosted Directives** – We looked at how you can now dynamically attach directives to hosts, allowing to compose together some directives under a new custom directive.

* **Functional Guards and Resolvers** – We replaced boilerplate class-based guards with simple, composable functions that improve readability and reduce overhead.

These features make Angular routing more powerful, flexible, and aligned with modern Angular development patterns.