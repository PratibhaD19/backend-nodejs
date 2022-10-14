// //
// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’

// 	Call all these functions in route.js inside the test-me route handler

function timing() {
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()+1
    console.log(`today date is ${day}`);
    console.log(`current month are ${month}`);
    return "time bhi set ho gya"
}
//timing()

//=====================================================================================================

function getBatchInfo() {
    let batch = "Lithium ";
    let week = "W3D5";
    let topic = "Nodejs module system."
    console.log(`batch name is${batch} i completed ${week} and the topic for today is ${topic}`)
    return "batch bhi aa gai"
} 

module.exports.getBatch = getBatchInfo
module.exports.time = timing