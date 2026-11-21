'use strict';

function seq(...args) {
    const functions = [...args];

    return function next(arg) {

        if (typeof arg === "function") {
            functions.push(arg);
            return next;
        }

        if (typeof arg === "number") {
            let result = arg;

            for (let i = functions.length - 1; i >= 0; i--) {
                result = functions[i](result);
            }
            
            return result;
        }
    }
}

console.log(
    seq(x => x + 7)
       (x => x * 2)(5));

console.log(
    seq(x => x * 2)
       (x => x + 7)(5));

console.log(
    seq(x => x + 1)
       (x => x * 2)
       (x => x / 3)
       (x => x - 4)(7));
