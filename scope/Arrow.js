const one = (num) => {
    return num +1
}

const data = {
    username : "sakshi",
    id : 22,
    website : function () {
        return ` ${this.username}, welocome to website`
       
    }

}
//console.log(data)

// const insta = function(){
//     let username = "sakshi"
//     console.log(this.username)

// }
//insta()
const insta = () => {
    let username = "sakshi"
    console.log(this);

}
insta()
