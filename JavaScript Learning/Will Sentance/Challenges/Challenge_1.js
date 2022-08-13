// CHALLENGE 1
function createFunction() {
  function printHello() {
    console.log("hello");
  }
  return printHello;
}

/*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');
