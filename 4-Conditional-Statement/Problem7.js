/* 
Calculate Electricity Bill Based on Units Consumed
Write a program that takes the number of electricity units consumed as input and calculates the final electricity bill based on the following conditions:
0-100 units = ₹4.2 per unit
101-200 units = ₹6.00 per unit
201-400 units = ₹8.00 per unit
401 units and above = ₹13.00 per unit
*/

function calculateElectricityBill(units) {
  let rate;

  if (units <= 100) {
    rate = 4.2;
  } else if (units <= 200) {
    rate = 6;
  } else if (units <= 400) {
    rate = 8;
  } else {
    rate = 13;
  }

  let totalBill = units * rate;
  console.log(`Units Consumed: ${units}`);
  console.log(`Rate Applied: Rs. ${rate} per unit`);
  console.log(`Total Bill: Rs. ${totalBill.toFixed(2)}`);
  return totalBill;
}

// Example usage:
let consumedUnits = 250;
calculateElectricityBill(consumedUnits);