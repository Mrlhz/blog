/**
 * `1. 回调嵌套，回调地狱`
 * `2. 不好捕获错误`
 * `3. 多个异步同步的问题`
 */

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

const promise = new Promise((resolve, reject) => {
  console.log('start')
  resolve(100)
  console.log('end')
})

promise.then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

const Promise1 = require('./promise')

let p1 = new Promise1((resolve, reject) => {
  resolve()
})

let p2 = p1.then((data) => {
  return new Promise1((resolve, reject) => {
    reject(102)
  })
})

p2.then((data) => {
  console.log(data)
}, (e) => {
  console.log(e, 'e')
})


const fs = require('fs')
const path = require('path')

const promise1 = new Promise1((resolve, reject) => {
  // resolve(123)
  // reject(456)

  // setTimeout(() => {
  //   resolve('成功')
  // }, 1500)

  setTimeout(() => {
    resolve('why')
  }, 100)

  // setTimeout(() => {
  //   throw new Error('error')
  // }, 500)

})

// let promise2 = promise.then((value) => {
//   console.log('success1', value)
//   // return 100
//   return value + 1
// }, (err) => {
//   console.log('fail1', err)
// });

// promise2.then((res) => {
//   console.log('res', res);
//   return 101
// }, (e) => {
//   console.log('e', e);
// }).then((res) => {
//   console.log(res);
// })


// function readFile(filePath) {
//   return new Promise1((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) reject(err)
//       resolve(data)
//     })
//   })
// }


// readFile(path.resolve(__dirname, './data/name.txt')).then((data) => {
//   console.log(data)
// })


// typeError

// let p = new Promise((resolve, reject) => {
//   resolve()
// })

// let p1 = p.then(() => {
//   return p1
// })

// p1.then(() => {

// }, (e) => {
//   console.log(e)
// })