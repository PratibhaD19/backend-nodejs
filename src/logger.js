const url = "https://www.google.com"

let printSomething = function() {
    console.log("Request details are - a, b, c")
    return "done"
}

//- welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Plutonium cohort.’ on console
//Call welcome in route.js inside the test-me handler

let name="pratibha"
let welcome=function(){
    console.log (`Welcome to my application. I am ${name} and a part of FunctionUp Plutonium cohort.`)
    return "hogaya"
}
//welcome("pratibha")




module.exports.myUrl = url
module.exports.myFunction = printSomething
module.exports.myWelcome=welcome
