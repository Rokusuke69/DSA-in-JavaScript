//Operators in JavaScript

//Arithmetic Operators
let a = 10;
let b = 3;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation
console.log("++a =", ++a); // Pre-increment
console.log("--b =", --b); // Pre-decrement

//Comparison Operators
let x = 5;
let y = '5';
console.log("x == y:", x == y); // Equality
console.log("x === y:", x === y); // Strict Equality
console.log("x != y:", x != y); // Inequality
console.log("x !== y:", x !== y); // Strict Inequality
console.log("x > 3:", x > 3); // Greater than
console.log("x < 10:", x < 10); // Less than
console.log("x >= 5:", x >= 5); // Greater than or equal to
console.log("x <= 4:", x <= 4); // Less than or equal to

//Logical Operators
let p = true;
let q = false;
console.log("p && q:", p && q); // Logical AND
console.log("p || q:", p || q); // Logical OR
console.log("!p:", !p); // Logical NOT

//Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log("c after += 5:", c);
c -= 3; // c = c - 3
console.log("c after -= 3:", c);
c *= 2; // c = c * 2
console.log("c after *= 2:", c);
c /= 4; // c = c / 4
console.log("c after /= 4:", c);
c %= 3; // c = c % 3
console.log("c after %= 3:", c);
c **= 2; // c = c ** 2
console.log("c after **= 2:", c);
//Demonstrating operator precedence
let result = 10 + 5 * 2 - (8 / 4) ** 2;
console.log("Result of 10 + 5 * 2 - (8 / 4) ** 2 =", result);
//Explanation: Multiplication and division have higher precedence than addition and subtraction. Parentheses have the highest precedence.
//So, the expression is evaluated as:
//= 10 + (5 * 2) - ((8 / 4) ** 2)
//= 10 + 10 - (2 ** 2)
//= 10 + 10 - 4
//= 20 - 4
//= 16
console.log("Final Result:", result);