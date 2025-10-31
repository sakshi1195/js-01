const mysuym = Symbol["key1"]

const jsUser = {
    name : "sakshi",
    age :18,
    email : "ss@googgle.com",
    mysuym : "key33"
}

//console.log(typeof jsUser.mysuym);
//console.log(typeof jsUser[mysuym]);
// console.log(jsUser);

jsUser.greeting = function(){
console.log(`hello js user`);
}
jsUser.greetingstwo = function(){
console.log(`hello js user , ${this.age}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingstwo());




