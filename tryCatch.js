function add(x, y) {
    if (typeof x !== 'number') {
      throw 'The first argument must be a number';
    }
    if (typeof y !== 'number') {
      throw 'The second argument must be a number';
    }
  
    return x + y;
  }
  
  try {
    const result = add('a', 10);
    console.log(result);
  } catch (e) {
    console.log("error:",e);
  }



  //genrators
  function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
    }

    var gen = yieldAndReturn()
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());