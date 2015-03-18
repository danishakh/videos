//simple REST API for our backend

//call the required packages
//using Bourne DB system instead of MongoDB for development purposes
var express 	= require('express'),
	Bourne  	= require('bourne'),
	bodyParser 	= require('body-parser'),				//need this middelware to parse bodies of our http requests
	db 			= new Bourne('data.json'),
	router		= express.Router();						//create our router object


//configure the routing for our application using express4.0 router feature
router
	.use(function (req, res, next) {
		//if(!req.user)req.user = { id : 1 };			//this middleware will be required when implementing user account management
		next();
	})
	.use(bodyParser.json())								//parse different request bodies

	//get the complete list of videos
	.route('/video')									//set the route here instead of setting it as 1st parameter for each request
		.get(function (req, res){
			// { userId : parseInt(req.user.id, 10) },  //the userID of the logged in user will be the 1st parameter to the find function below
			db.find( function (err, data){
				res.json(data);
			});
		});
		//can add .post here too if we want to add more videos to our database using db.insert function

//get 1 selected video depending on the id 
router
	.param('id', function (req, res, next) {					//when one of the parameter of the route is id
		req.dbQuery = { id: parseInt(req.params.id, 10) }		//assign this object to a property(dbQuery) of the request object that gets passed down
		//next();
	})
	.route('/video/:id')
		.get(function (req, res){
			db.findOne(req.dbQuery, function (err, data){
				res.json(data);									//respond by sending json data
			});
		});
		//can add functions for other requests(PUT/DELETE) here for editing/deleting videos

module.exports = router;		//export the router object from this module
