class workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepjs = new workshop("kyle");
var reactjs = new workshop("Shyam");

deepjs.ask("How are you ?");
reactjs.ask("What are you doing ?");
