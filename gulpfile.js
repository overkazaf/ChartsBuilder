var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
    watch = require('gulp-watch'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
	sass = require('gulp-sass');


/**
 * [同步代码变化到浏览器上]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2016-06-27T14:09:00+0800
 *
 */
gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
        baseDir:'./'
        }
    });

    console.log('starting browser-sync task...');
    gulp.watch('src/scss/**/*.scss',['sass']);
    gulp.watch('src/css/**/*.css',['minifycss']);
    gulp.watch('src/javascript/**/*.js',['minifyjs']);

    gulp.watch("*.html").on('change',reload);
});


/**
 * [sass编译]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2016-06-27T14:09:41+0800
 */
gulp.task('sass', function (){
	console.log('starting sass task...');
	return gulp.src('src/scss/**/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('dist/css'));
});

/**
 * [压缩js]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2016-06-27T14:10:53+0800
 */
gulp.task('minifyjs', function() {
	console.log('starting minifyjs task...');
    return gulp.src('src/javascript/**/*.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(gulp.dest('dist/minified/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/minified/js'));  //输出
});

/**
 * [编译sass]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2016-06-27T14:11:51+0800
 */
gulp.task('sass', function() {
	console.log('starting sass task...');
	return gulp.src('src/scss/**/*.scss')
			.pipe(sass())
			.pipe(minifycss())   //执行压缩
        	.pipe(gulp.dest('dist/minified/css'));   //输出文件夹
});

gulp.task('minifycss', function() {
	console.log('starting minifycss task...');
	return gulp.src('src/css/**/*.css')
			.pipe(minifycss())   //执行压缩
        	.pipe(gulp.dest('dist/minified/css'));   //输出文件夹
});

/**
 * [编译后，在输出前清空旧文件]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2016-06-27T14:10:07+0800
 */
gulp.task('clean', function(cb) {
	console.log('starting clean task...');
    del(['dist/minified/css', 'dist/minified/js'], cb)
});


gulp.task('default', function () {
	gulp.start('clean', 'sass', 'minifycss', 'minifyjs', 'browser-sync');
});