var gulp     = require('gulp');
var sass     = require('gulp-sass');
var uglify   = require('gulp-uglify');
var rename   = require('gulp-rename');

var sassExtension = 'scss/*.scss';
var destExtension = 'css/';


gulp.task('stylesExtension', function(){
  gulp.src(sassExtension)
  .pipe(sass().on('error', sass.logError))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(destExtension));
});

gulp.task('default', function() {
  gulp.start('stylesExtension')

  gulp.watch(sassExtension, ['stylesExtension']);
  
});