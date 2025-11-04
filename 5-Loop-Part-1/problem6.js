//Factors of a number

let n = 13;

for (let i = 1; i <= n/2; i++){
    if (n % i === 0){
        console.log(i);
    }else{
        continue;
    }
}
console.log(n); //n is also a factor