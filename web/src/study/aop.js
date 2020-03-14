Function.prototype.before = function (beforeFn) {
  const self = this // 保存原函数的引用
  return function () { // 返回包含了原函数和新函数的"代理"函数
    typeof beforeFn === 'function' && beforeFn.apply(this, arguments) // 执行新函数，修正 this 
    return self.apply(this, arguments) // 执行原函数
  }
}


Function.prototype.after = function (afterFn) {
  const self = this
  return function () {
    const res = self.apply(this, arguments)
    typeof afterFn === 'function' && afterFn.apply(this, arguments)
    return res
  }
}

var obj = {
  n: 2,
  func: function () {
    console.log(this.n, arguments)
  }
}
var func = obj.func.bind(obj)

func = func.before(function () {
  console.log(1)
  console.log(Date.now())
}).after(function () {
  console.log(3)
  console.log(Date.now())
})

func(36)
