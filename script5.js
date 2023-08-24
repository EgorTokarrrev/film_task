function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}; 

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log("Первый объект ", numbers,"  его копия:  ", newNumbers); 

const add = { 
    d: 17,
    e: 20
}

console.log("Добавление объекта с поверхностной копией  ", Object.assign(numbers, add)); // добавление объекта с поверхностной копией
console.log("Добавление в пустой объект  ", Object.assign({}, add)); // добавление объекта в пустой объект 

const clone = Object.assign({}, add); 

clone.d = 20;
console.log("Изменение в скопированном объекте в пустой  ", clone);