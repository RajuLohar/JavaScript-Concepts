
//Ref : https://www.javascripttutorial.net/

// class vs custom type
// class declarations are not hoisted like function declarations.
// all the code inside a class automatically executes in the strict mode. And you cannot change this behavior.
//class methods are non-enumerable. If you use a constructor/prototype pattern, you have to use the Object.defineProperty() method to make a property non-enumerable.
//calling the class constructor without the new operator will result in an error as shown in the following example.
/*
let functionName="name"; //can name the function on runtime
class Person {
    constructor(name) {
        this._name = name;
    }

    get name(){   //getter
        return this._name
    }

    // get [functionName]() {          //[] to assign the name of the functions
    //     return `${this._name} `;
    //   }

    set name(name){   //setter
        name=name.trim();
        if(name === "" || undefined)
            throw "name cannot be null";
        return this._name=name;
    }
}



function factory(newClass,data){    //factory function to create instance of class
    return new newClass(data);
}

let person1=factory(Person,"Raju");  //calling factory functions

const person = new Person("Sunit");
console.log(person1.name);            //getter call
// console.log(person.name=" a");          // setter call




let app = new class {               //singleton class which is only 1 instance thorough out the app
    constructor(name) {             //called as class expression
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');  //calling class immediately after creating it
app.start();  //calling singleton class function

*/


// //Extends ,super and static
// class Animal {

//     constructor(legs) {
//         if(new.target.name === 'Animal') throw "cannot create instance of Animal"
//         this.legs = legs;
//     }
//     walk() {
//         console.log('walking on ' + this.legs + ' legs');
//     }
//     static helloWorld() {
//         console.log('Hello World');
//     }
// }

// class Bird extends Animal {
//     fly() {
//         console.log('flying');
//     }
// }

// const pigeon = new Bird(2);
// // pigeon.walk();
// // pigeon.fly();
// // Bird.helloWorld();
// console.log(pigeon instanceof Animal);


// class Circle {      //released in ES2022 private variables 
//     #radius = 0;
//     static #count = 0;
//     constructor(radius) {
//       this.radius = radius;
//       Circle.#count++;
//     }
//     get area() {
//       return Math.PI * Math.pow(this.radius, 2);
//     }
//     set radius(value) {
//       if (typeof value === 'number' && value > 0) {
//         this.#radius = value;
//       } else {
//         throw 'The radius must be a positive number';
//       }
//     }
//     get radius() {
//       return this.#radius;
//     }
//     static hasRadius(circle) {           //static function to check private is present or not
//       return #radius in circle;
//     }
//     static getCount() {            
//       return Circle.#count;
//     }
//   }

//   let circles = [new Circle(10), new Circle(20), new Circle(30)];

// console.log(Circle.getCount());



