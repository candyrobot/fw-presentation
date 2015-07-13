var gulp = require('gulp');
var typescript = require('gulp-typescript');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');

//TypeScriptのタスク
gulp.task('typescript',function(){
    return gulp.src(['src/**/*.ts'])
        .pipe(plumber()) //エラーしてもウォッチを途中でやめないための処理
        .pipe(typescript({module:"commonjs"})) //コンパイルする処理 moduleで出力するモジュールを指定
        // .pipe(typescript({module:"amd"})) //コンパイルする処理 moduleで出力するモジュールを指定
        .pipe(gulp.dest('dist/')) //ファイル出力先を指定
});

// browserify
gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src('dist/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist_with_browserify'))
});

//watchのタスク
gulp.task('watch',function(){
    gulp.watch('src/**/*.ts',function(event){
        gulp.run('typescript');
        setTimeout(function(){
        	gulp.run('browserify');
        },300);

    });
});

//defaultで実行するタスクを設定
gulp.task('default',function(){
    gulp.run('watch');
});