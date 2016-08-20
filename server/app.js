'use strict';

var
http = require('http'),
favicon = require('serve-favicon'),
express = require('express'),
routes = require('./lib/routes'),
logger = require('morgan'),
parser = require('body-parser'),
app = express(),
auth = require('basic-auth'),
server = http.createServer(app);

app.use(logger('combined'));
app.use(parser.json({limit:'10mb'}));
app.use(function(req, res, next) {
	var user = auth(req);

	if (user === undefined || user['name'] !== 'test' || user['pass'] !== 'test') {
		res.statusCode =401;
		res.setHeader('www-Authenticate', 'Basic realm="MyRealmName"');
		res.end('Unauthorized');
	} else {
		next();
	}
});

app.use( favicon( '../public/favicon.ico' )) ;
app.use( express.static( '../public' ) );

routes.configRoutes(app,server);

server.listen(5555);