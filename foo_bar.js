/**
   1. show output from 1-50
   2. if number divisible by 3 then insted of the number show 'foo'
   3. if number divisible by 3 then insted of the number show 'bar'
   4. if number divisible by 3 and 5 then insted of the number show 'foobar'
 */

   for(let i=0; i<=50;i++){
    if(i % 3 ===0 && i % 5 ===0){
        console.log('foobar');
    }
    else if(i % 3 ===0){
        console.log('foo');
    }
    else if(i % 5 ===0){
        console.log('bar');
    }
    
    else{
        console.log(i);
    }
    
   }