//Problem-5
function isBestFriend(friend1,friend2){
    if(typeof(friend1)==="object" && typeof(friend2)==="object"){
        if(friend1.name == friend2.friend && friend1.friend == friend2.name){
            return true;
         }
        else{
            return false;
        }
    }
    else{
        return "Please Enter Object"
    }
}
const friend1={name: 'abul', friend: 'babul'};
const friend2={name: 'babul', friend: 'abul'};
const friends= isBestFriend(friend1, friend2);
console.log(friends);
