var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var inject = require('gulp-inject');
var paths = require('../paths');
var utils = require('../utils');

gulp.task('build-ts', function () {
    return utils.transpile(paths.source, paths.output);
});

gulp.task('build-ts-refs', function() {
	var source = gulp.src(paths.source, { read: false });
	return gulp.src(paths.all_ts_refs_template)
		.pipe(inject(source, {
                starttag: '//{',
                endtag: '//}',
                transform: function(filePath) {
                    console.log(filePath);
                    return '/// <reference path="..' + filePath + '" />';
                }
            }))
		.pipe(gulp.dest(paths.typingsFolder));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-ts
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-ts', /*'build-ts-refs', */'build-html'],
    callback
  );
});
