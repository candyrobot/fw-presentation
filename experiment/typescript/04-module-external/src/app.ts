import m1 = require("./module");

var v = m1.fooVariable;

console.log(v);

var f = m1.fooFunction();

var c = new m1.FooClass;

class Foo implements m1.FooInterface {
    public bar(): string {
        return "TypeScript";
    }
}

var m = m1.FooModule.bar;