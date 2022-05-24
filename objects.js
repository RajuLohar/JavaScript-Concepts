

//Ref : https://www.javascripttutorial.net/

// function Person(firstName,lastName){  // if call with new return object
//     this.firstName= firstName,
//     this.lastName=lastName

//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     };
// }

// let person = {
    
//     firstName: "firstName",
//     lastName:"lastName",

//     greet: function () {
//         console.log('Hello, World!');
//     },
//     getFullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// const newPerson = new Person("firstName","lastName");
// // console.log(newPerson);
// // console.log(newPerson.getFullName());

// // console.log(person.prototype);
// // console.log(Object.prototype); // can be used in browser

// let teacher = Object.create(person, {   //JavaScript Prototypal Inheritance
//     name: { value: 'John Doe' } ,
//     teach: { value: function(subject) {
//         return "I can teach " + subject;
//     }}
// });

// teacher.name="abcd";

// console.log(teacher.greet());

// this.a="b";
// console.log(this.a);

// function Car(brand) {
//     if (!new.target) {
//         throw Error('Must use the new operator to call the function');
//     }
//     this.brand = brand;
// }

// Car.prototype.getBrand = function () {
//     return this.brand;
// }

// var bmw =new Car('BMW');
// console.log(bmw.brand);


// function getBrand(prefix) {
//     console.log(prefix + this.brand);
// }

// let honda = {
//     brand: 'Honda'
// };
// let audi = {
//     brand: 'Audi'
// };

// getBrand.apply(honda, ["It's a ","It's a "]);  // sends array to the function
// getBrand.call(audi, "It's an "); // sends value seprated by comma


// console.log(globalThis);

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

// Object.defineProperty(person, 'fullName', {
//     get: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function (value) {
//         let parts = value.split(' ');
//         if (parts.length == 2) {
//             this.firstName = parts[0];
//             this.lastName = parts[1];
//         } else {
//             throw 'Invalid name format';
//         }
//     },
//     name: {
//         value: 'Smartphone'
//     },
//     price: {
//         value: 799
//     },
//     tax: {
//         value: 0.1
//     },
//     netPrice: {
//         get: function () {
//             return this.price * (1 + this.tax);
//         }
//     }
// });
// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

// Object.defineProperty(person, 'ssn', {
//     enumerable: false,
//     configurable: false,
//     value: '012-38-9119'
// });


// console.log(descriptor);

// for (const key in person) {              //getting values per iteration
//     if (person.hasOwnProperty(key)) {
//         const value = person[key];
//         console.log(value);

//     }
// }

// const profile = Object.values(person);
// console.log(profile); //returns array of values

// for (const key in person) {  
//     console.log(key);
// }

// console.log(Object.entries(person));  //object entries

//factory function when we created object using functions

let { firstName, lastName ,age} = person;  //object destructring
console.log(firstName);

// console.log(person?.abcd);
function createMachine(name, status) {  //object literal expressions
    return {
        name: name,
        status: status
    };
}

console.log(createMachine('a','b'));



