// Arrow functions use “lexical scoping” to figure out what the value of this should be. Lexical scoping is a fancy way of saying it uses “this” from the outer function in which it is defined.

function outer() {
  let inner = () => {
    console.log(this);
  };
  inner();
}

const objA = {
  someKey: 1,
  outer: outer,
};
const objB = {
  someKey: 2,
};

// In this example, each time when inner function is called,
// JS simply takes the this value from outer function
outer(); // Window {}
objA.outer(); // {someKey: 1, outer: ƒ} --> objA
outer.call(objB); // {someKey: 2} --> objB

console.log("---------------------------------");

var object = {
  name: "Raj, ",
  age: 30,
  askQuestion(question) {
    setTimeout(() => {
      console.log(this.name, question);
    }, 2000);
  },
};

object.askQuestion("What are you doing ?");

//------------------------//

var object = {
  name: "Raj, ",
  age: 30,
  ask: (question) => {
    console.log(this.name, question); //Here this referes to global scope as object is not a scope and properties are also scope
    //Here only two scope, ask function scope, and globalscope
  },
};

object.ask("What are you doing ?");
object.ask.call(object, "What are you doing ?");

//output:
//undefined What are you doing ?
// undefined What are you doing ?
