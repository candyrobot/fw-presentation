// 変数のエクスポート
export var fooVariable: string = "I am variable";

// 関数のエクスポート
export function fooFunction(): string {
    return "I am function";
}

// クラスのエクスポート
export class IamClass {
    public bar(): string {
        return "I am class";
    }
}

// インターフェイスのエクスポート
export interface FooInterface {
    bar(): string;
}

// モジュールのエクスポート
export module FooModule {
    export var bar: string = "I am internal module";
}