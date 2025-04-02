# Module 06 - NgRx Signal store - Getting Started
## Projects:
|     |     |
| --- | --- |
| [Fun with Signal Store](./projects/fun-with-signal-store/) | The very basics of the signal store |


### Overview
- Signal store is a library that allows us to create injectable services that manage state using signals
- The state is stored as one big signal, along with specific signals for each property and sub property
- The signal store architecture is based on functional programming concepts

### Installation
- We rely on the `ngrx/signals` package which we install using npm
- We then define a `store` folder for each signal store we want to use
- We use the `signalStore` function to create a new signal store

### Features
- Each signal store is built using "features" that fill it with data and logic
- Each feature is a method that uses the total sum of previous features and add more functionality to the store
- The `withState` feature adds state signals
- The `withComputed` feature adds computed signals
- The `withMethods` feature adds methods 
- The `withHooks` feature adds init and destroy lifecycle hooks

### Reading and modifying the state
- Use `getState` to get the entire state as one big signal
- Alternatively, for each property of the state, there is a dedicated property returning a signal of that specific slice of the state
- Use `patchState` to modify the state of the entire store
    - `patchState` has to receive the store as first parameter
    - The rest of the parameters are **updaters**
    - Updater is either an object that is a pratial of the state, or a function that takes the previous state and returns a partial of the state
    - In algebric notation, updater is:

```typesript
type PartialStateUpdater<Slice> = Partial<Slice> 
                        | (s: Slice) => Partial<Slice>
```

So, assuming the state is of shape: {x: number, y: number}
these are all valid calls to `patchState`:

```typescript
patchState(store, {x: 10});
patchState(store, state => {x: state.x + 1});
patchState(store, {x: 5, y: 5});
patchState(store, {x: 5}, state => {y: state.y + 1})
```

### Providing the store
You can provide the store in any providers array, either in the `app.config` file or in any component. Just like you would any service.

Additionaly, you can set the store to be provided in the root injector using the configuration:

```typescript
const MyStore = signalStore(
    {providedIn: 'root'}, 
    withState(initialState)
)
```

### Signal Store and injection context
As you have seen, all the "feature" functions (`withComputed`, `withMethods`, `withHooks`) receive a function that creates a collection of key value pairs. 

>**These functions are all executed in injection context**

That means that you can use the `inject` function inside these functions.

in `withComputed`: 
```typescript
const MyStore = signalStore(
    withState(initialState), 
    withComputed(store => {
        const service = inject(ServiceWithSignals);
        return {
            mix: computed(() => store.myData() + service.hisData())
        }
    })
)
```

in `withMethods`: 
```typescript
const MyStore = signalStore(
    withState(initialState), 
    withMethods(store => {
        const service = inject(ServiceWithSignals);
        return {
            callOtherService: (val: number) => {
                const res = service.saveValue(val);
                patchState(store, {result: res});
            }
        }
    })
)
```


### Using Hooks
One of the interesting possibilities in signal store is to plant initialization and cleanup logics using the `withHooks` feature.

```typescript
    const MyStore = signalStore(
        withState(initialState), 
        withHooks(store => ({
            onInit: () => {
                // init logic
            }
            onDestroy: () => {
                // cleanup logic
            }
        }))
    )
```

- The Hooks method is called in injection context, so you can use `inject`.
- Note that the hooks method is a **function**. So if you want to share variables between the init and the destroy hooks, you can define the variable in the function scope:

```typescript
    const MyStore = signalStore(
        withState(initialState), 
        withHooks(store => {
            const service = inject(MyService);
            let i!: number;
            return {
                onInit: () => {
                    // init logic
                    i = service.initSomething();
                }
                onDestroy: () => {
                    // cleanup logic
                    service.cleanSomething(i);
                }
            }
        })
    )
```
