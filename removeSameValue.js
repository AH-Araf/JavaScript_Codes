const names= ['araf','taha','nuha','dolan','araf','taha','aklima','mobarak','araf'];
const unique=[];
function removeDup(names){
    for(let i=0; i< names.length; i++){
        const name= names[i];
        if(unique.includes(name)===false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames= removeDup(names);
console.log(uniqueNames);