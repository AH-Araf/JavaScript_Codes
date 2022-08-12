//Problem-4
function publicBusFare(total){
    if(typeof total != "number"){
        return "Wrong Input"
    }
    else{
        
        value= (((total%50)%11)*250);
        return value;
    }
}   
const answer = publicBusFare(55);
console.log(answer);