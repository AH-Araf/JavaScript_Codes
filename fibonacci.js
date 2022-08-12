/* 0,1,1,2,3,5
fibo[8]= fibo[7] + fibo[6];
fibo[n]= fibo[n-1] + fibo[n-2];
*/

const fibo= [0, 1];
for(let i=2; i<=10; i++){
    fibo[i]= fibo[i-1] + fibo[i-2];
}
console.log(fibo);