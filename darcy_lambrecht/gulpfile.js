var eslint = require('gulp-eslint');
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha', function() {
  return gulp.src('test/server_test.js')
    .pipe(mocha());
});

gulp.task('default', ['lint', 'mocha']);
