function outer(counter) {
  let counters = counter;
  function incrementCounter() {
    counters += 2;
    console.log(counters);
  }
  return incrementCounter;
}

var result = outer(5);

result();
