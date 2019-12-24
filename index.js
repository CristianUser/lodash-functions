"use strict";

const { _reduce, _filter, _get, _set, _some } = require("./utils"),
  testArray = [12, 5, 3, 6, 78],
  users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    { id: 12, name: 'Adam', age: 17, group: 'editor' },
    { id: 48, name: 'John', age: 24, group: 'admin' },
    { id: 86, name: 'William', age: 12, group: 'editor' },
    { id: 98, name: 'Oliver', age: 16, group: 'admin' },
    { id: 99, name: 'Willson', age: 25, group: 'admin' }
  ];
console.log(_reduce(users, (prev, curr) => {
  if(!_some(prev,({ name }) => name === curr.name) && curr.group === 'admin' && curr.age >= 18){
    prev.push(curr)
  }
return prev;
}, []));