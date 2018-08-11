var gulp     = require('gulp');
var sass     = require('gulp-sass');
var uglify   = require('gulp-uglify');
var concat   = require('gulp-concat');
var csso     = require('gulp-csso');

// css build
var sassSourcePath      = 'scss/*.scss';
var sassDestinationPath = 'assets/css/';

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

// js build
var jsSourcePath      = 'scripts/*.js';
var jsDestinationPath = 'assets/js/';

gulp.task('scripts', function(){
  gulp.src([
    jsSourcePath
  ])
  .pipe(concat('init.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDestinationPath));
});

// run + watch
gulp.task('default', function() {
  gulp.start('styles');
  gulp.watch(sassSourcePath, ['styles']);

  gulp.start('scripts');
  gulp.watch(jsSourcePath, ['styles']);
});