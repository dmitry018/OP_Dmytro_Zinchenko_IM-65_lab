// 5
'use strict';

const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const max = (arg) => {
    let max = 0;
    for (let item of m) {
        for(let row of item) {
            if (row > max) {
                max = row;
            }
        }    
    }
    return max;
}

console.log(max());
