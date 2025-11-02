//Checks whether a given year is a leap year.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

// Example usage:
let inputYear = 2024;
let result = isLeapYear(inputYear);
console.log(result);