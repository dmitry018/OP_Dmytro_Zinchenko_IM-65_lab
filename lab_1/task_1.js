function inc(n) {
    return n + 1;
}
const a = 23;
const b = inc(a);
console.dir({a, b});

// завдання друге
function incObj(obj) {
obj.n++;
}
const myObj = {n: 8};
incObj(myObj);
console.dir(myObj);
