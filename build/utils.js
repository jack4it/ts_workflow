var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var vinylPaths = require('vinyl-paths');
var del = require('del');

// The plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
function transpile(source, output) {
    var ts = gulp.src(source)
		.pipe(plumber())
		.pipe(changed(output, {extension: '.js'}))
		.pipe(sourcemaps.init())
		.pipe(tsc({
                target: 'es5',
                module: 'amd',
                declarationFiles: false,
                noExternalResolve: false
            }));

    ts.dts
        .pipe(gulp.dest(output));

    return ts.js
        .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(output));
}

// deletes all files in the output path
function clean(dir) {
  return gulp.src(dir)
    .pipe(vinylPaths(del));
}

module.exports = {
    transpile: transpile,
    clean: clean,
};
