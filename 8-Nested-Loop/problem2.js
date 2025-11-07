let rows = 5;
let temp = 5

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // print stars for n number of times in each row
   for (let num = 1; num <= temp; num++) {
      pattern += "* ";
   }
   pattern += "\n";
   temp--;
}
process.stdout.write(pattern);