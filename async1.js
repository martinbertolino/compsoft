'use strict';

const axios = require('axios');

const getRandomInt = (minimum, maximum) => {
  return minimum + Math.floor(Math.random() * Math.floor(maximum - minimum));
}

const randomUrlPart = getRandomInt(1, 50);
const theUrl = `https://jsonplaceholder.typicode.com/todos/${randomUrlPart}`;

console.log('start');

const result = (async () => {
  try {
    let result = await axios.get(theUrl);
    return result.data;
  } catch (error) {
    console.error(error);
  }
})(); //  needs a ; here!

//  at this point the promise is still pending
console.log(result);

(async () => {
  console.log(await result);
})();

axios
  .get(theUrl)
  .then(response => {
    console.log(`response ${response.data}`);
  })
  .catch(error => {
    console.error(error);
  });

console.log('end');
