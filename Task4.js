// 7
function fn() {
    const obj1 = {name: 'Dmytro'};
    let obj2 = {name: 'Dmytro'};
    
    obj1.name = 'Oleksii';
    obj2.name = 'Oleksii';
    
    console.log(obj1.name);
    console.log(obj2.name);

    //obj1 = {name: Vlad};
    // const забороняє перепризначити посилання, тому typeError. Але поля об'єкта змінювати можна
    
    obj2 = {name: 'Vlad'};

    console.log(obj1);
    console.log(obj2);
}

fn();

// 8
function createUser(name, city) {
    return {name: name, city: city};
}

const obj = createUser('Marcus Aurelius', 'Roma');
console.log(obj);
