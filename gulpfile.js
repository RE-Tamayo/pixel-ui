const { src, dest, watch, series} = require("gulp");
const sass = require('gulp-sass')(require("sass"));
const cleanCSS = require('gulp-clean-css');

function buildStyles() {
    return src('pixel/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

function buildMinStyles() {
    return src('pixel/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('css/min'));
}

function watchChanges() {
    watch(['pixel/**/*.scss'], buildStyles, buildMinStyles);
}

exports.default = series(buildStyles, buildMinStyles, watchChanges);