var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
gulp.task('default', ['mocha_tests', /*'create_scripts_min_js',*/ 'watch']);
gulp.task('function', function() {
  /* Place code for your "function" task here, what is run when:
  $gulp function
  is called. */
});

gulp.task('mocha_tests', function () {
  return gulp.src('**/*.js', {read: false}).pipe(plugins.mocha({reporter: 'nyan'}));
});
// gulp.task('create_scripts_min_js', function() {
//   return gulp.src('**/*.js').pipe(plugins.concat('scripts.js'))
//       .pipe(gulp.dest('dist'))
//       .pipe(plugins.rename('scripts.min.js'))
//       .pipe(plugins.uglify())
//       .pipe(gulp.dest('dist'));
});
gulp.task('watch', function() {
  gulp.watch(['**/*.js', '!package.json', '!node_modules/**'], ['mocha_tests', /*'create_scripts_min_js'*/]);
});
