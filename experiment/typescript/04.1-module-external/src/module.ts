// 変数のエクスポート
export var fooVariable: string = "TypeScript";

// 関数のエクスポート
export function fooFunction(): string {
    return "TypeScript";
}

// クラスのエクスポート
export class FooClass {
    public bar(): string {
        return "TypeScript";
    }
}

// インターフェイスのエクスポート
export interface FooInterface {
    bar(): string;
}

// モジュールのエクスポート
export module FooModule {
    export var bar: string = "TypeScript";
}