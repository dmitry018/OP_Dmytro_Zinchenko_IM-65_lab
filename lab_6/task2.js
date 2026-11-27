'use strict';

const compose = (...fns) => {
    const handlers = [];

    const composed = (x) => {
        try {
            return fns.reduceRight((acc, fn) => {
                return fn(acc);
            }, x);

        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }

            return undefined;
        }
    }

    composed.on = (name, handler) => {
        if (name === 'error' && typeof handler === 'function') {
            handlers.push(handler);
        }
    }

    return composed;
}

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);

console.log(f(5));
