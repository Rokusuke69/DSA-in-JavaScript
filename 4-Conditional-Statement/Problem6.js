/* Calculate Final Amount After Discount
Write a program that takes an initial amount as input and calculates the final amount after applying a flat discount based on the following conditions:
0-5000 = 0% discount
5001-7000 = 5% discount
7001-9000 = 10% discount
9001 and above = 20% discount
 */

function calculateFinalAmount(initialAmount) {
  let discountRate = 0;

  if (initialAmount > 9000) {
    discountRate = 0.20;
  } else if (initialAmount >= 7001) {
    discountRate = 0.10;
  } else if (initialAmount >= 5001) {
    discountRate = 0.05;
  } // 0–5000 gets 0% discount, so discountRate remains 0

  let discountAmount = initialAmount * discountRate;
  let finalAmount = initialAmount - discountAmount;

  console.log(`Initial Amount: ₹${initialAmount}`);
  console.log(`Discount Applied: ₹${discountAmount}`);
  console.log(`Final Amount: ₹${finalAmount}`);
  return finalAmount;
}

// Example usage:
let amount = 7500;
calculateFinalAmount(amount);