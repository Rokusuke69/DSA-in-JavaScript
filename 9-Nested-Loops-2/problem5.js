let prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2 - 1; j++) {
        if (j === i || j === (n * 2 - i)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}