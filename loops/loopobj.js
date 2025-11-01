//loops in object
// you can apply forof loop in Array
// and forin loop in object

const myobj ={
    jk : "jungkook",
    v: "Taehyung",
    rm: "Namjoon"
}

for (const mem in myobj) {
    console.log(`${mem} is nickname of ${myobj[mem]}`);
    
    
    
}