//Problem-1
function radianToDegree(radians){
    if(typeof(radians)==="number"){
    let pi = Math.PI;
    degree= radians * (180/pi);
    let value = degree.toFixed(2);
    value= parseFloat(value);
    return value;
    }
    else{
    return 'Wrong Input';
    }
    }
    const answer = radianToDegree(199);
    console.log(answer);