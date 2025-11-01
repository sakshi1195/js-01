//const useremail = "ss@gg.com"
const useremail = []

if(useremail){
    console.log(`got email`);
    
} else{
    console.log(`not have email`);
    
}
//falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NAN

// truthy value
// "0", 'false', " ", [], {}, function(){}

if(useremail.length === 0){
    console.log(`array is empty`);
    
}

const obj = {}

if(Object.keys(obj).length === 0){
    console.log(`object is empty`);
    
}
// nullish coalecing operator (??): null undefined
let val1;
val1 = 5 ?? 10 ;  // o/p will be 5
val1 = null ?? 10 // o/p will be 10
val1 = undefined ?? 10 // o/p will be 10
val1 = null ?? 10 ?? 20 // o/p will be 10