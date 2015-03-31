var gulp = require('gulp');
var karma = require('karma').server;
var paths = require('../paths');
var runSequence = require('run-sequence');
var utils = require('../utils');

gulp.task('build-spec', function () {
    return utils.transpile(paths.specsSrc, paths.specsDist);
});

gulp.task('clean-spec', function() {
    return utils.clean(paths.specsDist);
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    runSequence('clean-spec', 'build', 'build-spec', function() {
        karma.start({
            configFile: __dirname + '/../../karma.conf.js',
            singleRun: true
        }, function(e) {
            done();
        });
    });
});
