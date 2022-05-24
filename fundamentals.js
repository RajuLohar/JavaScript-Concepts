
//Ref : https://www.javascripttutorial.net/


//Variables : var,let,const

// var message="abcd"; // now it is global scope
// let a=function(){
//     {
//         var message2="abcd"; //now it is functional scope
//         console.log(message);

//     }
// }
// console.log(message2);

// ------------------------------------------------------------------------------------------------------------------------------------
//let and const 
// const b="vgh";
// let a=function(){
//     let message="abcd"; // functional scope
//     {
//         console.log(message);
//         console.log(b);
//     }        
// }
// a();
// ------------------------------------------------------------------------------------------------------------------------------
// console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
// JavaScript has the primitive types: number, string, boolean, null, undefined, symbol and bigint and a complex type: object.

// --------------------------------------------------------------------------------------------------------------------------------

/* 

//Numbers

let numInBinary=0b101;
console.log(numInBinary);

let numInOctal=0o6111;  //octal number should be less than 8
console.log(numInOctal); //3145


let numInHexa =0xa1b2;  //hexa number (0 through 9, and a through f)
console.log(numInHexa); //41394

let numInfloat = 55e8;  // e8 = 10^8 = 10,00,00,000
let numInfloatSmall = 55e-8;  // e8 = 10^-8 = 0.000,00,001
console.log(numInfloat); //5500000000
console.log(numInfloatSmall); //5.5e-7

*/

// let e = parseInt('111',12); //parse Integer
// console.log(e); // 7

//Object and string

// let str = 'I\'m a string!';
// console.log(str);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// console.log(person.firstName); // access property
// console.log('firstName' in person); //if property exist or not


//reference type

// let person = {
//     name: 'John',
//     age: 27,
//   };
  
//   let member = person;
  
//   member.age = 26;
//   person.name='Saas'; // change both the object if once is modified
  
//   console.log(person);
//   console.log(member);

// let scores =  Array(1, 2, 3); // create an array with three numbers 1,2 3

// console.log(scores.length);
// scores[2]=6;
// console.log(scores);

// let user = {
//     username: 'Satoshi'
// };
// user.nickname ??= 'anonymous';

// console.log(user);
