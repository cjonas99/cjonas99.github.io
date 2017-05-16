var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var sassFiles = 'assets/sass/**/*.scss',  
    cssDest = 'assets/css/';

gulp.task('styles', function(){  
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
    	.pipe(concat('app.css'))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch',function() {  
    gulp.watch(sassFiles,['styles']);
});