//Automorphic Number
let number = 76;
let copy = number;
let square = number * number;

let digit = 0;
while (number > 0) {
    digit++;
    number = Math.floor(number / 10);
}
let mod = Math.pow(10, digit);

if (square % mod === copy) {
    console.log(`${copy} is an Automorphic Number`);
} else {
    console.log(`${copy} is not an Automorphic Number`);
}