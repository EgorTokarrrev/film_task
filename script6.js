function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

let k = 10;
let n = 200;
let a = Math.floor(Math.random() * (n - k + 1) + k);

let numbers = {
    
    a: a,
    b: "second",
    c: {
        x: 7,
        y: 4
    }
}; 

const newNumbers = copy(numbers);
newNumbers.a = Math.floor(Math.random() * (n - k + 1) + k);

console.log(numbers,"  and copy:  ", newNumbers);