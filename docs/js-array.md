## 数组

- [【深度长文】JavaScript数组所有API全解密](http://louiszhai.github.io/2017/04/28/array/)
- [JavaScript 标准内置对象-Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array.isArray Polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#polyfill)

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
