const express = require('express');
const router = express.Router();



//ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..
// each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote


let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
  

 //take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

 router.post("/players",function(req,res){
 let data= req.query.votingAge
    let voteingPeople =[]
persons.forEach((persons)=>{
    if(persons.age>data){
        persons.votingStatus=true
        voteingPeople.push(persons)
    }
})
return res.send({voteingPeople:voteingPeople})
 })
 










//query params ( as well as path params ) can be sent in post request as well
router.post( "/post-query-1", function (req, res){
    let data= req.query
    console.log( data)
    res.send( {data: data , status: true})
})

//filter out all the numbers that are greater than "input" ( input is received from query params)
let myArr = [23, 45, 67, 281394, 32424, 423, 24, 42323, 4, 234, 12, 34]

router.post( "/post-query-2", function (req, res){
    let input= req.query.input

    // let finArr= myArr.filter ( ele => ele>input )
    let finalArr= []
    for( i=0 ; i<myArr.length ; i++){
        if ( myArr[i] > input )     finalArr.push( myArr[i])
    }
    res.send( {data: finalArr , status: true})
})


module.exports = router;