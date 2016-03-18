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
reactify = require('reactify'),
webserver = require('gulp-webserver');


gulp.task('default',['copy','watch','karma']);

gulp.task('watch',function(){
	gulp.watch('./develop/assets/jsx/**/*.js', ['build']);
	gulp.watch('./develop/assets/sass/**/*.scss', ['sass']);
});

gulp.task('sass',function(){
	gulp.src('./develop/assets/sass/*.scss')
		.pipe(plumber())
		.pipe(using())
		.pipe(sass().on('error',function(err){
			console.log(err.message)
		}))
		.pipe(cssnext())
		.pipe(gulp.dest('./release/assets/css'));
	gulp.src('./release/assets/css/*.css').pipe(gulp.dest('public/css'));
});

gulp.task('build', function () {
	browserify('./develop/assets/jsx/helloworld.js')
		.transform(reactify)
		.bundle()
		.on("error", function(err){
			console.log("error:" + err.message);
			console.log("error:" + err.stack);
		})
		.pipe(source('helloworld.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps:true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./release/assets/js/'));
	gulp.src('./release/assets/js/*.js').pipe(gulp.dest('public/js'));
	gulp.src('./release/assets/js/*.map').pipe(gulp.dest('public/js'));
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
	gulp.src('./develop/assets/*.html')
		.pipe(gulp.dest('./public'));
})
