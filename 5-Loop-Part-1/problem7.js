// Check if a number is prime

let n = 1;
let isPrime = true;

// Handle edge case first
if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(n + " is a prime number");
} else {
    console.log(n + " is not a prime number");
}