const express = require('express');
const router = express.Router();///test-you





let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {

let newPlayer = req.body
 let newPlayersName = newPlayer.name
   let isNameRepeated = false


for(let i = 0; i < players.length; i++) {
            if(players[i].name == newPlayersName) {
                isNameRepeated = true;
                break;
            }
        }
    
        //undefined is same as false/ a falsy value
        if (isNameRepeated) {
            //Player exists
            res.send("This player was already added!")
        } else {
            //New entry
            players.push(newPlayer)
            res.send(players)
        }
    });

    
// // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
// : 4 is missing
    router.get("/sol1", function (req, res) {
        let arr= [1,2,3,4,5,6,7,8,10]
         let sum=0
    for (i=0;i<arr.length;i++){
        sum += arr[i]
    }
    //console.log(sum)
    let n=arr.length+1
     let expected_sum=Math.floor((n*(n+1))/2)
      res.send ( {data:expected_sum-sum})


    })



    //-write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,
        // 34, 35, 37, 38]: 36 is missing


        router.get('/sol2',function (req,res ){
            let arr = [33,34, 35, 37, 38]
            let len = arr.length
            let total = 0
            for (let element in arr){
                total+=arr[element]
            }
            let firstDigit = arr[0]
            lastDigit = arr.pop()
            let sum = (len+1)*(firstDigit+lastDigit)/2
            let missingNumber=sum-total
            res.send({data:missingNumber})
        
        })    



module.exports=router;