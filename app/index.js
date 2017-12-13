// app/index.js
const calc = require('./calc')
// const readingFile = require('./readingFile')



const numbersToAdd = [
  3,
  4,
  10,
  2
]

const result = calc.sum(numbersToAdd)
// const rFile = readingFile.answer
console.log(`The result is: ${result}`)
// console.log(rFile)
