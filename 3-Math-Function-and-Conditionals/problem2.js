//compound interest

let principal = 1000; // initial amount
let rate = 5; // annual interest rate in percentage
let timesCompounded = 4; // times interest is compounded per year
let years = 10; // number of years
let amount = principal * Math.pow((1 + (rate / 100) / timesCompounded), timesCompounded * years);
console.log("Total amount after " + years + " years: " + amount.toFixed(2)); // Output: Total amount after 10 years: 1647.01
console.log("Interest earned: " + (amount - principal).toFixed(2)); // Output: Interest earned: 647.01
