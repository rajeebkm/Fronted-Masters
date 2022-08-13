function ask(question) {
  console.log(question);
}

ask("How are you ?");

// pointing to global object
//---------------------------------//

var teacher = {
  name: "Kyle",
};

function ask1(question) {
  console.log(teacher.name, question);
}

function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}

ask1("What is non-strict mode default ?");
askAgain("What is strict mode default ?");

//Output:
// How are you ?
// undefined What is non-strict mode default ?
//Cannot read properties of undefined (reading 'teacher')
