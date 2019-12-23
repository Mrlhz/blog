/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * @see http://es6.ruanyifeng.com/#docs/function#箭头函数
 */

let a = 100 // let 不会污染全局作用域

let obj = { // let obj = {} 不是作用域
  a: 1,
  fn: () => {
    // window.setTimeout
    // setTimeout(() => {
    //   console.log(this.a)
    // })
    // this === obj
    console.log(this.a, this)
  },
  fn1() {
    console.log(this.a, this === obj) // 1
  }
}

obj.fn()
obj.fn1()
