(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var string = require('./utils/string');

console.log(string.nl2br('some texts'));





/// or ///////////////////////////////////////////////
var utils = require('./utils');

console.log(utils.string.nl2br('some texts2'));


},{"./utils":2,"./utils/string":3}],2:[function(require,module,exports){
module.exports.string = (function(){
	return {
		nl2br : function( str ){
			// some implements.
			return str;
		}
	}
})();



/// or ///////////////////////////////////////////////
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

},{}],3:[function(require,module,exports){
module.exports.nl2br = function(str){
	// some implements.
	return str;
};





/// or ///////////////////////////////////////////////
// this.nl2br = function(str){
// 	// some implements.
// 	return str;
// };



},{}]},{},[1]);
