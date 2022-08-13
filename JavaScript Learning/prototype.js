function workshop(teacher) {
  this.teacher = teacher;
}

workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepjs = new workshop("kyle");
var reachjs = new workshop("satyam");

deepjs.ask("why man ?");
reachjs.ask("what?");
