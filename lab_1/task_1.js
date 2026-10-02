function inc(n) {
    return n + 1;
}
const a = 23;
const b = inc(a);
console.dir({a, b});

//завдання друге
function inc1(num) { // значення inc зайняте
    return num.n++;
}
const myObj = {n: 8};
inc1(myObj);
console.dir(myObj);
