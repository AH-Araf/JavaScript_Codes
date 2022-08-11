//we cant use "typeof" for searching a array
const num=[12,45,56,78,89,90];
const num1=4;
console.log(Array.isArray(num));
console.log(Array.isArray(num1));
console.log(num.includes(90)); //for find value in array
console.log(num.includes(561));

const ar=[11,77,44,99];
const addArray= num.concat(ar);
console.log(addArray);