'use strict';

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

wait(250)
    .then(() => 20)
    .then(g)
    .then(f)
    .then(value => console.log(`from promise ${value}`));

const trace = label => value => {
    console.log(`${label} : ${value}`);
    return value;
}

wait(250)
    .then(() => 20)
    .then(trace('promise initial value'))
    .then(g)
    .then(trace('promise after g'))
    .then(f)
    .then(trace('promise after f'))
    .then(value => console.log(`from traced promise ${value}`));

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

const pipeN = (...fns) => x => fns.reduce((y, f) => f(y), x);

const doStuffBetterN = pipeN(
    g,
    trace('pipe after g N'),
    f,
    trace('pipe after g N')
);

console.log(`do stuff better N ${doStuffBetterN(20)}`);

//  object composition

//  primitives

const firstName = 'Claude';
const lastName = 'Debussy';

//  composite

const fullName = {
    firstName,
    lastName
};

console.log(fullName);

//  composites through inheritance

class Foo {
    constructor() {
        this.a = 'a';
    }
}

class Bar extends Foo {
    constructor(options) {
        super(options);
        this.b = 'b';
    }
}

const myBar = new Bar();

console.log(`myBar: ${myBar}`);
console.log(`myBar: ${JSON.stringify(myBar)}`);

//  composites through mixin

const Ma = { a: 'a' };
const Mb = { b: 'b' };
const Mc = { c: 'c' };

const Mcomp = { ...Ma, ...Mb, ...Mc };

console.log(`Mcomp: ${JSON.stringify(Mcomp)}`);

//  not really immutable...
Mcomp.a = '123456';

console.log(`Mcomp': ${JSON.stringify(Mcomp)}`);

