function maxInArray(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length;i++){
    const index = i;
    const element = numbers[index];
     if(element>largest){
         largest=element;
        }
    }
    return largest;
}

const a= [167,45,190,112,1267];
// const tallest = maxInArray(a);
console.log('tallest person is ',maxInArray(a));