//Checks whether a number is even or odd:

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage:
let inputNumber = 15;
let result = checkEvenOrOdd(inputNumber);
console.log("The number is:", result);