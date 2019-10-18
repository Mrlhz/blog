const fs = require('fs')

function after(times, callback) {
  const arr = []
  return function(err, res) {
    if (err) {
      throw new Error(err)
    }
    arr.push(res)
    if (--times === 0) {
      callback(arr)
    } 
  }
}

const newFn = after(2, function(arr){
  console.log(arr)
})

fs.readFile('./data/name.txt', 'utf8', (err, data) => {
  setTimeout(() => newFn(err, data), 2000)
  
})

fs.readFile('./data/age.txt', 'utf8', (err, data) => {
  newFn(err, data)
})
