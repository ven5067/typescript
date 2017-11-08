// Typescript types

//number 
let num : number = 10;
console.log(num);

// String
let str: string = 'Stirng';
console.log(str);

//Array
let numArr: number[] = [10,20];
let strArray: string[] = ["string1", "string2"];
let anyArray: any[] = [10,"Stringt"];

console.log(numArr);
console.log(strArray);
console.log(anyArray);


//Tuple
let address: [string, string] = ["String1", "10"];
let address1: [string, string, number] = ["String1", "10", 10];

console.log(address);
console.log(address1);

//Enum
enum Color{
    Green, //0
    Blue, //1
    Red //2
}

let myColor : Color = Color.Blue;
console.log(myColor);

enum OverLoadingColor{
    Green, //0
    Blue = 100, //1
    Red //2
}

let myOverloadedColor : OverLoadingColor = OverLoadingColor.Blue;
console.log(myOverloadedColor); // o/p : 100
console.log(OverLoadingColor.Red); // o/p : 101 Note: it's increamenting by 1, if we want to specific number we need to assign number explicitly 

//Any
let car: any = ['BMW'];
console.log(car);
car = { brand: 'BMW', series: 3}
console.log(car);

//functions 
function retrunSomething(){
    // return str; // it can return anything
    return num;
}

console.log(retrunSomething());

function returnString(): string{
    return str;
}
console.log(returnString());

//void
function doSomething(): void{
    console.log("Hello!!");
}
console.log(doSomething());

//argument types
function multiply(value1: number, value2: number): number{
    return value1 * value2;
}
console.log(multiply(2,3));

//function types
let myFunction;
myFunction = doSomething;
myFunction();
myFunction = multiply;
console.log(myFunction(2,3));

let myFunction1: (val1: number, val2: number) => number;
// myFunction1 = doSomething;
// myFunction1(); // we can't call this function  void' is not assignable to type '(val1: number, val2: number) => number'
myFunction1= multiply;
console.log(myFunction(2,3));

//objects as type
let userData = {
    name:"Ven",
    age:25
}
console.log(userData);
// userData = {}; //Type '{}' is not assignable to type '{ name: string; age: number; }
/* userData = {
    a = "Ven!!",
    b = 25
} */ // Cannot find name 'a', Type '{ a: any; b: any; }' is not assignable to type '{ name: string; age: number; }'

let userData1: { name: string, age: number} = {
    // name: 25,
    name: "Ven1",
    age:25
}
console.log(userData1);
// userData1 = {};  Type '{}' is not assignable to type '{ name: string; age: number; }
userData1 = {
    name : "Ven!!",
    age : 25
}
console.log(userData1);

//complex object (putting all togather in a complex object)
let complex: { data: number[], output: (all: boolean) => number[]} = {
    data: [10,20.99,30],
    output: function(all:boolean){
        return this.data;
    }
}
console.log(complex);

//creting custom types with type aliases
// type alias
type Complex = { data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [10,20.99,30],
    output: function(all:boolean){
        return this.data;
    }
}
console.log(complex);

//union types 
// Ex: i want my object either accept string or number but not boolean
let myRealBook: string | number = 27;
myRealBook = "String";
// myRealBook = true; Type 'true' is not assignable to type 'string | number'


//check types
let obj = "A string";
if(typeof obj == "string"){
    console.log("final value is a string");
}

let obj1 = 3;
if(typeof obj1 == "number"){
    console.log("final value is a number");
}

let obj2 = true;
if(typeof obj2 == "boolean"){
    console.log("final value is a boolean");
}

//never type
function neverReturns():never {
    throw new Error('Never Return!');
}

//nullable types (added with ts 2.0)
let canBeNull = 12;
canBeNull = null;
let canAsloBeNull;
canAsloBeNull = null
// add "strictNullChecks": false/true property based on your need in tsconfig.json

let canBeNull1: number | null = 12;
canBeNull = null;