/**
 * Promise 是一个类 new Promise
 * Promise 含义： 承诺 promise 三个状态 成功，失败，等待 pending, fulfilled, rejected
 * promise中存放两个变量，value和reason
 * promise的实例上会有then方法
 * 当创建一个promise的时候，需要提供一个执行器函数，此函数会立即执行
 * 默认时等待状态，可以转化为成功或失败， 状态更改后不能修改状态 
 */

class Promise2 {
  constructor(executor) {
    this.status = 'pending'
    this.value // 成功
    this.reason // 失败原因
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        this.resolveCallbacks.forEach((callback) => callback()) // 发布
      }
    }
    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.rejectCallbacks.forEach((callback) => callback())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onfulfilled, onrejected) {
    if (this.status === 'fulfilled') {
      onfulfilled(this.value)
    }

    if (this.status === 'rejected') {
      onrejected(this.reason)
    }
    // 异步
    if (this.status === 'pending') {
      // this.resolveCallbacks.push(onfulfilled)
      // 订阅
      this.resolveCallbacks.push(() => {
        onfulfilled(this.value)
      })
      // this.rejectCallbacks.push(() => {
      //   onrejected(this.reason)
      // })
      const that = this
      this.rejectCallbacks.push(function () {
        onrejected(that.reason)
      })
    }
  }
}


const promise = new Promise2((resolve, reject) => {
  console.log(0)
  // resolve(123)
  // reject(456)

  // setTimeout(() => {
  //   resolve('成功')
  // }, 1500)

  setTimeout(() => {
    reject('失败')
  }, 1500)

  // setTimeout(() => {
  //   // throw new Error('error')
  // }, 1000)

})

promise.then((value) => {
  console.log('success', value)
}, (err) => {
  console.log('fail', err)
})