// for eah loop
const coading = ["js", "react", "java", "py", "cpp"]

// coading.forEach( (item) => {
//     console.log(item);
    
// })

// foreach loop on existiong function

// function param (item) {
//     console.log(item)
// }

// coading.forEach( param)
  
// for each loop in array of object
const languages = [
    {
        firstlang : "javascript",
        filename: "js"
    },
    {
        firstlang : "java",
        filename: "java"
    },
    {
        firstlang : "python",
        filename: "py"
    }
]

languages.forEach((val) => {
    console.log(val.firstlang)
})