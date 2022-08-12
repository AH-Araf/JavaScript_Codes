//Problem-2
function isJavaScriptFile(file){
    if(typeof(file)==="string"){
        let value = file.endsWith(".js");
        return value;
    }
    else{
        return "Wrong Input"
    }
}    
const answer = isJavaScriptFile('app.js');
console.log(answer);