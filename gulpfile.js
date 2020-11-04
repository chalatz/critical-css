var gulp = require('gulp');
var critical = require('critical');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('go', function(){
  critical.generate({
    inline: true,
    base: 'test/',
    src: 'index.html',
    target: {
      html: 'index-critical.html',
      css: 'critical.css',
    },
    width: 1300,
    height: 900,
  });
});