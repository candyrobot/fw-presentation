var gulp = require('gulp');
var typescript = require('gulp-typescript');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');

//TypeScriptのタスク
gulp.task('typescript',function(){
    gulp.src(['ts/**/*.ts'])
        .pipe(plumber()) //エラーしてもウォッチを途中でやめないための処理
        // .pipe(typescript({module:"amd"})) //コンパイルする処理 moduleで出力するモジュールを指定
        .pipe(typescript())
        .pipe(gulp.dest('js')); //ファイル出力先を指定
});

//Compassのタスク
gulp.task('compass',function(){
    gulp.src(['../stylesheets/sass/**/*.scss'])
        .pipe(plumber())
        .pipe(compass({ //コンパイルする処理
            config_file : '../stylesheets/sass/config.rb',
            comments : false,
            css : '../stylesheets',
            sass: '../stylesheets/sass/'
        }));
});

//watchのタスク
gulp.task('watch',function(){
    gulp.watch('ts/**/*.ts',function(event){
        gulp.run('typescript');
    });
    gulp.watch('../stylesheets/sass/**/*.scss',function(event){
        gulp.run('compass');
    });
});

//defaultで実行するタスクを設定
gulp.task('default',function(){
    gulp.run('watch');
});