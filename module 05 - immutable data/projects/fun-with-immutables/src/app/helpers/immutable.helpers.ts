import { Person } from '../models/person.model';

export function without<V>(
  obj: Record<string, V>,
  key: string
): Record<string, V>;
export function without<T extends object, K extends keyof T>(
  obj: T,
  key: K
): Omit<T, K>;
export function without(obj: object, key: string): object {
  const res: any = Object.fromEntries(
    Object.entries(obj).filter((pair) => pair[0] !== key)
  );
  return res;
}

export function addAtStart<T>(items: T[], item: T): T[] {
  return [item, ...items];
}

export function addAt<T>(items: T[], item: T, index: number): T[] {
  return [...items.slice(0, index), item, ...items.slice(index)];
}

export function removeAt<T>(items: T[], index: number): T[] {
  // return [
  //     ...items.slice(0, index),
  //     ...items.slice(index + 1)
  // ]

  return items.filter((_, i) => i !== index);
}

export function removeAll<T>(items: T[], predicate: (t: T) => boolean): T[] {
  return items.filter((t) => !predicate(t));
}

export function replace<T>(items: T[], index: number, newItem: T): T[] {
  return items.map((t, i) => (i === index ? newItem : t));
}

export function update<T>(items: T[], index: number, factory: (t: T) => T): T[] {
    return items.map((t, i) => (i === index ? factory(t) : t));
}

export function updateAll<T>(items: T[], predicate: (t: T) => boolean, project: (t: T) => T): T[] {
    return items.map((t) => (predicate(t) ? project(t) : t));
}

export function order<T>(items: T[], comparer: ((a: T, b: T) => number) | null = null): T[] {
    return comparer ? 
        [...items].sort(comparer) : 
        [...items].sort();
}

export function orderBy<T, K>(items: T[], selector: (val: T) => K, ascending = true) {
    const multiplier = ascending ? 1 : -1

    const comparer = (a: T, b: T) => {
        const valA = selector(a);
        const valB = selector(b);
        return ((valA > valB) ? 1 : -1) * multiplier;
    }

    return [...items].sort(comparer);
}

let p: Person = {
  name: 'John',
  age: 42,
  address: {
    city: 'Haifa',
    state: 'Israel',
  },
};

let q = without(p, 'age');

let r: Record<string, number> = {
  x: 12,
  y: 20,
  z: 30,
};

let r2 = without(r, 'x');

let people: Omit<Person, 'address'>[] = [
    { name: 'Yariv', age: 35 },
    { name: 'Piglet', age: 32 },
    { name: 'Tigger', age: 31 },
    { name: 'Pooh', age: 30 },
    { name: 'Eeyore', age: 38 },
    { name: 'Roo', age: 32 },
    { name: 'Kanga', age: 31 },
    { name: 'Owl', age: 30 },
    { name: 'Christopher Robin', age: 36 },
    { name: 'Heffalumps', age: 37 },
    { name: 'Woozles', age: 38 },
]

let peopleByAge = orderBy(people, p => p.age, false);
let peopleByName = order(people, (p1, p2) => p1.name > p2.name ? 1 : -1);

