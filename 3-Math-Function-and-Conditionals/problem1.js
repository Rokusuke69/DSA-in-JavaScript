//Math Functions

//Math.round()
console.log(Math.round(4.6)); // Output: 5
console.log(Math.round(4.4)); // Output: 4

//Math.ceil()
console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.ceil(4.9)); // Output: 5
console.log(Math.ceil(-4.1)); // Output: -4
console.log(Math.ceil(-4.9)); // Output: -4

//Math.floor()
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.floor(4.1)); // Output: 4
console.log(Math.floor(-4.1)); // Output: -5
console.log(Math.floor(-4.9)); // Output: -5

//Math.trunc()
console.log(Math.trunc(4.9)); // Output: 4
console.log(Math.trunc(4.1)); // Output: 4
console.log(Math.trunc(-4.1)); // Output: -4
console.log(Math.trunc(-4.9)); // Output: -4

//Math.pow()
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.pow(5, 2)); // Output: 25

//Math.sqrt()
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(25)); // Output: 5
console.log(Math.sqrt(2)); // Output: 1.4142135623730951

//Math.cbrt()
console.log(Math.cbrt(27)); // Output: 3
console.log(Math.cbrt(8)); // Output: 2
console.log(Math.cbrt(2)); // Output: 1.2599210498948732

//Math.abs()
console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(5)); // Output: 5
console.log(Math.abs(-3.7)); // Output: 3.7
console.log(Math.abs(3.7)); // Output: 3.7

//Math.max()
console.log(Math.max(1, 5, 3, 9, 2)); // Output: 9
console.log(Math.max(-1, -5, -3, -9, -2)); // Output: -1

//Math.min()
console.log(Math.min(1, 5, 3, 9, 2)); // Output: 1
console.log(Math.min(-1, -5, -3, -9, -2)); // Output: -9

//Math.random()
console.log(Math.random()); // Output: A random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10); // Output: A random number between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random() * 10)); // Output: A random integer between 0 and 9 (inclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Output: A random integer between 1 and 10 (inclusive)

//toFixed()
let num = 5.6789;
console.log(num.toFixed(2)); // Output: "5.68"
console.log(num.toFixed(0)); // Output: "6"
console.log(num.toFixed(4)); // Output: "5.6789"
console.log(num.toFixed(6)); // Output: "5.678900"

