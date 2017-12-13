// index.js

require('./app/index')
const lD = require('lodash')

console.log(lD.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }));
