// 変数のエクスポート
exports.fooVariable = "I am variable";
// 関数のエクスポート
function fooFunction() {
    return "I am function";
}
exports.fooFunction = fooFunction;
// クラスのエクスポート
var IamClass = (function () {
    function IamClass() {
    }
    IamClass.prototype.bar = function () {
        return "I am class";
    };
    return IamClass;
})();
exports.IamClass = IamClass;
// モジュールのエクスポート
var FooModule;
(function (FooModule) {
    FooModule.bar = "I am internal module";
})(FooModule = exports.FooModule || (exports.FooModule = {}));
