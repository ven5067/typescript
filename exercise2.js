"use strict";
// Exercise 1 - Maybe use an Arrow Function?
var double1 = function (value) { return value * 2; };
console.log(double1(10));
// Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
var greet1 = function (name) {
    if (name === void 0) { name = "ven"; }
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
greet1();
greet1("Anna");
// // Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// // Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
// // Exercise 5 - That's a well-constructed array.
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);
var testResults1 = [3.89, 2.99, 1.38];
var val1 = testResults1[0], val2 = testResults1[1], val3 = testResults1[2];
console.log(val1, val2, val3);
// // Exercise 6 - And a well-constructed object!
// var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);
var scientist1 = { firstName: "Will", experience: 12 };
var expc = scientist1.experience, fn = scientist1.firstName;
console.log(expc, fn);
