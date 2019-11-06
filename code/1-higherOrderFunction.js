/**
 * `高阶函数：函数参数是函数，或者这个函数返回一个新函数`
 * `AOP面向切片编程`
 * `before函数`
 */

// AOP 面向切面编程 把原来代码切成片，在中间加上自己的代码
// 装饰器 扩展原有的方法 重写原有的方法

function eat(text) {
  console.log(text)
  console.log('后吃饭')
}

Function.prototype.before = function (fn) {
  // this === eat
  const that = this
  return function () {
    console.log(this === global, arguments)
    fn()
    that(...arguments)
  }
  // return (...args) => {
  //   fn()
  //   this(args)
  // }
}

let beforeFn = eat.before(() => {
  console.log('先喝汤')
})

beforeFn('--', 'args')

// ---

// after 在多少次之后执行
// 缺陷：after后面只能绑定一次函数
function after(times, callback) {
  const arr = []
  return function (err, res) {
    if (err) console.log(err)
    arr.push(res)
    if (--times === 0) {
      callback && callback(err, arr)
    }
  }
}

let fn = after(3, function () {
  console.log('after')
})


// 解决异步问题
function testAfter() {
  fn()
  fn()
  fn()
}

function testAfter2() {
  const fs = require('fs')
  const path = require('path')

  const afterFn = after(2, function (err, data) {
    console.log(data)
  })

  fs.readFile(path.resolve(__dirname, './data/name.txt'), 'utf8', (err, data) => {
    // setTimeout(() => newFn(err, data), 200)
    afterFn(err, data)
  })

  fs.readFile(path.resolve(__dirname, './data/age.txt'), 'utf8', (err, data) => {
    if (err) console.log(err)
    afterFn(err, data)
  })
}

// run
// testAfter()
testAfter2()