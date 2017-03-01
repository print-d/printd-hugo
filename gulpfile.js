var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('themes/3d/static/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('themes/3d/static/css'))
});

gulp.task('watch', function(){
  gulp.watch('themes/3d/static/scss/*.scss', ['sass']);
});
