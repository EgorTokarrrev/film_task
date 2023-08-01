let k = 10;
let n = 200;
let a = Math.floor(Math.random() * (n - k + 1) + k);
let b = Math.floor(Math.random() * (n - k + 1) + k);
let c = Math.floor(Math.random() * (n - k + 1) + k);
let d = Math.floor(Math.random() * (n - k + 1) + k);

function findMaxOfNumber(a, b, c, d) {

    if (typeof(a) !== 'number' ||
typeof(b) !== 'number' ||
typeof(c) !== 'number' ||
typeof(d) !== 'number') {
 return 0;

} 
else {
 return Math.max(a, b, c, d)
}
}
let m = findMaxOfNumber(a, b, c ,d);

console.log(a,b,c,d, " Biggest: "+ m);
