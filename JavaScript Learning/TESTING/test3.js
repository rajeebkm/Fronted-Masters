class userCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    console.log("Eva scored" + " " + this.score++);
  }
  login() {
    console.log("Login Successful");
  }
}

const user1 = new userCreator("Eva", 60);

user1.increment();
user1.login();
