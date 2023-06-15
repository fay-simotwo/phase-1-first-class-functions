function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
      // Function logic goes here
    }
  
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
    return function () {
      // Function logic goes here
    };
  }
  