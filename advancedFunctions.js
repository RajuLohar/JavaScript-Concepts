// let cat = { type: 'Cat', sound: 'Meow' };
// let dog = { type: 'Dog', sound: 'Woof' };

// const say = function (message) {
//   console.log(message);
//   console.log(this.type + ' says ' + this.sound);
// };

// say.call(cat, 'What does a cat say?');  //expect argument
// say.apply(dog, ['What does a dog say?']);  //expect array


// let car = {
//     speed: 5,
//     start: function() {
//         console.log('Start with ' + this.speed + ' km/h');
//     }
// };
// let aircraft = {
//     speed: 11,
//     fly: function() {
//         console.log('Flying');
//     }
// };

// let taxiing = car.start.bind(aircraft);  //return function
// //bind change the this value of car to aircraft

// taxiing();
// car.start.call(aircraft);

// function greeting(message) {            //closures
//     return function(name){
//          return message + ' ' + name;
//     }
//  }
//  let sayHi = greeting('Hi');
//  let sayHello = greeting('Hello');
 
//  console.log(sayHi('John')); // Hi John
//  console.log(sayHello('John')); // Hello John


//  let sum = (function(a,b){          //immediate calling function
//     return a + b;
// })(10, 20);

// console.log(sum);

// function getNames() {           //return multiple values
//     // get names from the database or API
//     let firstName = 'John',
//         lastName  = 'Doe';
  
//     return { firstName, lastName };
//   }

//   let names = getNames();

// let firstName = names.firstName,
//     lastName  = names.lastName;

//     // let { firstName, lastName } = getNames();  //object destructuring

//     console.log(firstName);



//     let numbers = [4,2,6]; //arrow functions
// numbers.sort((a,b) => b - a);
// console.log(numbers); 

// function isEven(value){
//     if(value%2==0) return value;
//     else return 0; 
// }

// function add(...args){  //Rest parameter
//     let sum=0;
//     for(const a of args){
//         sum+=isEven(a);     
//     }
//     console.log(sum);
// }

// add(9,8,8);

function download(url, success, failure) {
    setTimeout(() => {
      console.log(`Downloading the picture from ${url} ...`);
      !url ? failure(url) : success(url);
    }, 1000);
  }
  
  download(
    '',
    (url) => console.log(`Processing the picture ${url}`),
    (url) => console.log(`The '${url}' is not valid`)
  );