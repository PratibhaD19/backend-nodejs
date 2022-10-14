// //- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler


function trim1(){
 let word ="    functionup       " 
 return (word.trim())  
}

function lower(){
    let name="PRATIBHA"
    return name.toLowerCase()
}
function upper(){
    let name="vedangi"
    return name.toUpperCase()
}


module.exports.myTrim=trim1
module.exports.myLower= lower
module.exports.myUpper=upper