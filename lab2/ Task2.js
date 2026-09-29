function range(start, end) {
    let results = [];
    for (let i = start; i <= end; i++) {
        results.push(i);
    }
    console.log(results);
}

range(15, 30); // 4

function rangeOdd(start, end) {
    let results = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 1)
        results.push(i);
    }
    console.log(results);
}

rangeOdd(15, 30); // 5
