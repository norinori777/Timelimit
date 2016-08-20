'use strict';

var
configRoutes, 
auth		= require('basic-auth'),
crud		= require('./crud'),
fs 			= require('fs'),
multer = require('multer'),
makeMongoId	= crud.makeMongoId;

configRoutes = function(app, server){

	var upload = multer({dest:'./upload/',
		rename: function (fieldname, filename) {
			return filename+Date.now();
		},
		onFileUploadStart: function (file) {
			console.log(file.originalname + ' is starting ...');
		},
		onFileUploadComplete: function (file) {
			console.log(file.fieldname + ' uploaded to  ' + file.path);
		}		
	});
	var type = upload.single('upfile');

	app.get('/:obj_type',function(req,res){
		crud.read(
			req.params.obj_type,
			{},{},
			function(map_list){res.json(map_list);}
		);
	});

	app.post('/:obj_type',function(req,res){
		var
		user = auth(req),
		data = {insertdt: new Date(),name:user.name};
		data.memo = req.body;
		crud.construct(
			req.params.obj_type,
			data,
			function(result_map){res.json(result_map);}
		);
	});

	app.post('/timelimit/add',function(req,res){
		var
		user = auth(req),
		data = {insertdt: new Date(),name:user.name};
		data = Object.assign({}, data, req.body);
		crud.construct(
			'timelimit',
			data,
			function(result_map){
				if(result_map.result.ok === 1){
					var
					user = auth(req),
					filter = {name:user.name};
					crud.read(
						'timelimit',
						filter,{},
						function(map_list){
							res.json(map_list);
						}
					)
				}
			}
		);
	});

	app.get('/timelimit/', function(req,res){
		var
		user = auth(req),
		filter = {name:user.name};
		crud.read(
			'timelimit',
			filter,{},
			function(map_list){res.json(map_list);}
		);
	})

	app.put('/:obj_type/:id',function(req,res){
		var
		user = auth(req),
		data = {updatedt: new Date(), updator:user.name};
		data.article = req.body.article;

		crud.update(
			req.params.obj_type,
			{ _id: makeMongoId( req.params.id ) },
			{$set:data},
			function(result_map){res.send(result_map);}
		);
	});

	app.delete('/:obj_type/:id',function(req,res){
		crud.destroy(
			req.params.obj_type,
			{ _id: makeMongoId( req.params.id ) },
			function(result_map){res.send(result_map);}
		);		
	});



	app.post('/test/upload', type, function(req, res){
		/** When using the "single"
		 data come in "req.file" regardless of the attribute "name". **/
		var tmp_path = req.file.path;

		/** The original name of the uploaded file
			 stored in the variable "originalname". **/
		var target_path = 'upload/' + req.file.originalname;

		/** A better way to copy the uploaded file. **/
		var src = fs.createReadStream(tmp_path);
		var dest = fs.createWriteStream(target_path);
		src.pipe(dest);
		res.end("File uploaded");
	});
};

module.exports = {configRoutes: configRoutes};
