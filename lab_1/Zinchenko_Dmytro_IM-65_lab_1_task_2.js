const array = [23, 63, 12, true, 'Word', 'List', false, true, 234, 2.71, false, true, 23, 'World', 'Time'];
const obj = {number: 0, boolean: 0, string: 0};

for(const item of array) {
    const type = typeof item;

obj[type]++;
}

console.dir(obj);

// без ключів
const dynamicObj = {};

for(const item1 of array) {
    const type1 = typeof item1;

    if (dynamicObj[type1] === undefined)
        dynamicObj[type1] = 1;
    else
        dynamicObj[type1]++;
}

console.dir(dynamicObj);
