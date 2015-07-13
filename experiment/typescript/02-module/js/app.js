var Foo;
(function (Foo) {
    Foo.x;
    Foo.x = "TypeScript";
    Foo.y = 'aaaa';
})(Foo || (Foo = {}));
var Foo;
(function (Foo) {
    function hoge(str) {
        return "" + Foo.x + " " + str;
    }
    Foo.hoge = hoge;
    Foo.foo = function (aaa) {
        return "" + Foo.y;
    };
})(Foo || (Foo = {}));
console.log(Foo.x);
// ReplaceElemsOptions hoge = {
// 	direction: 'hoge',
// 	animation: 1
// };
function hoge(Opts) {
    //    Opts = Opts || {};
    //    Opts.direction = Opts.direction || 'vertical';
    //    Opts.animation = Opts.animation || false;
    // console.log(1);
}
hoge({
    direction: '1000'
});
