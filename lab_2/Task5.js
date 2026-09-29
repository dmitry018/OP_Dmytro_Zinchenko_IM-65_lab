// 9
const arr = [
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Leonardo DiCaprio', phone: '+380960144823'},
    {name: 'Brad Pitt', phone: '+380983066104'}
];

function findPhoneByName(name) {
    for(item of arr) {
        if (item.name === name)
            return item.phone;
    }
}

console.log('Phone:', findPhoneByName('Marcus Aurelius'));
console.log('Phone:', findPhoneByName('Leonardo DiCaprio'));
console.log('Phone:', findPhoneByName('Brad Pitt'));

// 10
const hush = {'Marcus Aurelius': '+380445554433', 'Leonardo DiCaprio': '+380960144823', 'Brad Pitt': '+380983066104'}
function findPhoneByName1(name) { // реалізувати повторно findPhoneByName(name) не можна, тому що SyntaxError
    return hush[name];
}

console.log('Phone:', findPhoneByName1('Marcus Aurelius'));
console.log('Phone:', findPhoneByName1('Leonardo DiCaprio'));
console.log('Phone:', findPhoneByName1('Brad Pitt'));
