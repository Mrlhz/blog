const fs = require('fs')

const { list } = require('./all')

console.log(list)

const data = list.map((item) => {
  return `- ${item}`
}).join('\n')

fs.writeFile('./readme.md', data, 'utf8', (err) => {
  console.log(err)
})