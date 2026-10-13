"use strict"

// 4
const iface = {
    m1: x => [x],
    m2: (x, y) => [x, y],
    m3: (x, y, z) => [x, y, z],
}

const result = [];

for (let key of Object.keys(iface)) {
        result.push([key, iface[key].length]);
    }

for (let item of result) {
    console.log(item);
}
