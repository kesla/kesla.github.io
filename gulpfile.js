var browserify = require('gulp-browserify')
  , gulp = require('gulp')
  , prefix = require('gulp-autoprefixer')
  , paths = {
        css: './source/*.css'
      , js: './source/*.js'
    };

gulp.task('css', function () {
  gulp.src(paths.css)
    .pipe(prefix())
    .pipe(gulp.dest('./build'))
})

gulp.task('js', function () {
  gulp.src(paths.js)
    .pipe(browserify())
    .pipe(gulp.dest('./build'))
})

gulp.task('watch', function () {
  gulp.watch(paths.css, [ 'css' ])
  gulp.watch(paths.js, [ 'js' ])
})

gulp.task('default', ['css', 'js', 'watch'])