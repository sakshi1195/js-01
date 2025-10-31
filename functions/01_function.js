function addition(num1, num2) {
 return num1 + num2
}
const result = addition(22, 20)
console.log(result);

function isloggedIn(username){
    return `${username} is just logged in`
}
console.log(isloggedIn("sakshi"));

// functions by using object

const data = {
    name : "sakshi",
    email: "ss@gamil.com",
    isActive: true
}

function getdata(username){
    return `${username.name} is logged in and the staus is ${username.isActive}`
}

console.log(getdata(data))

// functions using array

const myArr = [100, 400, 600, 200]

function calculatevalue(getvalue){
    return getvalue[2]
}

console.log(calculatevalue(myArr));
