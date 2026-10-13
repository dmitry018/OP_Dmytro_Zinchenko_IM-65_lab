"use strict";

// 3
function ipFunc(ip = "127.0.0.1") {
let ipArr = ip.split(".");
ipArr = ipArr.map(Number);

let newArr = [
ipArr[0] << 8 << 8 << 8,
ipArr[1] << 8 << 8,
ipArr[2] << 8,
ipArr[3]
];

let optimized = newArr.reduce((sum, element) => sum + element, 0);
return console.log(optimized);
}

ipFunc();
