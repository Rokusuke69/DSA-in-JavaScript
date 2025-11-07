function printInvertedRightTriangle(n) {
    // Write your logic here
    let pattern = "";
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=n-i+1; j++){
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern)
}

printInvertedRightTriangle(5);