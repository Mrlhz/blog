/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 * @see https://github.com/mqyqingfeng/Blog/issues/12
 * @description `bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用`
 * `1. bind方法可以绑定this指向，并绑定参数`
 * `2. bind方法返回一个绑定后的函数（高阶函数）`
 * `3. 如果绑定的函数被new，当前函数的this就是当前的实例`
 * `4. new 出来的结果可以找到原有类的原型`
 */
Function.prototype.bind2 = function(context) {
  const that = this
  const args = Array.prototype.slice.call(arguments, 1)
  function bindFn() {
    const bindArgs = Array.prototype.slice.call(arguments)
    console.log(args.concat(bindArgs))
    return that.apply(this instanceof bindFn ? this : context, args.concat(bindArgs))
  }
  // bindFn.prototype = this.prototype
  function Fn() {} //Object.create
  Fn.prototype = this.prototype
  bindFn.prototype = new Fn()
  return bindFn
}

const obj = {
  name: 'lhz'
}

function testFn(subject, year) {
  console.log(this)
  console.log(`${this.name} 在学习${subject}，参加工作${year}年了`)
}

testFn.prototype.hello = function() {
  console.log('hello')
}

let  bindFn = testFn.bind2(obj, 'JavaScript')

bindFn(1.5)

// let instance = new bindFn(1.5) // bind 时指定的 this 值会失效，但传入的参数依然生效

// console.log(instance)


/**
 * `终版`
 */
Function.prototype.bind2 = function (context) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
      var bindArgs = Array.prototype.slice.call(arguments);
      return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}

// 不完全版
Function.prototype.bind3 = function(){
  var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift();
  return function(){
    return fn.apply(object,
      args.concat(Array.prototype.slice.call(arguments)));
  };
};

Object.create = function( o ) {
  function f(){}
  f.prototype = o;
  return new f;
};

Function.prototype.bind4 = function() {
  const self = this // fn
  const args = Array.prototype.slice.call(arguments)
  const obj = args.shift() // bind obj
  console.log(self, obj);
  return function() {
    return self.apply(obj, args.concat(Array.prototype.slice(arguments)))
  }
}
