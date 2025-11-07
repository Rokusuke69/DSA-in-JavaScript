function printRightTriangleAlphabets(n) {
    // Write your logic here
    let temp = "";
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=i; j++){
           temp += String.fromCharCode(64 + j) + ' '; 
        }
        temp += "\n"
    }
    console.log(temp)
}

printRightTriangleAlphabets(5);