// 6
function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function calculate() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = []
    for (item of arr) {
        const squar = square(item);
        const cub = cube(item);
        result.push(average(squar, cub));
    }
    return result;
}

console.log(calculate());