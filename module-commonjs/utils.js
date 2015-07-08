module.exports.string = (function(){
	return {
		nl2br : function( str ){
			// some implements.
			return str;
		}
	}
})();



/////////////////////////// or /////////////////////////////
// this.string = {
// 	nl2br : function( str ){
// 			// some implements.
// 			return str;
// 		}
// };




////////////////////////////////////////////////////////

// fooがundefinedなのでエラー
// module.exports.foo.bar = (function(){
// 	return {...};
// })();
