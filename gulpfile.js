var gulp = require('gulp');
var critical = require('critical');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('go', function(){
    critical.generate({
      //base: '/',
      src: 'index.html',
      target: 'css/styles.css',
      width: 1300,
      height: 900,
    });
});