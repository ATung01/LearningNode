// index.js

require('./app/index')
const lD = require('lodash')

console.log(lD.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }));


const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
