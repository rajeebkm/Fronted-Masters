//Implicit Binding
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("Why ?");

//Explicit Binding

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var newObject = {
    teacher: "Kyle",
  };
  ask.call(newObject, "Why ?");
}

otherClass();
