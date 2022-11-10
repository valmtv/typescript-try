"use strict";
// PRIMITIVE types: string, number, boolean
var str = "Hello World";
var num1 = 52;
var num2 = 52.5;
var isTrue = true;
var isFalse = false;
//FUNCTION in () types for parametres after (): type for function return 
function sum(a, b) {
    return a + b;
}
;
var greets = function (name, surname) {
    return "Hello " + name + " " + surname;
};
// ARRAY
var strArray = ["apple", "orange", "banana"];
var numArray = [4, 53.5, 0.7];
// 
var page = function () {
    var randomNumberTwo = 1;
    var sum = function (num1, num2) {
        return console.log(num1 + num2);
    };
    var operationSum = sum(randomNumberTwo, 7);
    return operationSum;
};
