// 変数のエクスポート
export var fooVariable: string = "He is variable";

// 関数のエクスポート
export function fooFunction(): string {
    return "He is function";
}

// クラスのエクスポート
export class IamClass {
    public bar(): string {
        return "He is class";
    }
}

// インターフェイスのエクスポート
export interface FooInterface {
    bar(): string;
}

// モジュールのエクスポート
export module FooModule {
    export var bar: string = "He is internal module";
}