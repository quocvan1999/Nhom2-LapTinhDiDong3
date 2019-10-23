var n = 4;
var ikq = 1;
var fibo0 = 1;
var fibo1 = 1;


console.log('Ket qua day fibonaci: ')
console.log(fibo0);
console.log(fibo1);

for (let f = 2; f < n; f++) {
    fibo0 = fibo1;
    fibo1 = ikq;
    ikq = fibo0 + fibo1;
    console.log(ikq);
}