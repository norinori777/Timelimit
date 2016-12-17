'use strict';

var
configRoutes, 
auth		= require('basic-auth'),
crud		= require('./crud'),
fs 			= require('fs'),
multer = require('multer'),
ImageMagick = require('imagemagick'),
easyimage = require('easyimage'),
makeMongoId	= crud.makeMongoId,
base64 = require('./util/base64.js'),
getDate = require('./util/getDate.js');

configRoutes = function(app, server){
	var resizeImg = function(data){
		return new Promise((resolve, reject) => {
			var filename = getDate.getDate_YYYYMMDDhhmmss();
			var img =data.match(/data:image\/(.*);base64,(.*)/) 
			var suffix = img[1];
			var base64str = img[2];
			var header = 'data:image/' + suffix + '; base64,';
			var src_file_path = './upload/' + filename + "." + suffix;
			var dst_file_path = './out/' + filename + "." + suffix;

			base64.base64_decode(base64str, src_file_path);
			easyimage.info(src_file_path).then(
				function(file_info){
					if(file_info.height > file_info.width){
						easyimage.resize({
							src: src_file_path,
							dst: dst_file_path,
							height: 280
						}).then(function(img){
							var base64str = base64.base64_encode(dst_file_path);
							resolve(header + base64str);
						}).then(function(err){
							throw err;
						});
					} else {
						easyimage.resize({
							src: src_file_path,
							dst: dst_file_path,
							width: 140
						}).then(function(img){
							var base64str = base64.base64_encode(dst_file_path);
							resolve(header + base64str);
						}).then(function(err){
							throw err;
						});
					}
				}, function(err){
					throw err;
				}
			);
		})
	}

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

	// 作成
	app.post('/timelimit/',function(req,res){
		var
		user = auth(req),
		data = {insertdt: new Date(),name:user.name};
		resizeImg(req.body.img).then(function(img){
			req.body.img = img;
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
		})
	});

	// 更新
	app.put('/timelimit/',function(req,res){
		var
		user = auth(req),
		data = {updatedt: new Date(), updator:user.name};
		data = Object.assign({}, data, req.body);
		crud.update(
			'timelimit',
			{ _id: makeMongoId( req.body.item_id ) },
			{$set:data},
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

	// 削除
	app.delete('/timelimit/',function(req,res){
		var	user = auth(req);
		crud.destroy(
			'timelimit',
			{ _id: makeMongoId( req.body.item_id ) },
			function(result_map){
				if(result_map.delete_count.result.ok === 1){
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

	// 検索
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

	// ファイルアップロード
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
