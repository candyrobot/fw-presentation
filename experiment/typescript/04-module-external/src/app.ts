import mod = require("./module.js");

console.log(mod);

//変数つかう
console.log(mod.fooVariable);

//関数使う
console.log(mod.fooFunction());

//クラス使う
console.log(new mod.IamClass);

//インターフェイス使う
class Foo implements mod.FooInterface {
    public bar(): string {
        return "TypeScript";
    }
}

//internal moduleを使う
console.log(mod.FooModule.bar);


