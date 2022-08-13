//............Function without return..................//
// JS internally creates an object and refers it as this

// User explicitly adds required properties and methods to the object
function ask(question) {
  this.name = "Kyle";
  this.inner = function innerFunction() {
    console.log(this.inner);
  };
}

var obj = new ask("What are you doing ?");
console.log(obj);

// ask { name: 'Kyle', inner: [Function: innerFunction] } with ask prototype

//..................Function with return........................//

function ask1(question1) {
  this.age = 30;
  return {
    name: "Kyle",
  };
}

var obj1 = new ask1("How are you ?");
console.log(obj1);
