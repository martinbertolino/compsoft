"use strict";

const getRandomInt = (minimum, maximum) => {
  return minimum + Math.floor(Math.random() * Math.floor(maximum - minimum));
};

const randomUrlPart = getRandomInt(1, 50);
const theUrl = `https://jsonplaceholder.typicode.com/todos/${randomUrlPart}`;

const fetch = require("fetch");

function fetchData(url) {
  const promise = new Promise((resolve, reject) => {
    fetch.fetchUrl(url, (error, meta, body) => {
      if (error) {
        reject(error);
      } else {
        const data = Buffer.from(body).toString();
        // const data = Buffer.from(body).toJSON();
        resolve(data);
      }
    });
  });
  return promise;
}

async function getData() {
  const url = theUrl;
  const response = await fetchData(url);
  console.log(response);
}

getData();
