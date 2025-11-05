//Strong number or not

let number = 145;
let copy = number;
let sum = 0;

while (number > 0) {
    let digit = number % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }
    sum += fact;
    number = Math.floor(number / 10);
}

if (sum === copy) {
    console.log(`${copy} is a Strong Number`);
} else {
    console.log(`${copy} is not a Strong Number`);
}