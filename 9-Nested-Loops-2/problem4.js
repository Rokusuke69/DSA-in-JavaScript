let prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
    // Print leading spaces (2 spaces per missing star for proper alignment)
    for (let j = 1; j <= n; j++) {
        if (i == j || i + j === n + 1) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}
