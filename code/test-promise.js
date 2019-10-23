// const promisesAplusTests = require('D:/web/puppeteer/node_modules/promises-aplus-tests')

const Promise1 = require('./promise')

Promise1.defer = Promise1.deferred = function() {
  let dfd = {}
  dfd.promise = new Promise1((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })

  return dfd
}

module.exports = Promise1

// run
// npx promises-aplus-tests test-promise.js

// or
// npm i promises-aplus-tests -g
// promises-aplus-tests test-promise.js