// function getUsers() {            //using catch
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           reject(["error"]);
//         resolve([
//           { username: 'john', email: 'john@test.com' },
//           { username: 'jane', email: 'jane@test.com' },
//         ]);
//       }, 1000);
//     });
//   }
  
//   function onFulfilled(users) {
//     console.log(users);
//   }
// function onRejected(error) {
//   console.log(error);
// }
  
//   const promise = getUsers();
//   promise
//   .then(onFulfilled)
//   .catch(e=>{
//       console.log("error");
//   }).finally(()=>{
//       console.log("promises is over");
//   });

// promise.then(onFulfilled, onRejected);//another way to call 



// const p1 = new Promise((resolve, reject) => {   ///promises all
//     setTimeout(() => {
//       console.log('The first promise has resolved');
//       resolve(10);
//     }, 1 * 1000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(20);
//     //   console.log('The second promise has resolved');
//     }, 2 * 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The third promise has resolved');
//       resolve(30);
//     }, 3 * 1000);
//   });
  
//   Promise.all([p1, p2, p3]).then((results) => {  //when all are completed
//     const total = results.reduce((p, c) => p + c);
  
//     console.log(`Results: ${results}`);
//     console.log(`Total: ${total}`);
//   }).catch(()=>{
//       console.log("rejected");
//   });

//   Promise.race([p1, p2, p3]).then((results) => {     //when any promise is completd at the earliest
//     // const total = results.reduce((p, c) => p + c);
  
//     console.log(`Resolved`);
//     // console.log(`Total: ${total}`);
//   }).catch(()=>{
//       console.log("rejected");
//   });

//   Promise.any([p1, p2, p3]).then((results) => {     //When any promises is resolved
//     // const total = results.reduce((p, c) => p + c);
  
//     console.log(`Resolved`);
//     // console.log(`Total: ${total}`);
//   }).catch(()=>{
//       console.log("rejected");
//   });

//     Promise.allSettled([p1, p2, p3]).then((results) => {     //When all promises are reolsved returns array with status an value
//         // const total = results.reduce((p, c) => p + c);
      
//         console.log(`Resolved`);
//         // console.log(`Total: ${total}`);
//       }).catch(()=>{
//           console.log("rejected");
//       });


async function getUser(userId) {
    try {
        console.log("found user");
    //    const user = await Promise.reject(new Error('Invalid User Id'));
    } catch(error) {
       console.log(error);
    }
}

async function getServices() {
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve();
            // reject();
            console.log("looking");
        },1000)    
    }) 
}




async function showServiceCost() {
    try {
        let services = await getServices();
       let user = await getUser();
          console.log(`The service cost is $ 1000`);
    } catch(error) {
       console.log("error called");
    }
}

showServiceCost() ;

