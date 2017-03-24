'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const rigger = require('gulp-rigger');
const image = require('gulp-image');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function () {
    gulp.src('source/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dest'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('sass', function () {
  return gulp.src('source/css/*.*')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(concatCss('styles.css'))
      .pipe(autoprefixer({
        browsers: [
          'last 2 versions',
          'iOS >= 8',
          'Safari >= 5'
        ],
        cascade: false
      }))
      .pipe(csso())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dest/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('img', function () {
  gulp.src('source/assets/img/*.*')
    .pipe(image())
    .pipe(gulp.dest('dest/assets/img'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['image']);

gulp.task('script', function() {
  gulp.src(['source/js/jquery.min.js', 'source/js/jquery-migrate.min.js', 'source/js/bootstrap.min.js', 'source/js/slick.min.js', 'source/js/script.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dest/js'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "dest"
    });
    gulp.watch("source/css/*.*", ['sass']);
    gulp.watch("source/*.html").on('change', browserSync.reload);
});

gulp.task('dev:watch', function () {
  gulp.watch('source/css/*.*', ['sass']);
  gulp.watch('serve', ['serve']);
  gulp.watch('source/*.html', ['html']);
  gulp.watch('source/assets/img/*.*', ['img']);
  gulp.watch('source/js/*.js', ['script']);
});
