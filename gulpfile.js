var gulp = require('gulp');
var critical = require('critical');

// load plugins
var $ = require('gulp-load-plugins')();


gulp.task('critical', function (cb) {
  critical.generate({
    base: 'test/',
    src: 'index.html',
    css: ['test/css/styles.css'],
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: 'critical.css',
    minify: true,
    extract: false,
    ignore: ['font-face']
  });
});