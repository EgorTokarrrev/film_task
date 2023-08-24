const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // копирование массива

newArray[1] = 'aaa';

console.log(oldArray);
console.log(newArray);


const   video = ['youtube', 'vimeo', 'rutube'], // спрэд оператор
        blogs = ['wordpress', 'livejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) { // применение спрэд оператора
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const arr = ['a', 'b']; // копирование массива спрэд оператором
const newArr = [...arr];
console.log(newArr);

const q = { // копирование объекта спрэд оператором
    one: 1,
    two: 2
};

const newQ = {...q};
console.log(newQ);