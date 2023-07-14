// PRIMITIVE types: string, number, boolean
var str = "Hello World";
var num1 = 52;
var num2 = 52.5;
var isTrue = true;
var isFalse = false;
//OBJECT TYPE
var obj = {
    a: 5,
    b: 64
};
//FUNCTION in () types for parametres after (): type for function return 
function sum(a, b) {
    return a + b;
}
;
var greets = function (name, surname) {
    return "Hello " + name + " " + surname;
};
//OPTIONAL PROPERTIES IN FUNCTION(npot all are required)
var sayHello = function (name, surname) {
    console.log("Hello \"name\" \"surname\"!");
};
sayHello("Valerii");
sayHello("Valerii", "Matviiv");
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
var numbers = {
    num1: 5,
    num2: 353,
    num3: 9
};
var arrayNum = [1, 2, 3, 4, 5];
var strng = "It`s a simple string";
// TYPEOF operator
var showObject = function (obj) {
    if (typeof obj === "string") {
        return console.log(obj);
    }
    else if (typeof obj === "number") {
        return console.log(obj + 5);
    }
};
showObject(9);
showObject("Another simple string");
