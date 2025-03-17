# Module 3 - Introduction to Change Detection and Signals

## Projects:
|     |     |
| --- | --- |
| [Fun with change](./projects/fun-with-change/) | Change Detection and Signals |

### Change Detection in Angular
* We talked about the **Magic** behind angulars change detection
* We talked about threads, tasks, and how zone.js works
* We understood that the automatic change detection is wasteful and not performant and especially - why
* We saw how to disable automatic change detection using the decorator property: `changeDetection` and the ChangeDetectionStrategy enumeration
* We saw how to use signals so that we do not rely on change detection at all

### Introduction to signals
* We saw how to use the `signal(value)` function to create a signal wrapper around a value
* The `signal` function returns a `WriteableSignal`
* We saw how to use the `signal.set` and `signal.update` methods to modify the value.
    - `.set` - to set a new value
    - `.update` - to set a value that the depends on the old value

* We saw the `computed` function
  * It creates a **readonly** signal
  * It receives a function that calculates an expression
  * The expression can depend on other signals
  * IT creates a signal that automatically re-evaluates itself whenever the signals it depends on, change

```typescript
readonly a = signal(10);
readonly b = singnal(20);
readonly sum = computed(() => this.a() + this.b())
```

>In this example, the signal `sum` is readonly, you cannot directly modify it, but it modifes itself whenever either `a` or `b` change


* We saw the `effect` function, that is used to "respond" to changes in signals
  * The effect function, takes a function as parameter - an action
  * It immedietly runs the action
  * If the action calls signals, it subscribes to these signals
  * Whenever any of these signals change, the action is re-executed
  * But only if the signals truely change!
* The `effect` function can only be used in the constructor. Later on in the course, we will understand why

```typescript
effect(() => {
  var x = this.signalA();
  var y = this.signalB();
  // some more code...
})
```

>In this example, if either `signalA` or `signalB` changes, the action is executed

