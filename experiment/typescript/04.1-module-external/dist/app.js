define(["require", "exports", "dist/module.js"], function (require, exports, mod) {
    console.log(mod);
    console.log(mod.fooVariable);
});
// var f = mod.fooFunction();
// var c = new mod.FooClass;
// class Foo implements mod.FooInterface {
//     public bar(): string {
//         return "TypeScript";
//     }
// }
// var m = mod.FooModule.bar; 
