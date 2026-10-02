const array = [23, 63, 12, true, 'Word', 'List', false, true, 234, 2.71, false, true, 23, 'World', 'Time'];
const obj = {number: 0, boolean: 0, string: 0};

for(const item of array) {
    const type = typeof item;
obj[type]++;
}

console.dir(obj);

// без ключів
const dynamicObj = {};

for(const item of array) {
    const type = typeof item;
    if (dynamicObj[type] === undefined)
        dynamicObj[type] = 1;
    else
        dynamicObj[type]++;
}

console.dir(dynamicObj);
