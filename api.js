var express 	= require('express'),
	Bourne  	= require('Bourne'),
	bodyParser 	= require('Body-Parser'),
	db 			= new Bourne('data.json'),
	router		= express.Router();

router
	
	.use(bodyParser.json())
	.route('/video')
		.get(function (req, res){
			db.find(function (err, data){
				res.json(data);
			});
		});

router
	.param('id', function (req, res, next) {
		req.dbQuery = { id : parseInt(req.params.id, 10) }
	})
	.route('/video/:id')
		.get(function (req, res){
			db.findOne(req.dbQuery, function (err, data){
				res.json(data);
			});
		});

module.exports = router;