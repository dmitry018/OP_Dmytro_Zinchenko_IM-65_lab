"use strict";

// 1
function random(min, max) {
    if(max === undefined) {
        max = min;
        min = 0;
    }
return(Math.floor(Math.random() * (max - min + 1) + min));
}

console.log(random(7));
console.log(random(13, 19));

// 2
function generateKey(length, characters) {
    let generatedKey = "";
    for(let i = 1; i <= length; i++) {
        let obj = Math.floor(Math.random() * characters.length);
        generatedKey += characters[obj];
    }
    return(generatedKey);
}

console.log(generateKey(14, "gdfgdfgs56rthrthtrhtrhrt464563463463443rtt"));
