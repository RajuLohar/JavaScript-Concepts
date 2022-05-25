// function add(x, y) {
//     if (typeof x !== 'number') {
//       throw 'The first argument must be a number';
//     }
//     if (typeof y !== 'number') {
//       throw 'The second argument must be a number';
//     }
  
//     return x + y;
//   }
  
//   try {
//     const result = add('a', 10);
//     console.log(result);
//   } catch (e) {
//     console.log("error:",e);
//   }



//   //generators
//   function* yieldAndReturn() {
//     yield "Y";
//     return "R";
//     yield "unreachable";
//     }

//     var gen = yieldAndReturn()
//     console.log(gen.next());
//     console.log(gen.next());
//     console.log(gen.next());


    //custom errors

    class ValidationError extends Error {
      constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
      }
    }
    
    function test() {
      throw new ValidationError("Whoops!");
    }
    
    try {
      test();
    } catch(err) {
      console.log(err.message); // Whoops!
      console.log(err.name); // ValidationError
      console.log(err.stack); // a list of nested calls with line numbers for each
    }