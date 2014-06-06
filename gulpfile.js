var browserify = require('gulp-browserify')
  , gulp = require('gulp')
  , minifyCSS = require('gulp-minify-css')
  , minifyJs = require('gulp-uglify')
  , myth = require('gulp-myth')

gulp.task('css', function () {
  gulp.src('./source/main.css')
    .pipe(myth())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build'))
})

gulp.task('js', function () {
  gulp.src('./source/main.js')
    .pipe(browserify())
    .pipe(minifyJs({
      preserveComments: 'some'
    }))
    .pipe(gulp.dest('./build'))
})

gulp.task('watch', function () {
  gulp.watch('./source/*.css', [ 'css' ])
  gulp.watch('./source/*.js', [ 'js' ])
})

gulp.task('default', ['css', 'js', 'watch'])