function employeeDetails() {
  var name = "Prayag";
  var age = "30 Years";
  var designation = "Blockchain Developer";
  var Experience = "5 Years";
  var salary = 126800;

  function calculateBonus(bonus) {
    salary = salary + bonus;
    console.log("Salary after bonus: " + "Rs." + salary + "/- only");
  }
  return {
    name: name,
    age: age,
    designation: designation,
    Experience: Experience,
    calculateBonus: calculateBonus,
  };
}

var employee = employeeDetails();
employee.calculateBonus(30000);

//salary can't be accessed from outerscope as its private to employeeDetails
