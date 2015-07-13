(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var greet_1 = require("./greet");
var greet_2 = require("./greet");
console.log(greet_1.goodmorning("TypeScript"));
console.log(greet_1.hello("TypeScript"));
console.log(greet_1.goodafternoon("TypeScript"));
console.log(greet_2["default"]("TypeScript"));

},{"./greet":2}],2:[function(require,module,exports){
function goodmorning(name) { return "\u2605Good morning, " + name; }
exports.goodmorning = goodmorning;
function hello(name) { return "Hello, " + name; }
exports.hello = hello;
function goodafternoon(name) { return "Good afternoon, " + name; }
exports.goodafternoon = goodafternoon;
function default_1(name) { return "Hi!, " + name; }
exports["default"] = default_1;

},{}]},{},[1]);
