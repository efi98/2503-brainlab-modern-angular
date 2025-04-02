# Module 05 - Component Immutable Data types

## Projects:
|     |     |
| --- | --- |
| [Fun with Immutables](./projects/fun-with-immutables/) | Understanding immutable data manipulation |

## Summary

### Motivation
* We tested signal effects and found that when we do not change the signal value, the effect does not run
* We saw that with objects and array, "changing the value" means creating a new instance
  * The signal only compares the reference
  * It does not compare the value
* The signal only "shallow" compares the previous value to the new one, so if the reference did not change, it does not detect the change
* We therefore need to work with **immutable data types**


### Immutable data types
* We talked about working with immutable data types
* We saw how to create them using `readonly` properties on interfaces
* We saw why it is important to use interfaces and not classes
* 
* We saw how to "modify" and immutable object
    - how to copy values from source
    - how to give new values to specific properties
```typescript
const obj2 = {
    ...obj1, 
    name: 'Changed'
}
```
* We saw how to "modify" immutable arrays
    - how to add values before and after the array
    ```typescript
    const ar1 = [1, 2, 3];
    const ar2 = [0, ...ar1, 4, 5];
    ```
    - how to replace specific item
    ```typescript
    const ar1 = [2, 4, 6, 8];
    const ar2 = ar1.map(i => (i === 4) ? 4.5 : i);
    ```
    - how to remove specific item
    ```typescript
    const ar1 = [2, 4, 5, 6, 8];
    const ar2 = ar1.filter(i => i !== 5);
    ```
    - how to replace item at specific index
    ```typescript
    const ar1 = [2, 4, 5, 8, 10];
    const ar2 = ar1.map((i, index) => index === 2 ? 6 : i)
    ```
    - how to delete at index
    ```typescript
    const ar1 = [2, 4, 5, 6, 8, 10];
    const ar2 = ar1.filter((i, index) => index !== 2);
    ```
* We saw that when we have signals of reference type values (objects and arrays), if we mutate the object, the signal does not fire
* We saw that when we use immutable types, the signals do fire
* We understood why it is much more performant, to use immutable types in angular, despite the overhead of copying the data

### Pure array functions and operators

#### 1. The `...` (spread) operator.
We use this operator to list array values in another array

```javascript
const a1 = [1, 2, 3, 4];
const a2 = [...a1, 5];
// a2 is [1, 2, 3, 4, 5]

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

const arr3 = [...arr1, ...arr2];
// arr3 is now [0, 1, 2, 3, 4, 5]

```

#### 2. The `slice` operator
We use it to get a copy of an array slice

##### Syntax
```javascript
slice()
slice(start)
slice(start, end)
```

##### Example
```javascript
const a1 = [2, 4, 6, 8, 10];
const a2 = a1.slice(1, 3); // [4, 6]
    
```

#### 3. The `map` operator
creates a new array populated with the results of calling a provided function on every element in the calling array.


##### Syntax
```javascript
T[].map<T, K>(fn: (item: T, index: number) => K): K[]
```

##### Example
```javascript
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

```

#### 4. The `filter` operator
creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

##### Syntax
```javascript
T[].filter<T>(fn: (item: T, index: number) => boolean): T[]
```

##### Example
```javascript
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

```
