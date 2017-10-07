const gulp = require('gulp'),

    //css
    postcss = require('gulp-postcss'),
    scss = require('postcss-scss'),
    sourcemaps = require('gulp-sourcemaps'),

    //server
    connect = require('gulp-connect');


const paths = {
    postcss: ['src/css/styles.css'],
    postcss_watch: ['src/css/**/*.css']
};

gulp.task('webserver', function() {
    connect.server();
});

gulp.task('css', function () {
    return gulp.src(paths.postcss)
        .pipe(sourcemaps.init())
        .pipe(postcss([require('precss'), require('autoprefixer')({flexbox: true, browsers: 'defaults, last 4 versions, last 6 iOS versions, last 6 Android versions, last 6 Safari versions, last 2 ie versions'}), require('cssnano')({
            zindex: false,
            discardUnused: {fontFace: false}
        })], {syntax: scss}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});
