//Sum of even and odd number in a range seerately

let n = 10;
let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= n; i++){
    if (i % 2 === 0){
        evenSum += i;
    } else {
        oddSum += i;
    }
}

console.log("Sum of even numbers is: " + evenSum);
console.log("Sum of odd numbers is: " + oddSum);