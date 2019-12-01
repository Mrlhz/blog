/**
 * @description ES6 提供的一种异步编程解决方案
 * 生成器 -> 迭代器
 * 可以暂停执行 * 表示是一个生成器函数 yield 产出
 * @see http://es6.ruanyifeng.com/#docs/generator
 */
{
  function args() {
    let arr = [...{
      0: 1,
      1: 2,
      2: 3,
      length: 3,
      // 1.
      // [Symbol.iterator]: function () {
      //   let index = 0
      //   return {
      //     next: () => {
      //       return { done: this.length === index, value: this[index++] }
      //     }
      //   }
      // }

      // 2.
      [Symbol.iterator]: function* () {
        let index = 0
        while (this.length !== index) {
          yield this[index++]
        }
      }
    }, ]

    console.log(arr)
  }

  // args()
}


{
  function* log() {
    let a = yield 1
    console.log('a', a)
    let b = yield 2
    console.log('b', b)
    let c = yield 3
    console.log('c', c)
  }

  let it = log()
  it.next() // 第一次调用next时，传参没有任何意义
  it.next(100) // 这次执行会打印a的值， a的值是需要调用next方法传递进去的
  it.next(200)
  it.next(300)
}


{
  const fs = require('fs').promises
  const path = require('path')

  function callback(e) {
    if (e) console.log(e)
  }

  function* read() {
    let name = yield fs.readFile(path.resolve(__dirname, './data/name.txt'), 'utf8')
    // let name = yield fs.readFile(fileName, 'utf8')
    let str = yield Promise.resolve(name)
    return str
  }

  let it = read()
  let {
    value,
    done
  } = it.next()
  value.then((data) => {
    let {
      value,
      done
    } = it.next(data)
    console.log(value, done)
    value.then((data) => {
      let {
        value,
        done
      } = it.next(data)
      console.log(value, done)
      console.log(data === value)
    })
  })
}

{

  const fs = require('fs').promises
  const path = require('path')

  function* read() {
    let name = yield fs.readFile(path.resolve(__dirname, './data/name.txt'), 'utf8')
    // let name = yield fs.readFile(fileName, 'utf8')
    let str = yield Promise.resolve(name)
    return str
  }

  // todo
  function co(it) {
    return new Promise((resolve, reject) => {
      function next(r) {
        let {
          value,
          done
        } = it.next(r)
        if (!done) {
          Promise.resolve(value).then((r) => {
            next(r)
          })
        } else {
          resolve(value)
        }
      }

      next(undefined)
    })
  }

  co(read()).then((data) => {
    console.log('co', data)
  })
}