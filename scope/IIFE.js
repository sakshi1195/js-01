// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log("db connected")
})();

((name) => {
    console.log(`db connected 2 , ${name}`)
})("sakshi")
