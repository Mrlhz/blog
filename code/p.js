/**
 * `1. 回调嵌套，回调地狱`
 * `2. 不好捕获错误`
 * `3. 多个异步同步的问题`
 */

const fs = require('fs')
const path = require('path')

const Promise1 = require('./promise')

function nativePromise() {
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
}

function testPromise1() {
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
    console.log('e', e)
  })
}

function testPromise2() {
  const promise = new Promise1((resolve, reject) => {
    resolve(123)
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

  let promise2 = promise.then((value) => {
    console.log('success1', value)
    // return 100
    return value + 1
  }, (err) => {
    console.log('fail1', err)
  });

  promise2.then((res) => {
    console.log('res', res);
    return 101102
  }, (e) => {
    console.log('e', e);
  }).then((res) => {
    console.log('res', res);
  })
}

function readFile(filePath) {
  return new Promise1((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function testPromise3() {
  readFile(path.resolve(__dirname, './data/name.txt')).then((data) => {
    console.log(data)
  })
}


// typeError
function testPromiseTypeError() {
  let p = new Promise((resolve, reject) => {
    resolve()
  })

  let p1 = p.then(() => {
    return p1
  })

  p1.then(() => {

  }, (e) => {
    console.log(e)
  })
}

function testPromiseFinally (){
  new Promise1((resolve, reject) => {
    resolve(100)
    // reject(100)
    // bug ?
  })
  .finally(() => {
    return new Promise1((resolve, reject) => {
      setTimeout(() => {
        console.log('test finally')
        resolve()
      }, 3000)
    })
  })
  .then((data) => {
    console.log('data', data)
  }, (e) => {
    console.log('e', e)
  })
}

function testPromiseAll() {

  Promise1.all([readFile('./data/name.txt', 'utf8'), readFile('./data/age.txt', 'utf8'), 1, 'str'])
  .then((data) => {
    console.log(data)
  })
  .catch((e) => {
    console.log(e)
  })
}

// testPromise1()
// testPromise2()
// testPromise3()
// testPromiseTypeError()
// testPromiseFinally()
testPromiseAll()