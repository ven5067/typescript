// Exercise 1 - How was your TypeScript Class?
// function Car1(name) {
//     this.name = name;
//     this.acceleration = 0;
 
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
 
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
class Car {
    // public acceleration: number = 0;
    constructor(public name: string, public acceleration: number = 0){}
    honk(){
        console.log("Toooooooooooot!");
    }
    accelerate(speed: number){
        this.acceleration = this.acceleration + speed;
    }
}
let car1 = new Car("BMW");
car1.honk();
car1.accelerate(10);
console.log(car1.acceleration);

 
// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
 

class BaseObject {
    constructor(public width: number, public length: number){}
}

class Rectangle extends BaseObject{
    calcSize(){
        return this.width * this.length;
    }
}
console.log(new Rectangle(3,4).calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class Person{
    private _firstName: string = "";
    
    constructor(){}
    
    set setName(name: string){
        if (name.length > 3) {
            this._firstName = name;
        }
        else {
            this._firstName = "";
        }
    }

    get getName(){
        return this._firstName;
    }

}

let person: Person = new Person();
person.setName = "AB";
console.log(person.getName) ;
person.setName = "ABCD";
console.log(person.getName) ;
