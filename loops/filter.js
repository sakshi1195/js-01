const mynum = [1,2,3,4,5,6,7,8,9]

// let newnum = mynum.filter( (num) => num>4)
// console.log(newnum);
let newnum = mynum.filter( (num) => {
 return num > 4 
})
console.log(newnum);

const bts = [
    {
        name : "v",
        dob: 1995,
        main: "vocal"
    },
    {
        name : "jk",
        dob: 1997,
        main: "vocal"
    },
    {
        name : "jimin",
        dob: 1995,
        main: "vocal"
    },
    {
        name : "rm",
        dob: 1996,
        main: "rapper"
    },
    {
        name : "jin",
        dob: 1993,
        main: "vocal"
    },
    {
        name : "suga",
        dob: 1994,
        main: "rapper"
    },
    {
        name : "jhope",
        dob: 1994,
        main: "rapper"
    },
]

let info = bts.filter( (mem) => mem.main == "vocal")
 let info2 = bts.filter( (mem) => {
    return mem.dob >= 1995 && mem.main === "rapper" 
 })
console.log(info);
console.log(info2);