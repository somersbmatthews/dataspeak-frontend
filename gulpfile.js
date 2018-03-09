'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');

gulp.task('sass', function () {
  return gulp.src('./node_modules/bootswatch/dist/darkly/_bootswatch.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./node_modules/bootswatch/dist/darkly/_bootswatch.scss', ['sass']);
});

gulp.task('sass2', function () {
  return gulp.src('./node_modules/bootswatch/dist/darkly/_variables.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./node_modules/bootswatch/dist/darkly/_variables.scss', ['sass']);
});


 
gulp.task('scss-lint', function() {
  return gulp.src('./node_modules/bootswatch/dist/darkly/_variables.scss')
    .pipe(scsslint());
});