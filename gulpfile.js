const { src, dest, watch, series} = require("gulp");
const sass = require('gulp-sass')(require("sass"));

function buildStyles() {
    return src('pixel/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

function watchChanges() {
    watch(['pixel/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchChanges);