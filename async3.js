"use strict";

const readline = require("readline");
const fs = require("fs");

function countLines(filename) {
  const promise = new Promise((resolve, reject) => {
    try {
      const rl = readline.createInterface({
        input: fs.createReadStream(filename)
      });
      let lineCount = 0;
      rl.on("line", _ => {
        lineCount++;
      });
      rl.on("close", () => {
        resolve(lineCount);
      });
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}

async function doCount(filename) {
  const lc = await countLines(filename);
  console.log(`line count for ${filename} is ${lc}`);
  return lc;
}

const p1 = doCount("./async1.js");
const p2 = doCount("./async2.js");
const p3 = doCount("./async3.js");

Promise.all([p1, p2, p3]).then(values => {
  console.log(values);
});

//  end
