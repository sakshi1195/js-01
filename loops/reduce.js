// reduce
 const mynum = [1,2,3,4,5]

//  let total = mynum.reduce( (acc, currentvalue) => {
//     return acc + currentvalue
//  }, 0)

//  console.log(total);
 // by arrow function
 
 let total = mynum.reduce( (acc, currentvalue) =>acc + currentvalue, 0)

 console.log(total);