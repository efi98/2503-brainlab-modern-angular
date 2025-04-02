function max(a: number, b: number): number {
    return a > b ? a : b;
}

let c = max(10, 20);

function addOne(a: number): number {
    return a + 1;
}

function addTwo(a: number): number {
    return a + 2;
}

function addX(x: number): ((r: number) => number) {
    return (i: number) => i + x;
}

const addThree = addX(3);
const z = addThree(5);

function doTwice(f: (x: number)=> number, val: number): number {
    let res = val;
    res = f(res);
    res = f(res);
    return res;
}

let x = doTwice(addOne, 5);
let y = doTwice(addTwo, 5);


let arr = [2, 4, 6, 8];
let arr2 = arr.map(x => x * x); 


function select<T, K>(items: T[], projector: (item: T) => K): K[] {
    const res: K[] = [];

    for (const i of items) {
        const projectedValue = projector(i);
        res.push(projectedValue);
    }

    return res;
}