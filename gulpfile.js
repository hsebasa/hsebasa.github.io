var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var compileSass = require('gulp-sass');
var minifyJS = require('gulp-minify');
var minifyHTML = require('gulp-htmlmin');
var webServer = require('gulp-server-livereload');
const watch = require("gulp-watch");


/////////////////////////////
// SOURCES
/////////////////////////////

gulp.task('sass', function () {
    return gulp.src('./app/source/scss/**/*.scss')
        .pipe(compileSass.sync().on('error', compileSass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./app/build/css'));
});

gulp.task('compressJS', function() {
    return gulp.src('./app/source/js/**/*.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('./app/build/js'))
});

gulp.task('minifyHTML', function() {
    return gulp.src('./app/source/**/*.html')
        .pipe(minifyHTML({collapseWhitespace: true}))
        .pipe(gulp.dest('./app/build/'));
});


/////////////////////////////
// WATCHES
/////////////////////////////

gulp.task('compressJSWatch', function() {
    return watch('./app/source/js/**/*.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('./app/build/js'))
});

gulp.task('minifyHTMLWatch', function() {
    return watch('./app/source/**/*.html')
        .pipe(minifyHTML({collapseWhitespace: true}))
        .pipe(gulp.dest('./app/build/'));
});
gulp.task('sassWatch', function () {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
});


/////////////////////////////
// SERVER
/////////////////////////////

gulp.task('createServer', function() {
    gulp.src('./app/build')
        .pipe(webServer({
            livereload: true,
            open: true,
            port: 8000,
            log: 'debug'
        }));
});

gulp.task('default', ['sassWatch', 'sass',
                      'compressJSWatch', 'minifyHTMLWatch',
                      'compressJS', 'minifyHTML',
                      'createServer']);
