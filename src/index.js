const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://PratibhaDamodar:MWKQQUmJ4k4ZzFim@lithium01.ryxy9mx.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true// basically allow to fallback to old parser if they find bug n new parser
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )// if need  to handle promises inreject state we need catch method 
                                    //that told us that promise reach to reject state




// Move around the following block and see how its order impacts what gets called first
// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next()
//         // What happens if we send a response instead of the next() call ?
//         //res.send({msg:"done"})
//   }\\
// );

app.use('/', route);//call route globally

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

