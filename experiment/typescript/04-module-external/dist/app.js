var mod = require("./module.js");
console.log(mod);
//変数つかう
console.log(mod.fooVariable);
//関数使う
console.log(mod.fooFunction());
//クラス使う
console.log(new mod.IamClass);
//インターフェイス使う
var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.bar = function () {
        return "TypeScript";
    };
    return Foo;
})();
//internal moduleを使う
console.log(mod.FooModule.bar);
