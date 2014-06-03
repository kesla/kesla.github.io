var gulp = require('gulp')
  , prefix = require('gulp-autoprefixer')
  , paths = {
      css: './source/*.css'
    };

gulp.task('css', function () {
  gulp.src(paths.css)
    .pipe(prefix())
    .pipe(gulp.dest('./build'))
})

gulp.task('watch', function () {
  gulp.watch(paths.css, [ 'css' ])
})

gulp.task('default', ['css', 'watch'])