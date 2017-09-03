const gulp = require('gulp'),
    path = require('path'),

    //css
    postcss = require('gulp-postcss'),
    scss = require('postcss-scss'),
    sourcemaps = require('gulp-sourcemaps'),

    //js
    tap = require('gulp-tap'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    resolutions = require('browserify-resolutions'),
    dedupe = require('gulp-dedupe'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    transform = require('vinyl-transform'),
    changed = require('gulp-changed'),
    through2 = require('through2'),

    //server
    connect = require('gulp-connect');


const paths = {
    scripts: ['src/*.js', 'src/assets/js/modules/**/*.js', 'src/assets/js/components/*.js'],
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

gulp.task('js', function () {
    return gulp.src(['./src/js/*.js'], {read: false}) // no need of reading file because browserify does.
        //.pipe(changed('./assets/js'))
        .pipe(tap(function (file) {
            gutil.log('bundling ' + file.path);
            // replace file contents with browserify's bundle stream
            file.contents = browserify(file.path, {debug: true})
                .transform("babelify", {presets: ["es2015"]})
                .bundle();
        }))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('./dist/js'));
});
