'use strict';

//  shared state
const x = {
  val: 2,
};

const x1 = () => (x.val += 1);
const x2 = () => (x.val *= 2);

x1();
x2();

console.log(x.val);

//  shared state
const y = {
  val: 2,
};

const y1 = () => (y.val += 1);
const y2 = () => (y.val *= 2);

//  order reversed
y2();
y1();

console.log(y.val);

//  functors
//  A functor is a map between categories
//  A functor is a container of type a that, when subjected to a function that maps from a -> b, yields a container of type b
//  For example, if we have a list of bananas and a function that maps from bananas to apples, we can now have a list of apples
//  Data structures that support map function (list, tree, vector) are functors

{
  const double = n => n * 2;
  const doubleMap = numbers => numbers.map(double);
  console.log(doubleMap([2, 3, 4]));
}

{
  const double = n => n.points * 2;
  const doubleMap = numbers => numbers.map(double);
  const functor = [
    {name: 'ball', points: 2},
    {name: 'coin', points: 3},
    {name: 'candy', points: 4},
  ];
  console.log(doubleMap(functor));
}
