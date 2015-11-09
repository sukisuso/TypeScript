var gulp = require('gulp'),
	ts = require ('gulp-typescript'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat')
	plumber = require('gulp-plumber'),
	minify = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	concatCss = require('gulp-concat-css'),
	tsPath = 'typescript/*.ts',
	cssPath = 'xcss/*.css',
	compilePath = 'js/compiled',
	dist = 'js/min';

gulp.task('compressScripts',function() {
	
	gulp.src([compilePath + '/typescript/*.js'])
	.pipe(plumber())
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest(dist));
})

gulp.task('typescript', function(){
	
	var tsResult = gulp.src(tsPath)
					   .pipe(ts({
						   targer:'ES5',
						   declarationFiles:false,
						   noExternalResolve:true
					   }));
	tsResult.dts.pipe(gulp.dest(compilePath + '/tsdefinitions'));
	return tsResult.js.pipe(gulp.dest(compilePath+'/typescript'));
					   
})

gulp.task('compressCss',function() {
	
	gulp.src([cssPath])
	.pipe(concatCss("bundle.css"))
	.pipe(minify())
	.pipe(gulp.dest(dist));
})

gulp.task('watch',function(){
	gulp.watch([tsPath,cssPath ], ['typescript', 'compressScripts', 'compressCss']); // 'compressScripts'
})

gulp.task('default', ['typescript', 'watch', 'compressScripts', 'compressCss']);