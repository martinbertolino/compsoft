'use strict'

const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
    const afterG = g(x);
    const afterF = f(afterG);
    return afterF;
}

console.log(doStuff(20));

const wait = time => new Promise((resolve, reject) => {
    setTimeout(resolve, time);
});

wait(500)
    .then(() => 20)
    .then(g)
    .then(f)
    .then(value => console.log(`from promise ${value}`));

const trace = label => value => {
    console.log(`${label} : ${value}`);
    return value;
}

const doStuff2 = x => {
    const afterG = g(x);
    trace('after g')(afterG);
    const afterF = f(afterG);
    trace('after f')(afterF);
    return afterF;
}

console.log(doStuff2(20));

// import { pipe } from 'lodash/fp/flow';
// const flow = require('lodash/fp/flow');
const _ = require('lodash/fp');

const doStuffBetter = _.pipe(
    g,
    trace('pipe after g'),
    f,
    trace('pipe after g')
);

console.log(`do stuff better ${doStuffBetter(20)}`);
