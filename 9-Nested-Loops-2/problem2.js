let prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
    // Print leading spaces (2 spaces per missing star for proper alignment)
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ");
    }

    // Print stars
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    console.log();
}
