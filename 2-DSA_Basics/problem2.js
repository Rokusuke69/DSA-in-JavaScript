//string + string = string (concatenation)
//string + number = string (concatenation)
//number + string = string (concatenation)
//number + number = number (addition)
console.log("5" + 10); //510
console.log(5 + "10"); //510
console.log(5 + 10); //15
console.log("5" + "10"); //510
console.log(typeof ("5" + 10)); //string
console.log(typeof (5 + "10")); //string
console.log(typeof (5 + 10)); //number
console.log(typeof ("5" + "10")); //string
//string - string = number (subtraction after conversion (type coercion))
//string - number = number (subtraction after conversion)
//number - string = number (subtraction after conversion)
//number - number = number (subtraction)
console.log("5" - 2); //3
console.log("5" - "2"); //3
console.log(5 - "2"); //3
console.log(5 - 2); //3
console.log(typeof ("5" - 2)); //number
console.log(typeof ("5" - "2")); //number
console.log(typeof (5 - "2")); //number
console.log(typeof (5 - 2)); //number
//string * string = number (multiplication after conversion)
//string * number = number (multiplication after conversion)
//number * string = number (multiplication after conversion)
//number * number = number (multiplication)
console.log("5" * 2); //10
console.log("5" * "2"); //10
console.log(5 * "2"); //10
console.log(5 * 2); //10
console.log(typeof ("5" * 2)); //number
console.log(typeof ("5" * "2")); //number
console.log(typeof (5 * "2")); //number
console.log(typeof (5 * 2)); //number

//type for all the operations except + operator.