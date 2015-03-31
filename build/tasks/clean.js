var gulp = require('gulp');
var paths = require('../paths');
var utils = require('../utils');

// deletes all files in the output path
gulp.task('clean', function() {
    return utils.clean([paths.output, paths.typingsFolder + paths.all_ts_refs_template]);
});
