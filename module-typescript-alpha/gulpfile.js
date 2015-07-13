var gulp = require("gulp");
var gulpCommonJS = require("gulp-commonjs");

gulp.task("commonjs", function(){
    gulp.src("**/*.js")
        .pipe(gulpCommonJS())
        .pipe(gulp.dest("./dist"));
});

//watchのタスク
gulp.task('watch',function(){
    gulp.watch('**/*.js',function(event){
        gulp.run('commonjs');
    });
});

//defaultで実行するタスクを設定
gulp.task('default',function(){
    gulp.run('watch');
});




