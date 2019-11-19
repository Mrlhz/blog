/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 * `apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数`
 * `call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组`
 */

function fn1() {
  console.log(this, arguments)
}

function fn2() {
  console.log(2)
}

// Function.prototype.call = function () {
//   this() // fn2()  fn1.call(fn2)
// }

// fn1.call(fn2)
// fn1.call.call(fn2)
// fn1.call.call.call(fn2)

const window = global ? global : window

Function.prototype.call2 = function(context) {
  context = context ? Object(context) : window

  context.fn = this
  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  console.log(args, 'arg')
  const res = eval('context.fn(' + args + ')') // context.fn(arguments[1],arguments[2])
  delete context.fn
  return res
}


Function.prototype.apply2 = function(context, args) {
  context = context ? Object(context) : window

  context.fn = this

  if (!args) return context.fn()
  const res = eval('context.fn(' + args + ')')
  delete context.fn
  return res
}

// fn1.call2(fn2, 3, 6) 

fn1.call2.call2(fn2, 3, 6)
fn1.call.call(fn2, 3, 6)

var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value)
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null) // 2

console.log(bar.call2(obj, 'kevin', 18));

// fn1.apply2(fn2, [3, 6])
