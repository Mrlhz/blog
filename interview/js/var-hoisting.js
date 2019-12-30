/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var
 */
{
  console.log(a)
  var a = 12
  function fn() {
    console.log(a)
    var a = 13
  }

  fn()
  console.log(a)
}

{
  console.log(a)
  var a = 12
  function fn() {
    console.log(a)
    a = 13 // 全局变量
  }

  fn()
  console.log(a)
}

{
  console.log(a)
  a = 12 // 不提升
  function fn() {
    console.log(a)
    a = 13 // 全局变量
  }

  fn()
  console.log(a)
  // 程序报错
}

{
  var foo = 1
  function bar() {
    /**
     * 形参赋值：无
     * 变量提升
     * var foo
     * 不管条件是否成立，都要进行变量提升，新浏览器中对于判断体中的函数只是提前声明
     */
      // !undefined
      if (!foo) { 
      var foo = 10
    }
    console.log(foo)
  }
  bar()
}

{
  var n = 0
  function a() {
    var n = 10
    function b() {
      n++
      console.log(n)
    }
    b()
    return b
  }
  var c = a()
  c()
  console.log(n)
}

{
  // var hoisting
  bla = 2
  var bla;
  // ...

  // 可以隐式地（implicitly）将以上代码理解为：

  var bla;
  bla = 2;
}

{
  console.log(typeof z)
}