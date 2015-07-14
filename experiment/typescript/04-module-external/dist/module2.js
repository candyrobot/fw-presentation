// 変数のエクスポート
exports.fooVariable = "He is variable";
// 関数のエクスポート
function fooFunction() {
    return "He is function";
}
exports.fooFunction = fooFunction;
// クラスのエクスポート
var IamClass = (function () {
    function IamClass() {
    }
    IamClass.prototype.bar = function () {
        return "He is class";
    };
    return IamClass;
})();
exports.IamClass = IamClass;
// モジュールのエクスポート
var FooModule;
(function (FooModule) {
    FooModule.bar = "He is internal module";
})(FooModule = exports.FooModule || (exports.FooModule = {}));
