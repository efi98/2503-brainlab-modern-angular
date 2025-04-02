# Module 04 - Introduction Change Detection and Signals

## Projects:
|     |     |
| --- | --- |
| [Fun with change](./projects/fun-with-change/) | Change Detection and Signals |
| [Fun with signals](./projects/fun-with-signals/) | Component Authoring with signals |
| [notepad](./projects/fun-with-change/) | How to migrate a working application to signals |

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

### Authoring components in angular
* We saw how to manually create a component
    * Create a `.ts` file with a class that reprensents the component
    * Use the `@Component` decorator to mark to angular that the class reprensents a component and configure the selector, the template, the style, and the fact that it is standalone
    * Create an html and css files and add their path to the component decorator
* We then saw how to use the cli to create it
```cmd
ng g c components/comp-name
```

### Using the signal based component APIs
* Modern Angular comes with new ways to define communication between components
* We saw how to define an input using the `input` function.
* We saw how to make it mandatory using the `input.required` function.
* We saw how to define an output using the `output` function.
* We saw how to define a pair of input and output for the same data using the `model` function.
* We saw how to make it mandatory using the `model.required` function
* Finally, we saw that we can use it seperatly, as input, as output or as two way bounded signal using the syntaxes:

### Populating `inputs`, `outputs` and `models`

* We saw that we can populate input using the simplified syntax
```html
<app-component caption="Hello World">
```

But this is only for strings, and for static values, that do not change.


* We saw that we can use the **Binding Syntax** to pass any expression, so that the value is re-applied when it changes
* We saw that we can populate input using the simplified syntax
```html
<app-component [caption]="myTextSignal()">
```

* We saw how to bind to inputs, outputs and models:

```html
<!-- Assuming value is a writeable signal -->
<app-comp [data]="value()"/>
<app-comp (dataChange)="value.set($event)"/>
<app-comp [(data)]="value">
```

### The `host` property
* We saw that we can bind to expressions not only on template elements but also on the host element itself
* For that, we need to use the `host` property

```typescript
@Component({
    selector: 'app-my-component', 
    template: './my-component.component.html', 
    host: {
        '[style.color]', 'color()'
    }
})
export class MyComponent {
    readonly color = signal('blue');
}

```

* You can use any element property, (`[class.xxx]`, `[style.xxx]` and more that we did not talk about yet);
* You can also bind to events
* You can use expressions that rely on signals
