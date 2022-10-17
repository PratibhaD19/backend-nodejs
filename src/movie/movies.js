//Create an API for GET /movies that returns a list of movies.
// Define an array of movies in your code and return the value in response.
let picture=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

function movies(req,res){
    return res.send( picture)
}
	

//===============================================================================================================
//Create an API GET /movies/:indexNumber
// (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). 
//You can define an array of movies again in your api
function maau(req,res){
    let picture=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let moviesIndex=req.params.moviesIndex
    if(moviesIndex>picture.length || moviesIndex<0){
        return res.send("no found")
    }

return res.send(picture[moviesIndex])
}

//=============================================================================================================

//
// Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.
// Each movie object should have values - id, name. An example of movies array is 
// [ {
//  “id”: 1,
//  “name”: “The Shining”
// }, {
//  “id”: 2,
//  “name”: “Incendies”
// }, {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }, {
//  “id”: 4,
//  “name”: “Finding Nemo”
// }]

let films =[ {
     "id": 1,
     "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

 function films1(req,res){
    res.send(films)
 }

 function getIndex(req,res){
    let filmId=req.params.filmId
    if(filmId<0 || filmId> films.length){
        res.send("No movie exists with this id")
    }
    res.send(films[filmId])
 }












module.exports.moviess =movies
module.exports.indexNumber=maau
module.exports.films2=films1
module.exports.filmIn=getIndex