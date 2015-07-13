// module1.ts
// 変数のエクスポート
exports.fooVariable = "TypeScript";
// 関数のエクスポート
function fooFunction() {
    return "TypeScript";
}
exports.fooFunction = fooFunction;
// クラスのエクスポート
var FooClass = (function () {
    function FooClass() {
    }
    FooClass.prototype.bar = function () {
        return "TypeScript";
    };
    return FooClass;
})();
exports.FooClass = FooClass;
// モジュールのエクスポート
var FooModule;
(function (FooModule) {
    FooModule.bar = "TypeScript";
})(FooModule = exports.FooModule || (exports.FooModule = {}));
