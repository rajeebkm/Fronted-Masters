function once(func) {
  let counter = 0;
  let res = undefined;
  function runOnce(num) {
    if (counter === 0) {
      res = func(num);
      counter++;
    }

    return res;
  }
  return runOnce;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6
