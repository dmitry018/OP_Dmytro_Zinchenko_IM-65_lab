// 6
'use strict';

const persons = {
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
}

for (const item in persons) {
    let age = {};
    age = persons[item].died - persons[item].born;
    console.log(item, age);
} 
