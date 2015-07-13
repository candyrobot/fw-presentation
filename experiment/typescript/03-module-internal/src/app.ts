// moduleの書き方
// privateの作り方
// importとvarについて

module tokyo {
	export module shibuya {
		export var mentaiko: number = 10;
	}
}

module fukuoka {
	export module hakata {
		export var mentaiko: number = 5;
	}
}

console.log(tokyo.shibuya.mentaiko);  //10
console.log(fukuoka.hakata.mentaiko);  //10


// varでも同じだが、モジュールだということが明示できる
import shibuya = tokyo.shibuya;

console.log(shibuya); //Object