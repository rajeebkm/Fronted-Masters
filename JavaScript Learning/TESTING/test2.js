function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
function increment() {
  newUser.score++;
}

const user1 = userCreator("Rajeeb", "100");
const user2 = userCreator("Rajesh", "50");
console.log(user2.score);
