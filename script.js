"use strict";
// Typescript types
//number 
var num = 10;
console.log(num);
// String
var str = 'Stirng';
console.log(str);
//Array
var numArr = [10, 20];
var strArray = ["string1", "string2"];
var anyArray = [10, "Stringt"];
console.log(numArr);
console.log(strArray);
console.log(anyArray);
//Tuple
var address = ["String1", "10"];
var address1 = ["String1", "10", 10];
console.log(address);
console.log(address1);
//Enum
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Red"] = 2] = "Red"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
var OverLoadingColor;
(function (OverLoadingColor) {
    OverLoadingColor[OverLoadingColor["Green"] = 0] = "Green";
    OverLoadingColor[OverLoadingColor["Blue"] = 100] = "Blue";
    OverLoadingColor[OverLoadingColor["Red"] = 101] = "Red"; //2
})(OverLoadingColor || (OverLoadingColor = {}));
var myOverloadedColor = OverLoadingColor.Blue;
console.log(myOverloadedColor); // o/p : 100
console.log(OverLoadingColor.Red); // o/p : 101 Note: it's increamenting by 1, if we want to specific number we need to assign number explicitly 
//Any
var car = ['BMW'];
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
//functions 
function retrunSomething() {
    // return str; // it can return anything
    return num;
}
console.log(retrunSomething());
function returnString() {
    return str;
}
console.log(returnString());
//void
function doSomething() {
    console.log("Hello!!");
}
console.log(doSomething());
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
//function types
var myFunction;
myFunction = doSomething;
myFunction();
myFunction = multiply;
console.log(myFunction(2, 3));
var myFunction1;
// myFunction1 = doSomething;
// myFunction1(); // we can't call this function  void' is not assignable to type '(val1: number, val2: number) => number'
myFunction1 = multiply;
console.log(myFunction(2, 3));
//objects as type
var userData = {
    name: "Ven",
    age: 25
};
console.log(userData);
// userData = {}; //Type '{}' is not assignable to type '{ name: string; age: number; }
/* userData = {
    a = "Ven!!",
    b = 25
} */ // Cannot find name 'a', Type '{ a: any; b: any; }' is not assignable to type '{ name: string; age: number; }'
var userData1 = {
    // name: 25,
    name: "Ven1",
    age: 25
};
console.log(userData1);
// userData1 = {};  Type '{}' is not assignable to type '{ name: string; age: number; }
userData1 = {
    name: "Ven!!",
    age: 25
};
console.log(userData1);
//complex object (putting all togather in a complex object)
var complex = {
    data: [10, 20.99, 30],
    output: function (all) {
        return this.data;
    }
};
console.log(complex);
var complex2 = {
    data: [10, 20.99, 30],
    output: function (all) {
        return this.data;
    }
};
console.log(complex);
//union types 
// Ex: i want my object either accept string or number but not boolean
var myRealBook = 27;
myRealBook = "String";
// myRealBook = true; Type 'true' is not assignable to type 'string | number'
//check types
var obj = "A string";
if (typeof obj == "string") {
    console.log("final value is a string");
}
var obj1 = 3;
if (typeof obj1 == "number") {
    console.log("final value is a number");
}
var obj2 = true;
if (typeof obj2 == "boolean") {
    console.log("final value is a boolean");
}
//never type
function neverReturns() {
    throw new Error('Never Return!');
}
//nullable types (added with ts 2.0)
var canBeNull = 12;
canBeNull = null;
var canAsloBeNull;
canAsloBeNull = null;
// add "strictNullChecks": false/true property based on your need in tsconfig.json
var canBeNull1 = 12;
canBeNull = null;
