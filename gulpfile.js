var browserify = require('gulp-browserify')
  , gulp = require('gulp')
  , myth = require('gulp-myth')
  , paths = {
        css: './source/main.css'
      , js: './source/main.js'
    };

gulp.task('css', function () {
  gulp.src(paths.css)
    .pipe(myth())
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