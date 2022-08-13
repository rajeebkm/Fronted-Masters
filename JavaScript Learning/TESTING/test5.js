// "use strict";

var teacher = "Rajeeb";
function otherClass() {
  var teacher = "Ram, ";
  function ask(parameter) {
    console.log(teacher, parameter);
  }
  ask("What are you doing ?");
}

otherClass();
// ask("????");
