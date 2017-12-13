const fs = require('fs')
answer = 'A: start reading a file...'

console.log('start reading a file...')

fs.readFile('file.md', 'utf-8', function (err, content) {
  if (err) {
    console.log('error happened during reading the file')
    answer += 'A: error happened during reading the file'
    return console.log(err)
  }

  console.log(content)
  answer += content
})

console.log('end of the file')
answer += 'A: end of the file'

module.exports.answer = answer
