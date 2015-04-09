var g = require("gulp"),
    compass = require("gulp-compass"),
    minCSS = require('gulp-minify-css');

g.task('compass', function(){
    g.src('./sass/*.scss')
        .pipe(compass({
            config_file : './config.rb',
            css : 'css',
            sass : 'sass'
        }))
        .pipe(minCSS())
        .pipe(g.dest('./tmp'));
});