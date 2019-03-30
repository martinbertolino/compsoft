'use strict';

var initialValue = 0;

let genFunc1 = () => {
  return () => {
    initialValue++;
    return initialValue;
  };
};

let genFunc2 = () => {
  return () => {
    initialValue++;
    return initialValue;
  };
};

let genFunc3 = () => {
  var theValue = 0;
  return () => {
    theValue++;
    return theValue;
  };
};

let func1 = genFunc1();
let func2 = genFunc2();

console.log(`func1: ${func1()}`);
console.log(`func2: ${func2()}`);
console.log(`func1: ${func1()}`);
console.log(`func2: ${func2()}`);
console.log(`func1: ${func1()}`);
console.log(`func2: ${func2()}`);

console.log('###################################');

let func3 = genFunc3();
let func4 = genFunc3();

console.log(`func3: ${func3()}`);
console.log(`func4: ${func4()}`);
console.log(`func3: ${func3()}`);
console.log(`func4: ${func4()}`);
console.log(`func3: ${func3()}`);
console.log(`func4: ${func4()}`);
