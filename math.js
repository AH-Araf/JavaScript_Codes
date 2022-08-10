const result = Math.pow(3, 3);
console.log(result);

const num1 =2556;
const num2 =459;
const gap = Math.abs(num2 - num1); //Math.abs used for remove "-" value
console.log(gap);

if(gap < 5){
    console.log('Match');
}
else{
    console.log('Not match');
}


//=================================================================================
const number = 2.786;
const fullNumber = Math.round(number);
console.log(fullNumber)

const number1 = 2.456;
const fullNumber1 = Math.round(number1);
console.log(fullNumber1)


const number2 = 5.000001;
const fullNumber2 = Math.ceil(number2);
console.log(fullNumber2)

const number3 = 5.99999;
const fullNumber3 = Math.floor(number3);
console.log(fullNumber3)