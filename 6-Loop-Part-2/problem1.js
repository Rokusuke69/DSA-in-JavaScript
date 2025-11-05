//calcullate power of a number using loop

let base = 2;
let exponent = 5;
let result = 1;
for (let i = 0; i < exponent; i++) {
    result *= base;

}
console.log(`${base} raised to the power of ${exponent} is ${result}`);