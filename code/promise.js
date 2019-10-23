/**
 * Promise 是一个类 new Promise
 * Promise 含义： 承诺 promise 三个状态 成功，失败，等待 pending, fulfilled, rejected
 * promise中存放两个变量，value和reason
 * promise的实例上会有then方法
 * 当创建一个promise的时候，需要提供一个执行器函数，此函数会立即执行
 * 默认时等待状态，可以转化为成功或失败， 状态更改后不能修改状态 
 */

const pending = 'pending'
const fulfilled = 'fulfilled'
const rejected = 'rejected'

function resolvePromise(promise2, x, resolve, reject) {
  // console.log(promise2, 'resolve')
  // https://promisesaplus.com/
  // 2.3.1
  if (promise2 === x) {
    return reject(new TypeError('TypeError: Chaining cycle detected for promise #<Promise>'))
  }

  // 2.3.3
  let called = false // 2.3.3.3.3
  if (typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, (y) => {
          // resolve(y)
          if (called) return  // 1)
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return  // 2)
          called = true
          reject(r)
        })
      } else {
        resolve(x) // { then: () => {} }
      }
    } catch (e) {
      if (called) return  // 3) 为了辨别这个promise 不能调用多次
      called = true
      reject(e)
    }
  } else {
    // 2.3.4 e.g. 常量
    resolve(x)
  }
}

class Promise1 {
  constructor(executor) {
    this.value = void 0
    this.reason = void 0
    this.status = pending
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = (value) => {
      if (value instanceof Promise1) {
        return value.then(resolve, reject)
      }
      if (this.status = pending) {
        this.value = value
        this.status = fulfilled
        this.onResolvedCallbacks.forEach((callback) => callback())
      }
    }

    const reject = (reason) => {
      if (this.status = pending) {
        this.reason = reason
        this.status = rejected
        this.onRejectedCallbacks.forEach((callback) => callback())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    // 值穿透
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
    let promise2 = void 0 // then链式调用
    promise2 = new Promise1((resolve, reject) => {
      // 异步
      if (this.status === pending) {
        this.onResolvedCallbacks.push(() => {
          // 这里是异步的，不加setTimeout也可以
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }

      // success
      if (this.status === fulfilled) {

        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            // resolve(x)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })

      }
      // fail
      if (this.status === rejected) {

        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }

    })

    return promise2
  }
}

module.exports = Promise1
