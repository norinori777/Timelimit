var gulp = require('gulp'),
sass = require('gulp-sass'),
cssnext = require('gulp-cssnext'),
plumber = require('gulp-plumber'),
sourcemaps = require('gulp-sourcemaps')
using = require('gulp-using'),
karma = require('gulp-karma'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer'),
babelify = require('babelify'),
webserver = require('gulp-webserver');
del = require('del');


gulp.task('default',['copy','watch','karma']);

gulp.task('watch',function(){
	gulp.watch('./develop/assets/js/**/*.js', ['build']);
	gulp.watch('./develop/assets/jsx/**/*.js', ['build']);
	gulp.watch('./develop/assets/sass/**/*.scss', ['sass']);
	gulp.watch('./develop/html/*.html',['copy']);
});

gulp.task('sass',function(){
	del(["./release/assets/css/*",
		"./public/css/*"]);
	gulp.src('./develop/assets/sass/*.scss')
		.pipe(plumber())
		.pipe(using())
		.pipe(sass().on('error',function(err){
			console.log(err.message)
		}))
		.pipe(cssnext())
		.pipe(gulp.dest('./release/css'));
	gulp.src('./release/css/*.css').pipe(gulp.dest('public/css'));
});

gulp.task('build', function () {
	del(["./release/js/*",
		"./public/js/*"]);
	browserify('./develop/assets/js/app.js')
		.transform(babelify)
		.bundle()
		.on("error", function(err){
			console.log("error:" + err.message);
			console.log("error:" + err.stack);
		})
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps:true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./release/js'));
	gulp.src('./release/js/*.js').pipe(gulp.dest('public/js'));
	gulp.src('./release/js/*.map').pipe(gulp.dest('public/js'));
});

gulp.task('karma', function(){
	var testfiles = ['./test/*'];

	return gulp.src(testfiles)
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'watch'
		}));
});

gulp.task('server', function(){
	gulp.src('public')
		.pipe(webserver({
			livereload: true,
			fallback: 'index.html'
		}));
});

gulp.task('copy', function(){
	del(["./public/*.html","release/*.html"]);
	gulp.src('./develop/html/*.html').pipe(gulp.dest('release'));
	gulp.src('./release/*.html').pipe(gulp.dest('public'));
})
