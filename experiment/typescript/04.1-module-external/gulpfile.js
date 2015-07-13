var gulp = require('gulp');
var typescript = require('gulp-typescript');
var plumber = require('gulp-plumber');

//TypeScriptのタスク
gulp.task('typescript',function(){
    gulp.src(['src/**/*.ts'])
        .pipe(plumber()) //エラーしてもウォッチを途中でやめないための処理
        // .pipe(typescript({module:"commonjs"})) //コンパイルする処理 moduleで出力するモジュールを指定
        .pipe(typescript({module:"amd"})) //コンパイルする処理 moduleで出力するモジュールを指定
        .pipe(gulp.dest('dist/')); //ファイル出力先を指定
});

//watchのタスク
gulp.task('watch',function(){
    gulp.watch('src/**/*.ts',function(event){
        gulp.run('typescript');
    });
});

//defaultで実行するタスクを設定
gulp.task('default',function(){
    gulp.run('watch');
});