//Accepts two numbers and returns the greatest of the two.

function findGreatest(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Both numbers are equal";
  }
}

// Example usage:
let number1 = 42;
let number2 = 27;
let greatest = findGreatest(number1, number2);
console.log("The greatest number is:", greatest);