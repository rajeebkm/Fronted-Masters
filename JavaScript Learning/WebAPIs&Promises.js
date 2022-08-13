const fetch = require("node-fetch");

function display(data) {
  console.log(data);
}

function printHello() {
  console.log("Hello");
}

function blockFor300ms() {}

setTimeout(printHello, 0);

const futureData = fetch("");
futureData.then(display);

blockFor300ms();
console.log("Me First");
