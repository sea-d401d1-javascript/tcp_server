const gulp   = require('gulp');
const mocha  = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src(['*.js', 'test/*.js', '!node_modules/**'])
    .pipe(eslint({
      'rules': {
        'indent': [2, 2],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
      },
      'env': {
        'es6': true,
        'node': true,
        'browser': true
      },
      'extends': 'eslint:recommended',
      'global': {
        'describe': true,
        'it': true,
        'before': true,
        'after': true,
        'beforeEach': true,
        'afterEach': true
      }
    }))
    .pipe(eslint.format());
});

gulp.task('test', function() {
  return gulp.src(['test/newtest.js'])
    .pipe(mocha());
});

gulp.task('watch', function() {
  return gulp.watch(['*.js', 'test/*.js'], ['lint', 'test']);
})

gulp.task('default', ['lint', 'test', 'watch']);
