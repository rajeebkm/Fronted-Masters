var workshop = {
  teacher: "Kyle, ",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What are you doing ?");

//Here this referes to workshop oject
//when the ask function is invoked, how does it figure out what the this word should point at?, and
//the answer is Beacuase of the call site, the this keyword gonna end up pointing at the object workshop, that is used to invoke it at line 8, is the workshop object.
//Implicit Binding is applied when you invoke a function in an Object using the dot notation. this in such scenarios will point to the object using which the function was invoked. Or simply the object on the left side of the dot.

//...............Dynamic Binding....................//

function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask,
};

var workshop2 = {
  teacher: "Raj",
  ask: ask,
};

workshop1.ask("What are you doing ?");
workshop2.ask("What are you doing ?");

//The idea of lexical scope is a very fixed, predictable thing. It is defined at author time/compile time, nothing about the run time can ever change that.
// Here, it is not fixed or predictable. It’s entirely dynamic/flexible. It is entirely determined at run time. Being able to share one function across different contexts.

// //2.1 Nested Function

// When a function is nested inside a method of an object, the context of the inner function depends only on its invocation type and not on the outer function’s context.

const obj = {
  someKey: 1,
  outer: function () {
    function inner() {
      console.log(this);
    }
    inner(); //involked as default binding here
  },
};

obj.outer();

//Output:
//window{}

//2.2 Method separated from the object

//When we copy an object method to a new variable, we are creating a reference to the function.

function myFunction() {
  console.log(this);
}

const obj2 = {
  someKey: 1,
  myFunction: myFunction,
};

const newFunction = obj2.myFunction;
newFunction();
//Output:
//window{}
