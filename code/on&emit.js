const fs = require('fs')

/**
 * `发布订阅`
 */
function Event() {
  this.callbacks = []
  this.results = []
}

// 订阅
Event.prototype.on = function (callback) {
  this.callbacks.push(callback)
}

// 发布
Event.prototype.emit = function (data) {
  this.results.push(data)
  this.callbacks.forEach((callback) => callback(this.results))
}


const e = new Event()

e.on(function (arr) {
  if (arr.length === 2) {
    console.log(arr)
  }
})

fs.readFile('./data/name.txt', 'utf8', (err, data) => {
  e.emit(data)
})

fs.readFile('./data/age.txt', 'utf8', (err, data) => {
  e.emit(data)
})