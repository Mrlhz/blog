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
    fn()
    that(...arguments)
  }
  // return (...args) => {
  //   fn()
  //   this(args)
  // }
}

let newFn = eat.before(() => {
  console.log('先喝汤')
})

newFn('--')