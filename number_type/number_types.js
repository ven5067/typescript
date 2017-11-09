"use strict";
var num1 = 10;
console.log(num1);
num1 = 20;
console.log(num1);
// num1 = "20"; // Type '"20"' is not assignable to type 'number'
/* Problem */
var num2;
num2 = "20"; // Here we are assigning a string value
console.log(num2);
num2 = 20; // Here we are re-assigning a number to the same variable
console.log(num2);
/* Soloution */
var num3;
// num3 = "20"; //Type '"20"' is not assignable to type 'number'
num3 = 20;
console.log(num3);
