// moduleの書き方
// privateの作り方
// importとvarについて
var tokyo;
(function (tokyo) {
    var shibuya;
    (function (shibuya) {
        shibuya.mentaiko = 10;
        shibuya.mentaiko = 20;
    })(shibuya = tokyo.shibuya || (tokyo.shibuya = {}));
})(tokyo || (tokyo = {}));
var fukuoka;
(function (fukuoka) {
    var hakata;
    (function (hakata) {
        hakata.mentaiko = 5;
    })(hakata = fukuoka.hakata || (fukuoka.hakata = {}));
})(fukuoka || (fukuoka = {}));
console.log(tokyo.shibuya.mentaiko); //10
console.log(fukuoka.hakata.mentaiko); //10
// varでも基本同じだが、モジュールだということが明示できる
// そして、インターフェイスはimportで宣言しないとnot foundになる
var shibuya = tokyo.shibuya;
console.log(shibuya); //Object
