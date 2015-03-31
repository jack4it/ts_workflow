var appRoot = 'src/';
var typingsFolder = 'typings/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  typingsFolder: typingsFolder,
  typings: typingsFolder + '**/*.d.ts',
  all_ts_refs_template: 'ts_workflow.d.ts',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/',
  specsSrc: 'test/src/**/*.ts',
  specsDist: 'test/dist/'
};
