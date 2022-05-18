## 数组

- [【深度长文】JavaScript数组所有API全解密](http://louiszhai.github.io/2017/04/28/array/)
- [JavaScript 标准内置对象-Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array.isArray Polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#polyfill)
- [Object.getOwnPropertyNames()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

### 方法
> 数组原型提供的方法非常之多，主要分为三种，一种是会改变自身值的，一种是不会改变自身值的，另外一种是遍历方法。
> 由于 Array.prototype 的某些属性被设置为[[DontEnum]]，因此不能用一般的方法进行遍历，我们可以通过如下方式获取 Array.prototype 的所有方法：

```js
Object.getOwnPropertyNames(Array)
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype)

// ['length', 'constructor', 'concat', 'copyWithin', 'fill', 'find', 'findIndex', 'lastIndexOf', 'pop', 'push', 'reverse', 'shift', 'unshift', 'slice', 'sort', 'splice', 'includes', 'indexOf', 'join', 'keys', 'entries', 'values', 'forEach', 'filter', 'flat', 'flatMap', 'map', 'every', 'some', 'reduce', 'reduceRight', 'toLocaleString', 'toString', 'at', 'findLast', 'findLastIndex']

```

### 改变自身值的方法(9个)
> 基于ES6，改变自身值的方法一共有9个，分别为pop、push、reverse、shift、sort、splice、unshift，以及两个ES6新增的方法copyWithin 和 fill。

### 不会改变自身的方法(9个)
> 基于ES7，不会改变自身的方法一共有9个，分别为concat、join、slice、toString、toLocateString、indexOf、lastIndexOf、未标准的toSource以及ES7新增的方法includes。

### 遍历方法(12个)
> 基于ES6，不会改变自身的方法一共有12个，分别为forEach、every、some、filter、map、reduce、reduceRight 以及ES6新增的方法entries、find、findIndex、keys、values。

### Array.from

```js
// 生成一个从0到指定数字的新数组
Array.from({ length: 10 }, (v, i) => i) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Array.isArray

```js
var a = {
  __proto__: Array.prototype
}

// 分别在控制台试运行以下代码
// 1.基于instanceof
a instanceof Array // true

// 2.基于constructor
a.constructor === Array // true

// 3.基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(a) // true

// 4.基于getPrototypeOf
Object.getPrototypeOf(a) === Array.prototype // true

Array.isArray(a) // false
```


```js
// Array.isArray Polyfill
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  };
}
```

### 鸭式辨型

```js

var o = { 0:"cat", 1:"dog", 2:"cow", 3:"chicken", 4:"mouse", length:5 }
Array.prototype.slice.call(o)

// ['cat', 'dog', 'cow', 'chicken', 'mouse']

var item = Array.prototype.pop.call(o)
console.log(o) // Object {0: "cat", 1: "dog", 2: "cow", 3: "chicken", length: 4}
console.log(item) // mouse

```
