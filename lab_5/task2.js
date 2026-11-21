'use strict';

function array() {
    const data = [];

    function get(index) {
        return data[index];
    }
        get.push = function(value) {
            return data.push(value);
            
        }
        get.pop = function() {
            return data.pop();
        }
        return get;
}
const a = array();

a.push("first");
a.push("Second");
a.push("Third");


console.log(a(0));
console.log(a(1));
console.log(a(2));

console.log(a.pop());
console.log(a.pop());
console.log(a.pop());

console.log(a.pop());
