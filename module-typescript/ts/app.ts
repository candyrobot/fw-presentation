


module Foo {
    export var x: string;
    x = "TypeScript";
    export var y = 'aaaa';
}



module Foo {
	export function hoge( str:string ): string {
		return `${x} ${str}`;
	}

	export var foo = function( aaa:string ): string {
		return `${y}`;
	}
}


console.log(Foo.x);



interface ReplaceElemsOptions {
	direction: string;
	animation: boolean;
}

// ReplaceElemsOptions hoge = {
// 	direction: 'hoge',
// 	animation: 1
// };

function hoge(Opts: ReplaceElemsOptions) {
 //    Opts = Opts || {};
 //    Opts.direction = Opts.direction || 'vertical';
 //    Opts.animation = Opts.animation || false;
	// console.log(1);
}

hoge({
	direction: '1000'
});



