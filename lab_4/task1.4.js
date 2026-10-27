// 4
'use strict';

const sum = (...args) => {
    let result = 0;
    let i = 0;
    if (args.length === 0) // оскільки цикл спочатку не перевіряє, що 0 < 0 - false, то потрібна додаткова перевірка при порожному циклі
        return 0;
    do {
        result += args[i];
        i++;
    }
    while (i < args.length);
    return result;
    }

console.log(sum());
