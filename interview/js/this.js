var a = 20

var obj = {
  a: 40,
  foo: () => {
    console.log(this.a)

    function func() {
      this.a = 60
      console.log(this.a)
    }

    func.prototype.a = 50
    return func
  }
}

var bar = obj.foo() // 浏览器中输出: 20
bar() // 浏览器中输出: 60
new bar() // 浏览器中输出: 60

/**
 * `1. 箭头函数不创建新的函数作用域直接沿用语句外部的作用域，因此 obj.foo() 执行时箭头函数中 this 是全局 window，`
 * `首先打印出 window 上的属性 a 的值 20，箭头函数返回了一个原型上有个值为 50 的属性 a 的函数对象 func 给 bar`
 * `2. 继续执行的是 bar()，这里执行的是刚刚箭头函数返回的闭包 func，其内部的 this 指向 window，`
 * `因此 this.a 修改了 window.a 的值为 60 并打印出来`
 * `3.然后执行的是 new bar()，根据之前的表述，new 操作符会在 func 函数中创建一个继承了 func 原型的实例对象并用 this 指向它，`
 * `随后 this.a = 60 又在实例对象上创建了一个属性 a，在之后的打印中已经在实例上找到了属性 a，因此就不继续往对象原型上查找了，所以打印出第三个 60`
 */



/**
 * `把上面例子的箭头函数换成普通函数`
 */

{
  var a = 20

  var obj = {
    a: 40,
    foo: function () {
      console.log(this.a)

      function func() {
        this.a = 60
        console.log(this.a)
      }

      func.prototype.a = 50
      return func
    }
  }

  var bar = obj.foo() // 浏览器中输出: 40
  bar() // 浏览器中输出: 60
  new bar() // 浏览器中输出: 60
}