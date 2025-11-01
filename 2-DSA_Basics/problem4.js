//Swap 2 variables using 3 methods

//Method 1: Using a temporary variable
let a = 5;
let b = 10;
console.log("Before swapping: a =", a, ", b =", b);
let temp = a;
a = b;
b = temp;
console.log("After swapping using temporary variable: a =", a, ", b =", b);

//Method 2: Using arithmetic operations
a = 5;
b = 10;
console.log("Before swapping: a =", a, ", b =", b);
a = a + b; // a now becomes 15
b = a - b; // b becomes 5
a = a - b; // a becomes 10
console.log("After swapping using arithmetic operations: a =", a, ", b =", b);

//Method 3: Using destructuring assignment
a = 5;
b = 10;
console.log("Before swapping: a =", a, ", b =", b);
[a , b] = [b, a];
console.log("After swapping using destructuring assignment: a =", a, ", b =", b);