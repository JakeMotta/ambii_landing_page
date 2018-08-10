var gulp     = require('gulp');
var sass     = require('gulp-sass');
var uglify   = require('gulp-uglify');
var concat   = require('gulp-concat');
var csso     = require('gulp-csso');

var sassSourcePath = 'scss/*.scss';
var sassDestinationPath = 'css/';

gulp.task('styles', function(){
  gulp.src([
  	'node_modules/animate.css/animate.min.css',
  	sassSourcePath
  ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('style.min.css'))
  .pipe(csso())
  .pipe(gulp.dest(sassDestinationPath));
});

gulp.task('default', function() {
  gulp.start('styles');
  gulp.watch(sassSourcePath, ['styles']);
});