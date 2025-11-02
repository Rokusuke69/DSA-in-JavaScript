//Takes three integers and prints the greatest among them—even if two or more are equal and the largest.

function findGreatestOfThree(num1, num2, num3) {
  let greatest;

  if (num1 >= num2 && num1 >= num3) {
    greatest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    greatest = num2;
  } else {
    greatest = num3;
  }

  console.log("The greatest number is:", greatest);
  return greatest;
}

// Example usage:
let a = 42;
let b = 42;
let c = 17;
findGreatestOfThree(a, b, c);