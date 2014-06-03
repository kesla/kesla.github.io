var gulp = require('gulp')
  , prefix = require('gulp-autoprefixer');

gulp.task('default', function () {
  return gulp.src('./source/*.css')
    .pipe(prefix())
    .pipe(gulp.dest('./build'))
})