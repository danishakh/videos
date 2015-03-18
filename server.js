//server.js file to startup the localhost server for our app

var express = require('express'),
	api		= require('./api'),
    app     = express();

app
    .use(express.static('./public'))		//statically load all files in public directory
    .use('/api', api)
    .get('*', function (req, res) {
        res.sendfile('public/main.html');
    })
    .listen(3000);
