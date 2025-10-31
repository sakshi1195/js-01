const info = {
    fullname : {
        name : "sakshi",
        lastname: "panchal"
    },
    age : 20,
    address: "pune"
}

// console.log(info)
// console.log(info.fullname.name);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//  console.log(obj1, obj2);

// const obj3 = {...obj1, ...obj2}
//  //const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const insta = {
    id : 1,
    username : "sakshi",
    isActive : true
}

// console.log(insta);
// console.log(Object.keys(insta));
// console.log(Object.values(insta));
// console.log(Object.entries(insta));

// Destructuring of object

console.log(insta.username);
const {username: uname} = insta
console.log(username);
console.log(uname);
   
