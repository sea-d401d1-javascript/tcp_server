var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var files = ['tcpserver.js', 'test/*.js'];

gulp.task('jshint', function() {
  return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', ['jshint'], function() {
  return gulp.src(files)
    .pipe(mocha());
});

gulp.task('watch', function() {
    gulp.watch(files, ['jshint', 'mocha']);
});

gulp.task('default', ['jshint', 'mocha']);
