export type MySignal<T> = () => T;

export type WriteableMySignal<T> = MySignal<T> & {
    set: (v: T) => void;
    update: (f: (oldValue: T) => T) => void;
    asReadonly: () => MySignal<T>
};

export function mySignal<T>(value: T): MySignal<T> {
    let res: any = () => value;
    res.set = (v: T) => value = v;
    res.update = (f: (oldValue: T) => T) => value = f(value);
    res.asReadonly = () => (() => value);

    return res;
}