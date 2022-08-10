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

const heights= [167,45,190,112,1267];
const tallest = maxInArray(heights);
console.group('tallest person is ',tallest);