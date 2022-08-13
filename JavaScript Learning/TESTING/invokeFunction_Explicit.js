//....................Explicit Binding/Indirect Invocation......................//

function ask(question1, question2) {
  console.log(this.teacher, question1);
  console.log(this.teacher, question2);
}

var workshop = {
  teacher: "Kyle",
};

const arguments1 = "What are you doning ?";
const arguments2 = "What is in your Breakfast ?";
ask.call(workshop, arguments1, arguments2);
ask.apply(workshop, [arguments1, arguments2]);

var boundFunction = ask.bind(workshop, arguments1, arguments2); //Create a new bound function same as ask
boundFunction();
