/*============================================
=            GULP MODULES REQUIRE            =
============================================*/

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var stylus = require('gulp-stylus');
var babel = require('babelify');
var watchify = require('watchify');
var sourcemap = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var csslint = require('gulp-csslint');
var plumber = require('gulp-plumber');

/*=====  End of GULP MODULES REQUIRE  ======*/

gulp.task('default', function () {

    console.log(plumber());
    console.log('GULP GULP GULP');
});

/*============================================
=            GULP TASK JS COMPILE            =
============================================*/

gulp.task('compile:js', function () {
    var browserified = browserify("./src/js/test.js", { debug: true }).transform(babel, { presets: 'es2015' });

    return browserified
        .bundle()
        .pipe(plumber())
        .pipe(source('test.js'))
        .pipe(buffer())
        .pipe(sourcemap.init({ loadMaps: true }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('./public/assets/js'));
});

/*=====  End of GULP TASK JS COMPILE  ======*/


/*=============================================
=            GULP TASK COMPILE:CSS            =
=============================================*/

gulp.task('compile:css', function () {

    return gulp.src(['./src/stylus/main.styl'])
        .pipe(stylus())
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(gulp.dest('./public/assets/css/'));
});

/*=====  End of GULP TASK COMPILE:CSS  ======*/

/*================================================
=            GULP OTHER DEFAULT TASKS            =
================================================*/

gulp.task('watch', ['compile:css', 'compile:js'], function () {

    gulp.watch(['./src/js/**/*.js'], ['compile:js']);
    gulp.watch(['./src/stylus/**/*.styl'], ['compile:css']);
});

/*=====  End of GULP OTHER DEFAULT TASKS  ======*/

