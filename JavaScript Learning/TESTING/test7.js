function workshopModule(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
}

var workshop = workshopModule("Kyle");
workshop.ask("What are  you doing ?");
