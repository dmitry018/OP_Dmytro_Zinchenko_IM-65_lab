'use strict';

const pipe = (...fns) => {
    for(const fn of fns) {
        if(typeof fn !== "function") {
            throw new TypeError("Argument needs to be function");
        }        
    }
    return x => {
        return fns.reduce((result, fn) => fn(result), x);
    }
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = pipe(inc, twice, cube);
console.log(f(5));

const f1 = pipe(inc, inc);
console.log(f1(5));

try {
    const f2 = pipe(inc, 7, cube);
    console.log(f2(5));
} 
catch (error) {
    console.log("Помилка:", error.message);
}
